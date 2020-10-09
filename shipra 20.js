var car,wall;
var speed,weight;
function setup() {
 createCanvas(1600,400) ;
 speed=random(50,90);
 weight=random(400,1500)
  car =createSprite(20,200,50,50);
  car.veloctiyX=2;
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
 background(0);
 
 
 drawSprites();
}