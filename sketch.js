
var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, survivalTime=0;
var ground, bananaGroup;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite (400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  invisibleGround = createSprite(400, 350, 900, 10);
  invisibleGround.visible = false; // making invisible ground invisible
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  monkey.collide(invisibleGround);
  
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY= monkey.velocityY + 0.8;
  
  
  if (ground.x < 0) {
        ground.x = ground.width / 2;
  }
  
  if(frameCount%80==0){
    banana = createSprite(300,random(100,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=150;
    bananaGroup.add(banana);
  }
  
  if(frameCount%200==0){
    obstacle = createSprite(random(250,400),330);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
  }
  
  drawSprites();
}