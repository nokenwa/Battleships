
<?php

$server = "igor.gold.ac.uk";
$user = "noken003";
$authentication= "Trinity333";
$database = "noken003_battleships";

$username = $_GET["user"];

//Connect to server
  $connection = mysqli_connect($server, $user, $authentication,$database);
    //Throw Errow if it fails
    if (!$connection) {
      echo("Failed to connect. See error: " .  mysqli_connect_error());
    }

//Query
$query = "SELECT * FROM users WHERE username = '$username'";
$request = mysqli_query($connection,$query);
while($reply = mysqli_fetch_assoc($request)){

//Echo data as JSON Object
  echo "{";
  echo "username:'".$reply["username"]."',";
  echo "wins:'".$reply["wins"]."',";
  echo "losses:'".$reply["wins"]."',";
  echo "draws:'".$reply["wins"]."'}";
};

exit;
?>
