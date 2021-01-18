
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var ground1;
var rope1, rope2 , rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground1 = new Ground(325,240,250,20)

	ball1 = new Ball(240,340,50);
	ball2 = new Ball(280,340,50);
	ball3 = new Ball(310,340,50);
	ball4 = new Ball(340,340,50);
	ball5 = new Ball(385,340,50);

	rope1 = new Rope(ball1.body, ground1.body, -100, 0);
	rope2 = new Rope(ball2.body, ground1.body, -50, 0);
	rope3 = new Rope(ball3.body, ground1.body, 0, 0);
	rope4 = new Rope(ball4.body, ground1.body, 50, 0);
	rope5 = new Rope(ball5.body, ground1.body, 100, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-700, y:700});
	
	}
}


