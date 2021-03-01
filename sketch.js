
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3;
var ground;
var paperBall;
var dustbinImg

function preload()
{
    dustbinImg = loadImage ("dustbingreen.png");

}
function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	bin1 = new Box(900,615,20,120);
	bin2 = new Box(825,665,120,20);
	bin3 = new Box(750,615,20,120); 
	ground = new Ground(600,690,1200,20);
	paperBall = new Paper(150,350,25);
    console.log(paperBall);

	Engine.run(engine);
  
}


function draw() {
	background(800);

  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  imageMode(CENTER);
  image(dustbinImg,825,615,160,130);
  paperBall.display();
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:55,y:-55});
	}
}
