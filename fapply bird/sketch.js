


var bgImage, bg;
var bird,birdImage;
var pipe,pipeImage;

function preload(){
    bgImage = loadImage("images/bg.png")
    birdImage = loadImage("images/bird.png")
    pipeImage = loadImage("images/Pipe.png")
}




function setup(){
   createCanvas(500,700);
   
   bg = createSprite(250,350);
   bg.addImage(bgImage);
   bg.scale = 2.2;
   bg.velocityX = 3;
   
   bird = createSprite(100,350);
   bird.addImage(birdImage);
  // bird.scale =
  //bird.velocitX

 // pipe = createSprite()
}



function draw(){
   background(0);
  if(bg.x>300){
     bg.x = 250;
  }
   if(keyDown("SPACE") && bird.y  >= height-180) {
      bird.velocityY = -10;
   }

  bird.velocityY = bird.velocityY +0.5;
  drawSprites()
}
 function Pipe(){
  if(frameCount % 60 === 0){
     pipe = createSprite(600,height-95,10,40)
  }
  
 }
