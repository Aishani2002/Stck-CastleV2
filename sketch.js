// b refers to base of the tower and c refers to the conw on top of the respective numbered tower.
//var btower1,btower2,btower3;
//var ctower1,ctower2,ctower3;

 //const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
 function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
    world = engine.world;
   
     rect (400,380,50,200);
     rect (370,380,40,150);
     rect (430,380,40,150);
    triangle (400,80,375,180,425,180);
    triangle (370,150,350,230,390,230);
     triangle (430,150,410,230,450,230);
      

}


function draw() {
  background(255,255,255);  

  
  Engine.update(engine);

  drawSprites();
}