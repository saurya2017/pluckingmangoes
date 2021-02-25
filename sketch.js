
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var world,boy,chain1;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(931,214,30);
	mango3=new mango(1007,104,30);
	mango4=new mango(1057,209,30);
	mango5=new mango(1229,221,30);
	mango6=new mango(1135,36,30);
	mango7=new mango(999,291,30);
  mango8=new mango(893,163,30);
  mango9=new mango(1180,205,30)
 


	
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(245,450,50,50)
  chain1=new Chain(stoneObj.body,{x:240,y:410});
  
	
	
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stoneObj.display();
  chain1.display();
  
  

  groundObject.display();

drawSprites();
  text(mouseX + ',' + mouseY,10,45);
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain1.fly();
}


