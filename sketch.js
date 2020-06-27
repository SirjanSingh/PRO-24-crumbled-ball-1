const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , boxLeft,boxRight ,boxDown;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;



	//Create a Ground
	/*ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);*/
	 
	 ground = new Ground();

	 boxDown=new Dustbin(950, 660, 200,20);
	 boxRight= new Dustbin(1040,620,20,100)
	 boxLeft= new Dustbin(860,620,20,100)

	 ball = new Ball(200,100,80)
 
	Engine.run(engine);
  
}


function draw() {
  background(0);
Engine.update(engine);

  ground.display();
  boxLeft.display();
  boxRight.display();
  boxDown.display();
  ball.display();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:300,y:-200});
	}
}


