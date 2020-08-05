
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
//const papercircle = Matter.Body;

//var paperCircle;
//var paperImage;
//var dustbinImage;
var dustbinObj, paperObject,groundObject	
var world;

// function preload()
// {
// 	paperImage=loadImage("sprites/paper.png")
// 	dustbinImage=loadImage("sprites/dustbin.png")
// }

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  

	//Create the Bodies Here.
    //ellipse(350, 350, 55, 55);

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
	rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  
  
 
  
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}
