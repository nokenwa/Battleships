function home() {
  background (0,0,0);
  magicball(false);
  menu();

  //Profile Information
  player.drawProfilePic(width*.1, height*.3, 200, 200);
  push();
  textAlign(LEFT);
  textSize(32);
  text(player.username,width*.1,(height*.3)+250);
  textSize(20);
  text("Wins: " + player.wins, width*.1, height*.7);
  text("Losses: " + player.losses, width*.1, height*.75);
  text("Draws: " + player.draws, width*.1, height*.8);
  pop();


  //My Friends
  push();
  textAlign(LEFT);
  rectMode(CORNER);
  textSize(32);
  text("My Friends",(width*.1)+250,height *.3);
  fill(0,0,0,200);
  stroke(255);
  rect((width*.1)+250,height*.35,width*.5,height*.3);
  pop();

  //Offline Mode
  var playOffline = new button((width*.4), height*.8,"Play Offline!", 'gameplay', 'medium', 'navigate');
  playOffline.createButton();
}
