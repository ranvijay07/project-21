var b1;

var wall1;

var speed,weigth,thickness;


function setup() {
  createCanvas(1600,400);

  speed=random(53,61);
  weight=random(30,52);
  thickness=random(22,83)

  b1=createSprite(100,50,20,5);
  b1.velocityX=speed;
  b1.shapeColor="white"
  b1.debug=false;

  

  wall1=createSprite(1200,50,thickness,height/2);
  wall1.shapeColor="grey"
  wall1.debug=false;
  
  
}

function draw() {
  background("black");
  
  if(hasColided(b1,wall1)){
    b1.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)
  
    if(damage>10){
      wall1.shapeColor="red"
    }

    if(damage<10){
      wall1.shapeColor="green"
    }
  }

  drawSprites();
}


function hasColided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}