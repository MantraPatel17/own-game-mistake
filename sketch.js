//adding the components for physics engine
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating the variables
var canvas;
var background,background1Img,background2Img, background3Img;
var hero, heroImg;
var drone,droneImg;
var invisibleGround1,invisibleGround2,invisibleGround3;
var bg;
var bullets, bulletsGroup, bulletsImg;


function preload(){

//preloading the images;
droneImg = loadImage("hDrone.png")
heroImg = loadAnimation("hero1.png","hero2.png","hero3.png","hero4.png","hero5.png","hero6.png")
bg = loadImage("bg3.jpg")
bulletsImg = loadImage("bullets.png");
background1Img = loadImage("bg.jpg");
background2Img = loadImage("bg2.jpg");
background3Img = loadImage("bg3.jpg");

}
function setup(){
  
  //creating the canvas
  canvas = createCanvas(displayWidth - 20, displayHeight-120);

  //creating the engine and adding it to the world
  engine = Engine.create();
  world = engine.world;

  //background = createSprite(displayWidth/2, displayHeight/2,displayWidth,displayHeight)
  //background.addImage(background1Img);
 // background.scale = 0.4
  //creating the invisible ground;
  invisibleGround1 = createSprite(100,500,2500,20)
  invisibleGround2 = createSprite(100,80,2500,20)
  invisibleGround3 = createSprite(100,330,2500,20)
  //creating the ground;
  drone = createSprite(200,200,30,30);
  drone.addImage(droneImg);
  drone.scale = 1;

  
  //creating the hero
  hero = createSprite(200,400,200,200);
  hero.addAnimation("hero",heroImg);
  hero.scale = 0.5;

  background.velocityX = -6
  bulletsGroup  = new Group();
}

function draw(){

 if(background1Img)
 background(background1Img)

 

 if(background.x<200  ){
  background.x = background.width /2;
 }


  drone.collide(invisibleGround2);
  drone.collide(invisibleGround3);

  drone.x = hero.x+100;
   
  //condition to control the drone
  if(keyDown(DOWN_ARROW)){
    drone.y = drone.y+10
  }
  if(keyDown(UP_ARROW)){
    drone.y = drone.y-10
  }

  if(keyDown(RIGHT_ARROW)){
    hero.x = hero.x+10
  }
  if(keyDown(LEFT_ARROW)){
    hero.x = hero.x-10
  }

  spawnBullets();
  //drawing the sprites
  drawSprites();
  
}

function spawnBullets(){
  
  if(keyCode === 32){
    bullets = createSprite(200,100,20,20);
    bullets.x = drone.x;
    bullets.y = drone.y; 
    bullets.velocityX = 10;
    bullets.addImage(bulletsImg);
    bullets.scale = 0.1
  }
}