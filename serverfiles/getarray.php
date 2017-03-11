<?php

$server = "igor.gold.ac.uk";
$user = "noken003";
$authentication= "Trinity333";
$database = "noken003_battleships";

// $username = $_POST["user"];
// $password = $_POST["sessionid"];

//Connect to server
  $connection = mysqli_connect($server, $user, $authentication,$database);
    //Throw Errow if it fails
    if (!$connection) {
      die("Failed to connect. See error: " .  mysqli_connect_error());
    }
//Query
//$query = "SELECT hostarray FROM games WHERE sessionID = 'fw00000000';";
$query = "SELECT * FROM games";

$result = mysqli_query($connection,$query);
while($row = mysqli_fetch_assoc($result)) {
        echo $row["hostarray"];
    }

mysqli_close($connection);
?>
