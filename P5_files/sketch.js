//Variable Setup
var gamestate = openingScreen;
var assetpaths = [];
var assets = [];
var player = new User();
var loginrequest = {username:'username',password:'password'};
var dom;
var gameskin, cockpit,radar,crest;

function setup() {
  createCanvas(displayWidth,displayHeight*.94);
  magicballsetup(width,height);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  //assets = loader('assets/images/logospaceship.png');
  gameskin = loadImage('assets/images/spacebg.jpg');
  cockpit = loadImage('assets/images/battleship.png');
  radar = loadImage('assets/images/radarbg.jpg');
  crest = loadImage('assets/images/crest.png');
  player.loadProfilePic();
}

function draw() {
    gameplay();
}

function mousePressed() {
  
  //Opening Screen Mouse Functions
  if (gamestate == openingScreen){
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      var fs = fullscreen(); //set to full screen once user clicks
      fullscreen(!fs);
      gamestate = loginScreen;
    }
  }
  
  
  
  
}