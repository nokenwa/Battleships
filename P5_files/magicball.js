function magicball(magnetenabled) {

  strokeWeight(1);
  //magnet.render();
  for (var i = 0; i <= 200; i++) {
    particles[i].render();
  }
  if(magnetenabled){magnet.pull()};
}

function magicballsetup(canvaswidth,canvasheight){
  for (var i = 0; i <= 200; i++) {
    particles[i] = new Particle(random(canvaswidth), random(canvasheight), {
      x: Math.random(-1,1),
      y: Math.random(-1,1)
    })
  }
}

//GRAVITY POINTS
var distancex, distancey, distanceh = 1, angle, x, y;
var pullforce = {
  magnitude: 0,
  vector: 0
};

function GravityPoint(x, y, radius, targets,strength) {
  this.position = {
    x: x,
    y: y
  };
  this.radius = radius;
  this.targets = targets;
  this.strength = strength;

  this.render = function(a, b) {
    fill(255, 255, 255);
    //ellipse(a || this.position.x, b || this.position.y, radius * 2, radius * 2);
  }

  this.pull = function() {
    for (var i = 0; i <= 200; i++) {
      distanceh=dist(this.position.x,this.position.y,this.targets[i].position.x,this.targets[i].position.y);
      pullforce.magnitude = .05/distanceh;
      if (distanceh == 0){pullforce.magnitude = 0;}

      angle = Angle(this.position,this.targets[i].position);
      pullforce.vector = {
        x: pullforce.magnitude*distanceh*sin(angle),
        y: pullforce.magnitude*distanceh*cos(angle)
      }


      this.targets[i].vector.x -=pullforce.vector.x;
      this.targets[i].vector.y +=pullforce.vector.y;

      if (distanceh <= 100 && (this.targets[i].vector.x >radius ||this.targets[i].vector.x <-3.5)){this.targets[i].vector.x=this.targets[i].vector.x*0.9;}
      if (distanceh <= 100 &&  (this.targets[i].vector.y >radius ||this.targets[i].vector.y <-3.5)){this.targets[i].vector.y=this.targets[i].vector.y*0.9;}
    }
  }
}

//Particles

function Particle(x, y, vector) {
  this.position = {
    x: x,
    y: y
  };
  this.vector = vector;
  this.color = (255);
  this.strength = 0;

  this.updatePosition = function() {
    this.position.x += this.vector.x;
    this.position.y += this.vector.y;
  }

  this.render = function() {
    this.bounce();
    this.updatePosition();
    fill(this.color)

    ellipse(this.position.x, this.position.y, 4, 4);
  }

  this.bounce = function() {
    if (this.position.x <= 0 || this.position.x >= width) {
      this.vector.x = this.vector.x * -1;
    }
    if (this.position.y <= 0 || this.position.y >= height) {
      this.vector.y = this.vector.y * -1;
    }

  }
}

//VECTORS AND VECTOR FUNCTIONS

function Vector(x, y) {
  this.x = x || 0;
  this.y = x || 0;
}

Vector.random = function() {
  return new Vector(random(-1, 1), random(1, -1));
}

function Angle(fixedpoint,movingpoint){
 angle = atan(abs(movingpoint.x-fixedpoint.x)/abs(movingpoint.y-fixedpoint.y));

  if (movingpoint.x > fixedpoint.x && movingpoint.y > fixedpoint.y){
    angle = (180-angle);
  }
  if (movingpoint.x <= fixedpoint.x && movingpoint.y > fixedpoint.y){
    angle = 180+angle;
  }
  if (movingpoint.x < fixedpoint.x && movingpoint.y <= fixedpoint.y){
    angle= (90-angle)+270;
  }
  return angle;
}
function magicball(magnetenabled) {

  strokeWeight(1);
  //magnet.render();
  for (var i = 0; i <= 200; i++) {
    particles[i].render();
  }
  if(magnetenabled){magnet.pull()};
}

function magicballsetup(canvaswidth,canvasheight){
  for (var i = 0; i <= 200; i++) {
    particles[i] = new Particle(random(canvaswidth), random(canvasheight), {
      x: Math.random(-1,1),
      y: Math.random(-1,1)
    })
  }
}


//GRAVITY POINTS
var distancex, distancey, distanceh = 1, angle, x, y;
var pullforce = {
  magnitude: 0,
  vector: 0
};

function GravityPoint(x, y, radius, targets,strength) {
  this.position = {
    x: x,
    y: y
  };
  this.radius = radius;
  this.targets = targets;
  this.strength = strength;

  this.render = function(a, b) {
    fill(255, 255, 255);
    //ellipse(a || this.position.x, b || this.position.y, radius * 2, radius * 2);
  }

  this.pull = function() {
    for (var i = 0; i <= 200; i++) {
      distanceh=dist(this.position.x,this.position.y,this.targets[i].position.x,this.targets[i].position.y);
      pullforce.magnitude = .05/distanceh;
      if (distanceh == 0){pullforce.magnitude = 0;}

      angle = Angle(this.position,this.targets[i].position);
      pullforce.vector = {
        x: pullforce.magnitude*distanceh*sin(angle),
        y: pullforce.magnitude*distanceh*cos(angle)
      }


      this.targets[i].vector.x -=pullforce.vector.x;
      this.targets[i].vector.y +=pullforce.vector.y;

      if (distanceh <= 100 && (this.targets[i].vector.x >radius ||this.targets[i].vector.x <-3.5)){this.targets[i].vector.x=this.targets[i].vector.x*0.9;}
      if (distanceh <= 100 &&  (this.targets[i].vector.y >radius ||this.targets[i].vector.y <-3.5)){this.targets[i].vector.y=this.targets[i].vector.y*0.9;}
    }
  }
}

//Particles

function Particle(x, y, vector) {
  this.position = {
    x: x,
    y: y
  };
  this.vector = vector;
  this.color = (255);
  this.strength = 0;

  this.updatePosition = function() {
    this.position.x += this.vector.x;
    this.position.y += this.vector.y;
  }

  this.render = function() {
    this.bounce();
    this.updatePosition();
    fill(this.color)

    ellipse(this.position.x, this.position.y, 4, 4);
  }

  this.bounce = function() {
    if (this.position.x <= 0 || this.position.x >= width) {
      this.vector.x = this.vector.x * -1;
    }
    if (this.position.y <= 0 || this.position.y >= height) {
      this.vector.y = this.vector.y * -1;
    }

  }
}

//VECTORS AND VECTOR FUNCTIONS

function Vector(x, y) {
  this.x = x || 0;
  this.y = x || 0;
}

Vector.random = function() {
  return new Vector(random(-1, 1), random(1, -1));
}

function Angle(fixedpoint,movingpoint){
 angle = atan(abs(movingpoint.x-fixedpoint.x)/abs(movingpoint.y-fixedpoint.y));

  if (movingpoint.x > fixedpoint.x && movingpoint.y > fixedpoint.y){
    angle = (180-angle);
  }
  if (movingpoint.x <= fixedpoint.x && movingpoint.y > fixedpoint.y){
    angle = 180+angle;
  }
  if (movingpoint.x < fixedpoint.x && movingpoint.y <= fixedpoint.y){
    angle= (90-angle)+270;
  }
  return angle;
}
