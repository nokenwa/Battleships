'use strict';

// Declaring User Class defined to hold user information
class User {
  constructor(username,connected){
    this.username = null;
    this.connected = false;
    this.profilePicPath = "assets/images/profile.png"
    this.profilePicObject= null;
    this.wins = 0;
    this.losses = 0;
    this.draws = 0;
    this.opengames = [];
    this.closedgames = [];
  }

  //Methods for profile picture
      //Load image
        loadProfilePic(){
           this.profilePicObject = loadImage("assets/images/profile.png")
        }
      //Draw image
        drawProfilePic(x,y,image_width,image_height){
          imageMode(CORNER);
          image(this.profilePicObject,x,y,image_width,image_height);
        }




}
