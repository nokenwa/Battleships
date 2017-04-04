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
    this.friends = [];
  }

  //Download User Data Method, will only work if property connected is true
  updateUserProfile(){
    var user = this;
    if (this.connected == true){
    httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
          reply=this.responseText;
          var datadownload = JSON.parse(reply);
          user.wins = datadownload.wins;
          user.losses = datadownload.losses;
          user.draws = datadownload.draws;
          user.friends = datadownload.friends;
          loop();
        }
      }

    httprequest.open("GET","../serverfiles/userdata.php?user="+this.username,true);
    httprequest.send();
    noLoop();
    };
    this.wins = user.wins;
    this.losses = user.losses;
    this.draws = user.draws;
    this.friends = user.friends;
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
