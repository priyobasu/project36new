//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage1,dogImage2;
function preload()
{

dogImage1=loadImage("dog.png");
dogImage2=loadImage("happydog.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog=createSprite(250,250);
  dog.addImage(dogImage1);
  dog.scale=0.25;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW))
{
  writeStock(foodS);
  dog.addImage(dogImage2);
}
  drawSprites();
  textSize(25);
  fill("yellow");
  text("press UP ARROW to feed Drago Milk",50,100);
  

}
function readStock(data)
{
  foodS=data.val();
}
function writeStock(x)
{
  database.ref('/').update({
    food:x
  })
}



