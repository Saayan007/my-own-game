var bg1, bg1image
var h1,h1image


function preload(){
bg1image=loadImage("images/b-2.jpg")
h1image=loadAnimation("images/sprite1.png","images/sprite01.png","images/sprite2.png", "images/sprite02.png", 
"images/sprite3.png", "images/sprite03.png", "images/sprite4.png","images/sprite04.png")


}
function setup() {
  createCanvas(1000,600);
  bg1=createSprite(300,400)
 bg1.addImage("bg1",bg1image)
 bg1.scale=1.7

 h1=createSprite(100,470)
 h1.addAnimation("h1",h1image)
}
function draw() {
  background(0,0,0);  
  drawSprites();
  bg1.velocityX=12;
  if(bg1.x>600){
bg1.x=500

  }
}