
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, Bob_1, Bob_2, Bob_3, Bob_4,rope_1

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,300,30)

	

bob_1 = new bob(250,300);
bob_2 = new bob(300,300);
bob_3 = new bob(350,300);
bob_4 = new bob(400,300);
bob_5 = new bob(450,300);




rope_1 = new ropes(bob_1.body,roof.body,-100,0);
rope_2 = new ropes(bob_2.body,roof.body,-50,0);
rope_3 = new ropes(bob_3.body,roof.body,0,0);
rope_4 = new ropes(bob_4.body,roof.body,+50,0);
rope_5 = new ropes(bob_5.body,roof.body,+100,0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
  
roof.display()
bob_1.display()
bob_2.display()
bob_3.display()
bob_4.display()
bob_5.display()
//bob_6.display()
rope_1.display()
rope_2.display()
rope_3.display()
rope_4.display()
rope_5.display()
//rope_6.display()

 
}

/*function mouseDragged(){
	Matter.Body.setPosition(bob_1.body, {x: mouseX, y: mouseY})
}
function mouseDragged(){
	Matter.Body.setPosition(bob_2.body, {x: mouseX, y: mouseY})
}
function mouseDragged(){
	Matter.Body.setPosition(bob_3.body, {x: mouseX, y: mouseY})
}
function mouseDragged(){
	Matter.Body.setPosition(bob_4.body, {x: mouseX, y: mouseY})
}
function mouseDragged(){
	Matter.Body.setPosition(bob_5.body, {x: mouseX, y: mouseY})
}
function mouseDragged(){
	Matter.Body.setPosition(bob_6.body, {x: mouseX, y: mouseY})
}*/

function keyPressed(){
	if(keyCode===32){
	Matter.Body.applyForce(bob_1.body,bob_1.body.position,{x:-730,y:0});
	}
	
	}
	
