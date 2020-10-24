var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4, gameObject5 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1= createSprite(100,100,50,50);
  gameObject1.shapeColor= "yellow";

  gameObject2= createSprite(200,100,50,50);
  gameObject2.shapeColor= "yellow";

  gameObject3= createSprite(300,100,50,50);
  gameObject3.shapeColor= "yellow";

  gameObject4= createSprite(400,100,50,50);
  gameObject4.shapeColor= "yellow";

  gameObject5= createSprite(500,100,50,50);
  gameObject5.shapeColor= "yellow";
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  if(isTouching(movingRect,gameObject5))
  {
  movingRect.shapeColor = "blue";
  gameObject5.shapeColor = "blue";
  }
  else
  {
  movingRect.shapeColor = "green";
  gameObject5.shapeColor = "green";
  }
  drawSprites();
}

// Istouching will return a Boolean value--True/False
//class 21 pass arguments to the custom function
function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false;
}
}