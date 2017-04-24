function gameplay(user,sessionid){
  imageMode(CENTER);
  background(0,0,0);
  tint(255,255,255,113);
  image(gameskin,width/2,height/2,width,height); //spacebg
  noTint();
  magicball();
  onlinerefresh(); //Refresh Game data from database
  drawUI(); //Draw User Interface

  //Turn Based Game flow Conditionals
  if (game.turn == setup){}

}

function drawUI(){
  //cockpit
  image(cockpit,width/2,height/2,width,height);

  //CONTROLS
  //radar
  push();
  translate(width*.5,height*.87)
  fill(0,0,0);
  rect(0,0,width*.121,height*.15);
  image(radar,0,0,width*.121,height*.15);
  fill(0,128,0,100);
  push();
  rotate(radians(frameCount)*5);
  triangle(0,0,0,height*.07,20,height*.07);
  pop();
  pop();

  //Special Weapons List
  push();
  translate(width*.28,height*.89);
  fill(0,0,10);
  quad(-width*.069,-height*.079,width*.069,-height*.085,width*.069,height*.07,-width*.068,height*.083);
  pop();

  //crest
  push();
  translate(width*.396,height*.875);
  fill(0,0,10);
  rect(0,0,width*.0685,height*.145);
  image(crest,0,0,width*0.06,width*0.06);
  pop();

  //Terminal
  push();
  translate(width*.715,height*.89);
  fill(0,0,10);
  quad(width*.069,height*.075,-width*.068,height*.074,-width*.069,-height*.08,width*.071,-height*.077);
  textAlign(CENTER);

  if (frameCount%30 >= 5){fill(255,255,255);}
  textSize(width*.01);
  text("Messages",0,0);
  pop();



  //Home Ship Display Array
  push()
  translate(width/2,height*.38);
  fill(150,150,150,100);
  rect(0,0,width*.5+40,height*.5+40,20);
  for (var i = 0; i<=10; i++){
    strokeWeight(10);
    for (var j = 0; j<=8; j++){
      push();
      if (userArray[i][j] == '0'){stroke(0,0,200);} else
      if (userArray[i][j] == '1'){stroke(255,255,0);} else
      {stroke(255,0,0)};
      if (mouseX-width*.5 >=((-width*.25)+i*((width*.5)/10)-5) && mouseX-width*.5 <= ((-width*.25)+i*((width*.5)/10)+5) && mouseY-height*.38 >= ((-height*.25)+j*((height*.5)/8)-5) && mouseY-height*.38 <= ((-height*.25)+j*((height*.5)/8)+5))
      {stroke(255,255,255);
      }
      point((-width*.25)+i*((width*.5)/10),(-height*.25)+j*((height*.5)/8));
      pop();
    }
  }
  pop()


}


function refresh(){


  //Retrieve Game status every 5 secs
  if (userArray !== 'undefined'){
    //Retrieve Game status every 5 secs
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
        userArray = decode(this.responseText);
        loop();
      }
    }
    xmlhttp.open("GET","../serverfiles/getarray.php",true);
    xmlhttp.send();
    noLoop();
  }
  //Backup if
  if (userArray == undefined){
    userArray=[];
    for (var i = 0; i<=10; i++){
      userArray[i] = [];
      for (var j = 0; j<=8; j++){
        userArray[i][j] = 0;
      }
    }
  }
}

function decode(string){
  var array = [];
  for (var i = 0; i<=10; i++){
    array[i]=[]
    for (var j = 0; j<=8; j++){
      //string = '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0'
      array[i][j] = string.charAt(((i*18)+(j*2))+1);
    }
  }
  return array;
}
