<?php

$server = "igor.gold.ac.uk";
$user = "noken003";
$authentication= "Trinity333";
$database = "noken003_battleships";

$username = $_POST["username"];
$password = $_POST["password"];

//Connect to server
$connection = new mysqli($server, $user, $authentication, $database);
    //Throw Errow if it fails
    if ($connection->connect_error) {
      die("Failed to connect. See error: " .  $conn->connect_error);
    }

//Query
$query = "SELECT " . $username . "','" . $password . "','0','0','0','0','0','0','0')";

if ($connection->query($query) === TRUE){
  echo "New User Added";
} else {
  echo "Failed to add new user. Please see error: " . $query . "<br>" . $connection->error;
}

$connection->close();

?>
