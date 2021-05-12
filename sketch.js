function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
    
if(hour>=01 && hour<=15){
  bg = "snow1.jpg";
}
else{
  bg = "snow2.jpg";
}
elseif{
bg = "snow3.jp"
}

backgroundImg = loadImage(bg);
console.log(backgroundImg);
