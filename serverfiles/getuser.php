
<?php

$server = "igor.gold.ac.uk";
$user = "noken003";
$authentication= "Trinity333";
$database = "noken003_battleships";

$username = $_GET["user"];
$password = $_GET["password"];

//Connect to server
  $connection = mysqli_connect($server, $user, $authentication,$database);
    //Throw Errow if it fails
    if (!$connection) {
      die("Failed to connect. See error: " .  mysqli_connect_error());
    }

//Query
$passwordquery = "SELECT password FROM users WHERE username = '$username'";
$passwordcheck = mysqli_query($connection,$passwordquery);
while($reply = mysqli_fetch_assoc($passwordcheck)){

  if ($reply["password"] == $password){echo 'pass';}
  else {echo 'fail';}
};

// if ($password == $reply["password"]){
//   echo 'true';
// } else echo 'fail';
//
//
//
// mysqli_close($connection);
exit;
?>
