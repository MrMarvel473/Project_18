var sword;
var PLAY=1;
var END=0;
var gameState=1;
var swordimage;
var fruit;
var enemy1;
var fruit1;
var fruit2;
var fruit3;
var fruit4;
var alien1;
var alien2;
var Score=0;
var knifesound;
var gameoversound;
var gameover;
function preload(){
swordimage=loadImage("sword.png");  
 fruit1=loadImage("fruit1.png");
 fruit2=loadImage("fruit2.png");
 fruit3=loadImage("fruit3.png");
 fruit4=loadImage("fruit4.png"); 
 alien1=loadImage("alien1.png");
 alien2=loadImage("alien2.png");
 gameover=loadImage("gameover.png");
 gameoversound=loadSound("gameover.mp3");
 knifesound=loadSound("knifeSwooshSound.mp3");
}
function setup(){
  createCanvas(500,420);
  sword=createSprite(40,200,20,20);
  sword.addImage(swordimage);
  sword.scale=0.5;
  fruitsGroup=createGroup();
  enemyGroup=createGroup(); 
}
function draw(){
  background("lightblue")
  if(gameState==PLAY){
    fruits();
  enemy();
  
  sword.y=World.mouseY
  sword.x=World.mouseX
  
  textSize(20);
  text("score ="+Score,400,30);
  if(sword.isTouching(fruitsGroup)){
    fruitsGroup.destroyEach();
    Score=Score+1;
    knifesound.play();
  }
if(sword.isTouching(enemyGroup)){
   enemyGroup.destroyEach();
   
 enemyGroup.SetVelocityEachX=0;
  fruitsGroup.setVelocityEachX=0;
   Score=0;
    sword.addImage(gameover);
   fruitsGroup.destroyEach();
   enemyGroup.destroyEach();
  gameState=END
   gameoversound.play();
   if(keyDown("r")){
     gameState=PLAY;
   }
    }
  }
  
 if(gameState==END){ 
    
 }
  
  drawSprites();
}
function fruits(){
  if(World.frameCount%80==0){
    fruit=createSprite(400,200,20,20);
  fruit.scale=0.2;
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    }else if(r==2){
      fruit.addImage(fruit2);
    }else if(r==3){
      fruit.addImage(fruit3);
    }else if(r==4){
      fruit.addImage(fruit4);
    }
  fruit.y=Math.round(random(50,340));
  
  fruit.velocityX=-(7+(Score/10));
  fruit.setLifeTime=100;
    
  fruitsGroup.add(fruit);
  }
}
function enemy(){
  if(World.frameCount%200==0){
    enemy1=createSprite(400,200,20,20);
    enemy1.addImage(alien1);
    enemy1.y=Math.round(random(100,300));
    enemy1.velocityX=-(8+(Score/10));
    enemy1.setLifeTime=50;
    enemyGroup.add(enemy1);
  }
}
function gameover(){
   
}