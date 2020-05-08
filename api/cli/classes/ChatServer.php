<?php

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
use Firebase\JWT\JWT;

class ChatServer implements MessageComponentInterface {

  private $config;

  /**
   * 0 => ConnectionInterface
   * 1 => userid
   */
  protected $connections;

  /**
   * "resource" => connectionId
   * "username" => username
   */
  protected $users;

  /**
   * "name" => name of chat
   * "users" => [
   *   $userid => $username
   * ]
   */
  protected $chats;
  protected $lastChat;

  public function __construct($config) {
    $this->config = $config;
    $this->connections = [];
    $this->users = [];
    $this->chats = [];
    $this->lastChat = 0;
  }

  public function start() {
    $port = $this->config["ratchet"]["port"];
    $server = IoServer::factory(
      new HttpServer(
        new WsServer(
          $this
        )
      ),
      $port
    );

    printf('Started websocket server on port ' . $port . PHP_EOL);

    $server->run();
  }

  public function onOpen(ConnectionInterface $conn) {
    $this->connections[$conn->resourceId] = [$conn, null];

    printf('Connection opened: ' . $conn->resourceId . PHP_EOL);
  }

  public function onClose(ConnectionInterface $conn) {
    $user = $this->connections[$conn->resourceId][1];
    if($user !== null && isset($this->users[$user])) {
      unset($this->users[$user]);
    }
    unset($this->connections[$conn->resourceId]);

    printf('Connection closed: ' . $conn->resourceId . PHP_EOL);
  }

  public function onError(ConnectionInterface $conn, Exception $e) {
    $conn->close();
    printf('Error on connection: ' . $conn->resourceId . PHP_EOL);
  }

  public function onMessage(ConnectionInterface $conn, $msg) {
    $message = json_decode($msg, true, 16);

    $response = null;
    if($message !== null && isset($message['type']) && is_string($message['type'])) {
      switch($message['type']) {
        case 'authenticate':
          $response = $this->authenticate($conn, $message);
          break;
        case 'getChats':
          $response = $this->getChats($conn, $message);
          break;
        case 'createChat':
          $response = $this->createChat($conn, $message);
          break;
        case 'joinChat':
          $response = $this->joinChat($conn, $message);
          break;
        case 'sendMessage':
          $response = $this->sendMessage($conn, $message);
          break;
        default:
          break;
      }
    }
    if($response !== null) {
      if(isset($message['identifier'])) {
        $response['identifier'] = $message['identifier'];
      }
      $response['type'] = 'response';
      $conn->send(json_encode($response));
    }
  }


  /**
   * Authenticates a user using a json webtoken.
   * 
   * @param ConnectionInterface $conn
   * @param array $message
   * 
   * @return array json response
   */
  public function authenticate($conn, $message) {
    if(!isset($message['token'])) {
      return [
        'status' => 'error',
        'error'  => 'No token provided!'
      ];
    }

    $token = null;
    try {
      $token = JWT::decode($message['token'], $this->config['json_webtoken']['key'], ['HS256']);
    } catch(Exception $e) {
      return [
        'status' => 'error',
        'error'  => 'Invalid token!'
      ];
    }

    $userid = (int) $token->userid;
    $this->connections[$conn->resourceId][1] = $userid;
    $this->users[$userid] = [
      "resource" => $conn->resourceId,
      "username" => $token->username
    ];

    return [
      'status' => 'success'
    ];
  }

  /**
   * List all chats.
   * 
   * @param ConnectionInterface $conn
   * @param array $message
   * 
   * @return array json response
   */
  public function getChats($conn, $message) {
    $userid = $this->connections[$conn->resourceId][1];
    if($userid === null) {
      return [
        'status' => 'error',
        'error'  => 'Unauthenticated!'
      ];
    }

    $chats = [];
    foreach($this->chats as $id => $chat) {
      $chatinfo = [
        'id'          => $id,
        'name'        => $chat['name'],
        'member'      => false,
        'users'       => []
      ];
      foreach($chat['users'] as $id => $name) {
        $chatinfo['users'][] = [
          'id'   => $id,
          'name' => $name
        ];
        if($id == $userid) {
          $chatinfo['member'] = true;
        }
      }
      $chats[] = $chatinfo;
    }

    return [
      'status' => 'success',
      'chats'  => $chats
    ];
  }

