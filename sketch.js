function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,300,70,30);
  movingRect.velocityX = -7;
  //movingRect.velocityY = -9;
  fixedRect = createSprite(200,300,30,70);
}

function draw() {
  background(0,0,0);  
  edges = createEdgeSprites();
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "blue";
  }else{
    movingRect.shapeColor = "grey";
    fixedRect.shapeColor = "grey";
  }
  bounceOff(movingRect, fixedRect);
  movingRect.bounceOff(edges);
  drawSprites();
}

