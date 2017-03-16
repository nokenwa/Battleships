function loginScreen(){

  background(0,0,0);
  magnet.radius = 10;
  magicball(true);

  //Rectangle Container
  fill(0,0,0,200);
  stroke(255,255,255);
  strokeWeight(10);
  rect(width/2,height/2,width*.5,height*.3);
  strokeWeight(1);
  fill(255,255,255);
  text("Please Log in or Register",width*.5,height*.4);

  //Log in
  push();
  textAlign(LEFT);
  textSize(24);
  text("Username:",width*.28,height*.45);
  logininput();
  player.username='a';
  text("Password:",width*.28,height*.55);
  textAlign(CENTER);
  textSize(32);
  pop();

  //Register
  link = new button(width * .6, height*.5,"Register","form.html",'medium','goto');
  link.createButton();


}

function logininput(){
  if (player.username === null){
    loginrequest.username = createInput("username");
    loginrequest.username.addClass('username');
    loginrequest.password = createInput('password','password');
    loginrequest.password.addClass('password');
    dom = createButton('LogIn');
    dom.addClass('button');
    dom.position(width*.4, height*.6);
    dom.mousePressed(authenticate);
  }
}

function authenticate(){
    httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         reply = this.responseText;
         console.log(reply);
        if (this.responseText == reply){
          player.username = 'username';
          player.connected = true;
          $(".username").remove();
          $(".password").remove();
          $(".button").remove();
          console.log('nathaniel you are a genius');
          gamestate = home;
        }
      }
    };

    var url = "../serverfiles/getuser.php?user=test&password=tester";
    httprequest.open("GET",url,true);
    httprequest.send();
    // noLoop();

}
