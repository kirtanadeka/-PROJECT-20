var car,wall;
var speed,weight;
var engine, world;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  speed = random(55,90);
  weight = random(400,1500);

  car = creatSprite(50,200,50,50);
  wall = creatSprite(1500,200,60,height/2);

  car.velocityX = speed;

 c = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

if(wall.x-car.x < (car.width+wall.width)/2){

  car.velocityX=0;

  var deformation=0.5 * weight * speed * speed/22509;

  if(deformation>180){
    car.shapeColour = colour(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car.shapecolour = colour(230,230,0);
  }
  if(deformation<100){
    car.shapeColour = colour(0,255,0);
  }
}
  drawSprites();
}