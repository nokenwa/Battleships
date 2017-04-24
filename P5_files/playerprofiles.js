function viewprofile(profile) {
  background (0,0,0);
  magicball(false);
  menu();

  //Profile Information
  profile.drawProfilePic(width*.1, height*.3, 200, 200);
  push();
  textAlign(LEFT);
  textSize(32);
  text(profile.username,width*.1,(height*.3)+250);
  textSize(20);
  text("Wins: " + profile.wins, width*.1, height*.7);
  text("Losses: " + profile.losses, width*.1, height*.75);
  text("Draws: " + profile.draws, width*.1, height*.8);
  pop();


  //My Friends
  push();
  textAlign(LEFT);
  rectMode(CORNER);
  textSize(32);
  text("Online Friends",(width*.1)+250,height *.3);
  challengebutton= new button((width*.3)+250,height *.3, 'Challenge ' + profile.username,'offline','small','play');
  challengebutton= new button((width*.3)+250,height *.4, home,'offline','small','navigate');
  fill(0,0,0,200);
  stroke(255);
  rect((width*.1)+250,height*.35,width*.5,height*.5);

  var playerbuttons = []
  rectMode(CENTER);
  textAlign(CENTER);
  for (i = 0; i<player.friends.length; i++){

    playerbuttons[i].createButton();
  }
  pop();

  //Offline Mode
  //var playOffline = new button((width*.4), height*.8,"Play against AI", 'offline', 'medium', 'play');
  // playOffline.createButton();
}