  /**
   * Sends a message.
   * 
   * @param ConnectionInterface $conn
   * @param array $message
   * 
   * @return array json response
   */
  public function sendMessage($conn, $message) {
    $userid = $this->connections[$conn->resourceId][1];
    if($userid === null) {
      return [
        'status' => 'error',
        'error'  => 'Unauthenticated!'
      ];
    }
    if(!isset($message['chatid']) || !isset($message['message'])) {
      return [
        'status' => 'error',
        'error'  => 'Missing parameters!'
      ];
    }
    $msg = htmlspecialchars($message['message']);
    $chatid = (int) $message['chatid'];
    if(!isset($this->chats[$chatid]) || !isset($this->chats[$chatid]['users'][$userid])) {
      return [
        'status' => 'error',
        'error'  => 'Chat not found!'
      ];
    }

    foreach($this->chats[$chatid]['users'] as $id => $name) {
      $msg = [
        'message'     => $msg,
        'userid'      => $userid,
        'username'    => $name,
        'senderIsMe'  => $id == $userid
      ];

      $this->connections[$this->users[$id]['resource']][0]->send(json_encode($msg));
    }
  }

  /**
   * Joins a chat.
   * 
   * @param ConnectionInterface $conn
   * @param array $message
   * 
   * @return array json response
   */
  public function joinChat($conn, $message) {
    $userid = $this->connections[$conn->resourceId][1];
    if($userid === null) {
      return [
        'status' => 'error',
        'error'  => 'Unauthenticated!'
      ];
    }
    if(!isset($message['chatid'])) {
      return [
        'status' => 'error',
        'error'  => 'No chat id provided!'
      ];
    }
    $chatid = (int) $message['chatid'];

    if(!isset($this->chats[$chatid])) {
      return [
        'status' => 'error',
        'error'  => 'Chat not found!'
      ];
    }

    if(!$this->addUserToChat($userid, $chatid)) {
      return [
        'status' => 'error',
        'error'  => 'You are already a member!'
      ];
    }

    return [
      'status' => 'success'
    ];
  }

    /**
   * Creates a chat.
   * 
   * @param ConnectionInterface $conn
   * @param array $message
   * 
   * @return array json response
   */
  public function createChat($conn, $message) {
    $userid = $this->connections[$conn->resourceId][1];
    if($userid === null) {
      return [
        'status' => 'error',
        'error'  => 'Unauthenticated!'
      ];
    }
    if(!isset($message['name'])) {
      return [
        'status' => 'error',
        'error'  => 'No name provided!'
      ];
    }

    $chatname = $message['name'];
    if(!preg_match("/^[A-Za-z0-9\_\- ]{2,90}$/", $chatname)) {
      return [
        'status' => 'error',
        'error'  => 'Invalid name!'
      ];
    }

    $chatid = $this->lastChat;
    $this->lastChat++;

    $chat = [
      'name'  => $chatname,
      'users' => []
    ];

    $this->chats[$chatid] = $chat;

    $this->addUserToChat($userid, $chatid);

    return [
      'status' => 'success',
      'chatid' => $chatid
    ];
  }

  public function addUserToChat($userid, $chatid) {
    if(!isset($this->chats[$chatid]) || !isset($this->users[$userid])) {
      return false;
    }

    if(isset($this->chats['users'][$userid])) {
      return false;
    }

    $this->chats['users'][$userid] = $this->users[$userid];

    return true;
  }

}