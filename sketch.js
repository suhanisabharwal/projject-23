var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	boxleftSprite=createSprite(450, 610, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);
	boxrightSprite=createSprite(650, 610, 20,100);
	boxrightSprite.shapeColor=color(255,0,0);
	boxbottomSprite=createSprite(550, 650, 200,20);
	boxbottomSprite.shapeColor=color(255,0,0);
	//create two more sprites to get the box like in the project document 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false); 
  }
  if (keyCode === LEFT_ARROW) { 
	  //to move helicopter
	   helicopterSprite.x=helicopterSprite.x-20; 
	   //to take package with you
		translation={x:-20,y:0};
		Matter.Body.translate(packageBody, translation) }

// write an if condition to move the helicopter right 
if (keyCode === RIGHT_ARROW) { 
	 helicopterSprite.x=helicopterSprite.x + 20; 
	  translation={x:20,y:0};
	  Matter.Body.translate(packageBody, translation) 
	
	}

}



