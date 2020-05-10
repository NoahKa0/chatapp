<?php

require( __DIR__ . "/../include/config.php");
require( __DIR__ . "/../include/database.php");

function getPost($key, $regex = false) {
  if(!isset($_POST[$key]) || ($regex !== false && !preg_match($regex, $_POST[$key]))) {
    echo json_encode([
      "status" => "error",
      "message" => "Invalid " . $key . "!"
    ]);
    exit;
  }
  return $_POST[$key];
}

$firstname = getPost("firstname", "/^[A-Za-z- ]{2,90}$/");
$lastname = getPost("lastname", "/^[A-Za-z- ]{2,90}$/");
$username = getPost("username", "/^[A-Za-z0-9\_\-. ]{2,90}$/");
$email = filter_var(getPost("email"), FILTER_VALIDATE_EMAIL);
$password = getPost("password");

if($email === false) {
  echo json_encode([
    "status" => "error",
    "message" => "Invalid email!"
  ]);
  exit;
}

if(strlen($password) < 8) {
  echo json_encode([
    "status" => "error",
    "message" => "Password must be at least 8 characters long!"
  ]);
  exit;
}
$password = password_hash($password, PASSWORD_DEFAULT);

$query = "INSERT INTO users (username, firstname, lastname, email, password) ";
$query .= "VALUES (?,?,?,?,?) ";

$stmt = $database->prepare($query);
$stmt->bind_param("sssss", $username, $firstname, $lastname, $email, $password);


if($stmt->execute()) {
  echo json_encode([
    "status" => "success",
    "message" => "User created!"
  ]);
} else {
  echo json_encode([
    "status" => "error",
    "message" => "User already exists!"
  ]);
}

$stmt->close();

$database->close();