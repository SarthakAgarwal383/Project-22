const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,helicopter,package;
var helicopter_img,package_img;
var groundsprite,package_body;

function preload()
{
helicopter_img=loadImage("helicopter.png");
package_img=loadImage("package.png");
	
}

function setup() {
	createCanvas(800, 700);

	engine=Engine.create();
	world=engine.world;

	package=createSprite(width/2, 80, 10,10);
	package.addImage(package_img)
	package.scale=0.2
	
	helicopter=createSprite(width/2,200,10,10);
	helicopter.addImage(helicopter_img);
	
	groundsprite=createSprite(width/2,height-35,width,10);
	groundsprite.shapeColor=color(255);

	ground= Bodies.rectangle(400,650,800,20);
	World.add(world,ground);

	package_body = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, package_body);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	

	 Engine.run(engine);

}


function draw() {
 

 rectMode(CENTER);
 background(0); 
  package.x= package_body.position.x 
  package.y= package_body.position.y 

  if (keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic( package_body , false);

}

  drawSprites();


 
}





