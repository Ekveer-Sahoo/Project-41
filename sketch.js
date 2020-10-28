const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var thun, thun1, thun2, thun3, thun4;
var canvas
var engine, world;
var maxDrops = 100;
var drops = [];
var rand;
var thunderCreatedFrame = 0;
var bruce;
var effect;
function preload(){
    thun1 = loadImage("i/thunderbolt/1.png");
    thun2 = loadImage("i/thunderbolt/2.png");
    thun3 = loadImage("i/thunderbolt/3.png");
    thun4 = loadImage("i/thunderbolt/4.png");
    rain = loadImage("raindrop.png");
    bruce = loadImage("i/Walking Frame/walking_1.png");
    effect = loadSound("sound.mp3");
}

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    
    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(displayWidth/2-20,displayHeight/4*4-200);

    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }

}

function draw(){
  background("black");
  effect.play();


    Engine.update(engine);
    effect.play();

      rand = Math.round(random(1,4));
      if(frameCount%30===0){
          thunderCreatedFrame=frameCount;
          thun = createSprite(random(10,displayWidth-30), random(10,30), 10, 10);
          switch(rand){
              case 1: thun.addImage(thun1);
              break;
              case 2: thun.addImage(thun2);
              break; 
              case 3: thun.addImage(thun3);
              break;
              case 4: thun.addImage(thun4);
              break;
              default: break;
          }
          thun.scale = random(0.3,0.5)
      }
  
      if(thunderCreatedFrame + 10 ===frameCount && thun){
          thun.destroy();
      }

      umbrella.display();

      //displaying rain drops
      for(var i = 0; i<maxDrops; i++){
          drops[i].showDrop();
          drops[i].updateY();
          
      }


  
      drawSprites();
}   



