var fixed,move;

function setup() {
  createCanvas(1000,600);
  fixed=createSprite(500,222,50,50);
  move=createSprite(200,222,50,50);
 
  fixed.shapeColor="green";
  move.shapeColor="green";
   fixed.velocityX=-5;
   move.velocityX=5;
 
}

function draw() {
  
  background(255,255,255);  
 


  
  bounceOff(fixed,move);
 
 edgeBounce(fixed,move);
if (isTouching(move,fixed)){
 move. shapeColor="yellow"
 fixed. shapeColor="red"
}
 else{
 move. shapeColor="green"
 fixed. shapeColor="green"
 }
  drawSprites();
}

    
        

