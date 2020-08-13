var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;
var box2;
var box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5,});
	World.add(world, packageBody);
	

	Engine.run(engine);

	box1 = new Box(345,600,10,90);
	box2 = new Box(400,630,90,10);
	box3 = new Box(455,600,10,90);
}


function draw() {
  rectMode(CENTER);
   
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
 
  Engine.update(engine);

  drawSprites();

  box1.display();
  box2.display();
 box3.display();

	
}


function keyPressed() {
 if (keyDown === DOWN_ARROW) {
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
 }
}



