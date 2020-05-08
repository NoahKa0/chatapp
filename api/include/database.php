<?php

$database = new mysqli(
  $config["database"]["host"],
  $config["database"]["username"],
  $config["database"]["password"],
  $config["database"]["database"]
);
