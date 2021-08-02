var astronaut,gym,bg,sleep,brush,eat,drink,move,gym2;
var sleeping,bgImg,brushing;
var edges;

function preload(){
  
  bg = loadImage("iss.png");
  gym =loadAnimation("gym1.png","gym2.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
 gym2 = loadAnimation("gym11.png","gym12.png");
 bath = loadAnimation("bath1.png","bath2.png");

}

function setup() {
  createCanvas(800,400);
 
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}


function draw() {
  background(bg);  
  drawSprites();
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  fill("white");
textSize(20);
text("INSTRUCTION",20,35);
textSize(10);
text("UP ARROW = BRUSHING",20,55)

text("DOWN ARROW = GYMMING",20,70)

text("LEFT ARROW = EATING",20,85)

text("RIGHT ARROW = BATHING",20,100)

text("M  ARROW = MOVING",20,115)

 if(keyDown("up")){
 astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 }

 if(keyDown("down")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 }
 if(keyDown("left")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.x = 150;
  astronaut.velocityX = 0.5;
  astronaut.velocityY = 0.5;
 }
 if(keyDown("right")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 }
 
 if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
 }
 


}
