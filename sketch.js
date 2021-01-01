var bullet , wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);

   bullet = createSprite(50, 200, 50, 50);
   bullet.shapeColour("white");

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColour(80,80,80);

thickness = random(22,83);
  speed = random (223,321);
  weight = randon(30,52);


  bullet.velocityX=speed;
  bullet.weight=weight;
  bullet.thickness=thickness;
}

function draw() {
  background(255,255,255);  

bullet.collide(wall);

if (hasCollided(wall,bullet)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if (damage>10){
  wall.shapeColour(255,0,0);
}

if (damage<10){
  wall.shapeColour(0,255,0);
}
}


hasCollided();
  drawSprites();
}


function hasCollided(wall,bullet){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge){
return true
}
return false;
}
