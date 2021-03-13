var bullet,wall
var speed ,weight,thickness 
 


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

 

  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = color(255,255,255);

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(180,180,180);

  thickness  = random(22,83);

  speed = random(223,351);
  weight = random(30,52);
 
}

function draw() {
  background(0,0,0);

bullet.velocityX = speed;

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;

  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10)
  {
    wall.shapeColor = color(255,0,0);

  }

  if (damage<10)
  {
    wall.shapeColor = color(0,255,0);

  }

}
drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge>=wallLeftEdge){
      return  true;

  }
  return false;

}