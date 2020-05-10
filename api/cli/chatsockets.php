<?php

require_once(__DIR__ . '/../include/config.php');
require_once(__DIR__ . '/classes/ChatServer.php');

$server  = new ChatServer($config);
$server->start();
