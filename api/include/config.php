<?php
require_once(__DIR__ . "/../vendor/autoload.php");
$config = [
  "database" => [
    "host"     => "localhost",
    "database" => "chatapp_base",
    "username" => "",
    "password" => ""
  ],
  "application" => [
    "baseUri" => "http://noahk.ddns.net/Websites/chatapp/"
  ],
  "ratchet" => [
    "baseUri" => "wss://noahk.ddns.net:8081",
    "port"    => 8080
  ],
  'json_webtoken' => [
    'key'       => 'replace_this_key_1\9@krav!"&-pQ"k5k\<ds$6L^v};V,h9['
  ]
];

if(file_exists(__DIR__ . '/config_custom.php')) {
  include(__DIR__ . '/config_custom.php');
}

function setHeader($header, $value) {
  header($header . ": " . $value, true);
}
setHeader("Access-Control-Allow-Origin", "*");
setHeader("Access-Control-Allow-Credentials", "true");
setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
setHeader("Access-Control-Allow-Headers", "*");

$headers = getallheaders();
if(isset($headers["Content-Type"]) && $headers["Content-Type"] == "application/json") {
  $_POST = json_decode(file_get_contents("php://input"), true);
}
