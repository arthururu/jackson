var jackson, jackson_runner ;
var path, invisiblepath, pathImage ;
function preload(){
  //imagens pré-carregadas
  jackson_runner = loadAnimation("Runner-1.png","Runner-2.png") ;
  pathImage = loagImage("path.png") ;
}

function setup(){
  createCanvas(400,400);
  background("black");

  //crie sprite aqui
  jackson = crateSprite(180,160,100,150);
  jackson.addAnimation("running",jackson_runner);
  jackson.scale = 0.25;

  path = createSprite(200,200,400,400);
  path.addImage("path",pathImage);
  path.velocityY = -4;
  path.scale = 0.3

}

function draw() {
  background(0);
  path.velocityY = -4;


  if(keyDown("UP_ARROW")&& jackson.y >= 190) {
    jackson.velocityY = -10;
  }
    if(path.Y < 0){
      path.Y = path.width/8;
    }
    drawsprites();
}

