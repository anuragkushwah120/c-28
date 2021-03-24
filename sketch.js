
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var r
var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
r = new Roof (400,200,300,50)
b1 = new Ball(300,400,50)
b2 = new Ball(350,400,50)
b3 = new Ball(400,400,50)
b4 = new Ball(450,400,50)
b5 = new Ball(500,400,50)
r1 = new Rope(b1.body,r.body,-100,0)
r2 = new Rope(b2.body,r.body,-50,0)
r3 = new Rope(b3.body,r.body,0,0)
r4 = new Rope(b4.body,r.body,50,0)
r5 = new Rope(b5.body,r.body,100,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  r.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  
  drawSprites();
  b1.display();
  b2.display();
 b3.display();
 b4.display();
 b5.display();

}


