
function menu() {
  push();
  this.logoutbutton = new button(width * .08, height * .07, "Log out", loginScreen, 'medium', 'navigate');
  this.homebutton = new button(width * .5, height * .07, "Main Menu", home, 'medium', 'navigate');
  stroke(255);
  strokeWeight(2);
  push();
  fill(0,0,0);
  rect(width/2,height*0.055,width, height * .11);
  pop();
  noStroke();
  this.logoutbutton.createButton();
  this.homebutton.createButton();
  pop();
}

function button(xCenter, yCenter, label, target, size, type) {
  this.posx = xCenter;
  this.posy = yCenter;
  this.label = label;
  this.target = target;
  this.size = size;
  this.type = type;

  this.createButton = function() {
    fill(100);
    strokeWeight(2);
    stroke(255);
    if (this.size == 'medium') {
      textSize(32);
      if (hover(this.posx - (this.label.length * 10), this.posy - 38, this.posx + (this.label.length * 10), this.posy + 18)) {
        fill(255);
        this.onclick(this.type);
      }
      rect(this.posx, this.posy - 10, this.label.length * 20, 55, 20);

    } else if (this.size == 'large') {
      textSize(64);
      if (hover(this.posx - (this.label.length * 18), this.posy - 60, this.posx + (this.label.length * 18), this.posy + 20)) {
        fill(255)
        this.onclick(this.type);
      }
      rect(this.posx, this.posy - 20, this.label.length * 35, 80, 20);
    } else if (this.size == 'small') {
      textSize(16);
      if (hover(this.posx - (this.label.length * 5), this.posy - 18, this.posx + (this.label.length * 5), this.posy + 8)) {
        fill(255)
        this.onclick(this.type);
      }
      rect(this.posx, this.posy - 5, this.label.length * 10, 25, 20);
    } else {
      textSize(32);
      rect(this.posx, this.posy - 10, this.label.length * 20, 55, 20);
      this.onclick(this.type);
    }
    noStroke(0);
    fill(0);
    text(this.label, this.posx, this.posy);
  }
  this.onclick = function(role) {
    if (mouseIsPressed) {
      if (role == 'navigate') {
        if (this.target == gameplay){
          refresh();
        }
        this.clicknav();
      }else if (role == 'goto'){
        window.location.href = "form.html";
      }}
    }
  this.clicknav = function() {;
    gamestate = this.target;
  }
}

function hover(leftLimit, upperLimit, rightLimit, bottomLimit) {if (mouseX >= leftLimit && mouseX <= rightLimit && mouseY >= upperLimit && mouseY <= bottomLimit) {
    return true;
  } else return false;}
