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
  text("Online Friends",(width*.1)+250,height *.3);
  fill(0,0,0,200);
  stroke(255);
  rect((width*.1)+250,height*.35,width*.5,height*.5);

  var playerbuttons = []
  rectMode(CENTER);
  textAlign(CENTER);
  for (i = 0; i<player.friends.length; i++){
    playerbuttons[i]= new button((width*.1)+300, (height*.35)+25+(i*30), player.friends[i],gameplay,'small','navigate');
    playerbuttons[i].createButton();
  }
  pop();

  //Offline Mode
  //var playOffline = new button((width*.4), height*.8,"Play against AI", 'offline', 'medium', 'play');
  // playOffline.createButton();
}
