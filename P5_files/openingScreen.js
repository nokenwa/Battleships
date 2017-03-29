var particles = [];

var magnet = new GravityPoint(screen.width/2, screen.height*.5,3.5, particles,10);

function openingScreen(){

  angleMode(DEGREES);


  noStroke();

  var spaceship = assets;
  background(0,0,0);
  magicball(true);
  image(spaceship,window.innerWidth/2,window.innerHeight/2,width*.1,width*.1);
  textSize(64);
  fill(255, 255, 255);
  text("Space-BattleShips", width/2, height*.2);
  textSize(48);
  text("Please Click to Enter", width/2, height*.7);
  textSize(32);
  text("Game will enter fullscreen mode once started",width/2,height*.8)

}
