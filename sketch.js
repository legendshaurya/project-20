var wall1,car1,wall2,wall3,wall4,car2,car3,car4,line1,line2,line3,speed,weight;


function preload(){


  
}














function setup() {
  createCanvas(1600,400);
  wall1 = createSprite(1200, 85, 10, 70);
  wall2 = createSprite(1200, 190, 10, 70);
  wall3 = createSprite(1200, 280, 10, 70);
  wall4 = createSprite(1200, 370, 10, 70);
  car1 = createSprite(200, 80, 20, 20);
  car2 = createSprite(200, 185, 20, 20);
  car3 = createSprite(200, 275, 20, 20);
  car4 = createSprite(200, 365, 20, 20);






speed=random(55,90)
weight=random(400,1500)

car1.velocityX=speed
car2.velocityX=speed
car3.velocityX=speed
car4.velocityX=speed

}

function draw() {
  background("skyblue"); 

wall1.shapeColor=("white")
wall2.shapeColor=("purple")
wall3.shapeColor=("pink")
wall4.shapeColor=("orange")

if(wall1.x-car1.x<(car1.width+wall1.width)/2)
{
  car1.velocityX=0
deformation=0.5 * weight * speed* speed/22500
if(deformation>180)
{
car1.shapeColor=color(255,0,0)
}

if(deformation<180 && deformation>100)
{
  car1.shapeColor=color(230,230,0)
  

}
if(deformation<100)
{
  car1.shapeColor=color(0,255,0)
  
}




}


if(wall2.x-car2.x<(car2.width+wall2.width)/2)
{
  car2.velocityX=0
deformation=0.5 * weight * speed* speed/22500
if(deformation>180)
{
car2.shapeColor=color(255,0,0)
}

if(deformation<180 && deformation>100)
{
  car2.shapeColor=color(230,230,0)
  

}
if(deformation<100)
{
  car2.shapeColor=color(0,255,0)
  
}




}
if(wall3.x-car3.x<(car3.width+wall3.width)/2)
{
  car3.velocityX=0
deformation=0.5 * weight * speed* speed/22500
if(deformation>180)
{
car3.shapeColor=color(255,0,0)
}

if(deformation<180 && deformation>100)
{
  car3.shapeColor=color(230,230,0)
  

}
if(deformation<100)
{
  car3.shapeColor=color(0,255,0)
  
}




}
if(wall4.x-car4.x<(car4.width+wall4.width)/2)
{
  car4.velocityX=0
deformation=0.5 * weight * speed* speed/22500
if(deformation>180)
{
car4.shapeColor=color(255,0,0)
}

if(deformation<180 && deformation>100)
{
  car4.shapeColor=color(230,230,0)
  

}
if(deformation<100)
{
  car4.shapeColor=color(0,255,0)
  
}




}



  drawSprites() 
 

}


