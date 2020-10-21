//maam they are showing some error that "createSprite" is not defined but it is a function
var monkey,banna,obstacle,bananaImage,obstacleImage,obstacleGroup,score,bkground;

var monkey_running;

var PLAY,END,gameState;

var ig;

function preload(){
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
  
  bkground = loadImage("jungle.jpg");
  
}

function setup() {
  createCanvas(400, 400);
  
  PLAY = 1;
  END = 2;
  gameState = PLAY; 
  
  bkground = createSprite(200,200);
  bkground.addImage("bkground",bkground);
  
  monkey = createSprite(50,40,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.10;
  
  ig = createSprite(15,200,400,5);
  ig.visible = false;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  
}

function draw() {
  if(gameState === PLAY){
    
     ground.velocityX = -4;
    
    
  
  if(keyDown("space") && monkey.collide(invisibleGround) ) {
    monkey.velocityY = -10;
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  
    
    
  }
  
   if(obstacleGroup.isTouching(monkey) ){
      gameState = END;
      
   } 
    
    if(monkey.isTouching(banana)){
      
      score = score+1;
      banana.destroy();
    }
    
    switch(score){
        
      case 10: monkey.scale = 0.12;
        break;
        
        case 20: monkey.scale = 0.14;
        break;
        
        case 30: monkey.scale = 0.16;
        break;
        
        case 40: monkey.scale = 0.18;
        break;
        
        case 50: monkey.scale = 0.2;
        break;
    }
    
    spawnbanans();
    spawnObstacles();
    
  }
  
  else if(gameState === END){
    
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    cloudGroup.setVelocityXEach(0);
    
    
    obstacleGroup.setLifetimeEach(-1);
    cloudGroup.setLifetimeEach(-1);
    
    
  }
  text("Score:"+score,350,50);
  
  trex.collide(invisibleGround);

  drawSprites();
}





function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}


function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;

    
    //add each cloud to the group
    bananaGroup.add(banana);
  }}