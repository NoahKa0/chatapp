<?php

require( __DIR__ . "/../include/config.php");
require( __DIR__ . "/../include/database.php");

use Firebase\JWT\JWT;

if(!isset($_POST["email"]) || !isset($_POST["password"])) {
  echo json_encode([
    "status" => "error",
    "message" => "Missing parameters!"
  ]);
  exit;
}
$email = $_POST["email"];
$password = $_POST["password"];

$stmt = $database->prepare("SELECT id, username, password FROM users WHERE email=? ");
$stmt->bind_param("s", $email);


if($stmt->execute()) {
  $result = $stmt->get_result();
  if($result->num_rows == 0) {
    echo json_encode([
      "status" => "error",
      "message" => "User not found!"
    ]);
  } else {
    $user = $result->fetch_assoc();
    if(password_verify($password, $user["password"])) {
      $payload = [
        'userid'   => $user["id"],
        'username' => $user["username"],
        'iat'      => strtotime('now'),
        'exp'      => strtotime('now') + 60,
        'iss'      => $config["application"]["baseUri"],
        'aud'      => $config["ratchet"]["baseUri"]
      ];

      echo json_encode([
        'status'    => 'success',
        'token'     => JWT::encode($payload, $config["json_webtoken"]["key"]),
        'websocket' => $config["ratchet"]["baseUri"] . ':' . $config["ratchet"]["port"]
      ]);
    } else {
      echo json_encode([
        "status" => "error",
        "message" => "Invalid password!"
      ]);
    }
  }
} else {
  echo json_encode([
    "status" => "error",
    "message" => "Internal error!"
  ]);
}

$stmt->close();

$database->close();