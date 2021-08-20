  //to create variables
var tile, tileImage;
var sheep, sheepImage;
var tileGroup, invisibleTileGroup;
var back, backImage;
  
//to load the images into the variable
function preload(){
  sheepImage = loadImage("image.png");
  tileImage = loadImage("tile2.png")
  backImage = loadImage("back.jpg")
  jumpSound = loadSound("jumpSound.wav")
}

  //creating the objects for the game
function setup(){
  createCanvas(500, 600);

  back = createSprite(250, 300)
  back.addImage(backImage)
  back.velocityY = 2;
  sheep = createSprite(250, 300, 20, 50);
  sheep.addImage(sheepImage);
  sheep.scale = 0.4;

  tileGroup = new Group()
  invisibleTileGroup = new Group()
}

  //to run the code multiple times
function draw(){
  background("skyBlue");
  if(back.y > 500){
    back.y = 300

  }

  spawnTiles();
  
  //to move the sheep according to the keys
  if(keyDown("SPACE")){
     sheep.velocityY = -5;
   }

  sheep.velocityY = sheep.velocityY+0.5;
  if(keyCode === RIGHT_ARROW){
   sheep.x = sheep.x + 3;
}

if(keyCode === LEFT_ARROW){
   sheep.x = sheep.x - 3;
}

if(invisibleTileGroup.isTouching(sheep)){
   tileGroup.bounce(sheep)
   jumpSound.play();
   
}
  drawSprites();
}

  //to spawn the tiles and to make it appear randomly
function spawnTiles(){
   if(frameCount%50 === 0){
	tile = createSprite(250, 0, 70, 15)
  tile.velocityY = 3;
	tile.x = Math.round(random(40, 460))
	tile.lifetime = 200;
  tile.addImage(tileImage);
  tile.scale = 0.1;
  tileGroup.add(tile)

   invisibleTile = createSprite(250, -5, 70, 5)
   invisibleTile.velocityY = 3;
   invisibleTile.x = tile.x;
   invisibleTile.lifetime = 200;
   invisibleTileGroup.add(invisibleTile)
   }
}
