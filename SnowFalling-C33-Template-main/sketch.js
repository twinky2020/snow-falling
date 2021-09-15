
function preload(){
backgroundImg = loadImage("snow2.jpg");
popeye1 = loadImage("popeye.jpeg");
}


function setup() {
  createCanvas(2000,1000);
  bg1 = createSprite(500, 50, 400, 400);
  bg1.addAnimation("bg",backgroundImg);
  pope = createSprite(70, 330, 400, 400);
  pope.addAnimation("po",popeye1);
  pope.scale=0.8;
}

function draw() {
background("white");
  bg1.display();
  pope.display();
  drawSprites();
  
}