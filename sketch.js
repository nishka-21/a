
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
      isStatic:false,
		  restitution: 0.3,
      frictionAir:0,
		  density:1.2
	  }

	Engine.run(engine);
	
	ball = Bodies.circle(100,10,20,ball_options);
    World.add(world,ball);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);

  groundObj.display()
  {
    groundObj=new ground(width/2,670,width,20)
    leftSide=new ground(1100,600,20,120);
  }
 drawSprites();
 
}
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
}



