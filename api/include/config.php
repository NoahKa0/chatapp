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
    "baseUri" => "ws://noahk.ddns.net/",
    "port"    => 8080
  ],
  'json_webtoken' => [
    'key'       => 'replace_this_key_1\9@krav!"&-pQ"k5k\<ds$6L^v};V,h9['
  ]
];

if(file_exists(__DIR__ . '/config_custom.php')) {
  include(__DIR__ . '/config_custom.php');
}
