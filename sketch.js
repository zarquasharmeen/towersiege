const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot,holder,ball,ground,stand1,stand2,polygonim;

function preload() {
    polygonim = loadImage("HG200.jpg");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground();
    stand1 = new Stand(390,300,250,10)
    stand2 = new Stand(700,200,200,10)
    
    block1 = new Box(300,275,30,40)
    block2 = new Box(330,275,30,40)
    block3 = new Box(360,275,30,40)
    block4 = new Box(390,275,30,40)
    block5 = new Box(420,275,30,40)
    block6 = new Box(480,275,30,40)
    block7 = new Box(450,275,30,40)
    block8 = new Box(330,235,30,40)
    block9 = new Box(360,235,30,40)
    block10 = new Box(390,235,30,40)
    block11 = new Box(420,235,30,40)
    block12 = new Box(250,235,30,40)
    block13 = new Box(360,195,30,40)
    block14 = new Box(390,195,30,40)
    block15 = new Box(420,195,30,40)
    block16 = new Box(390,155,30,40)
    blocks1 = new Box(640,175,30,40)
    blocks2 = new Box(670,175,30,40)
    blocks3 = new Box(700,175,30,40)
    blocks4 = new Box(730,175,30,40)
    blocks5 = new Box(760,175,30,40)
    blocks6 = new Box(670,135,30,40)
    blocks7 = new Box(700,135,30,40)
    blocks8 = new Box(730,135,30,40)
    blocks9 = new Box(700,95,30,40)
    ball = Bodies.circle(50,200,20)
    World.add(world,ball);
    
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(this.ball,{x:100, y:200});
}

function draw(){
    background(56,44,44);
    Engine.update(engine);
    
    ground.display()
    stand1.display()
    stand2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    blocks1.display()
    blocks2.display()
    blocks3.display()
    blocks4.display()
    blocks5.display()
    blocks6.display()
    blocks7.display()
    blocks8.display()
    blocks9.display()
    imageMode(CENTER)
    image(polygonim,ball.position.x,ball.position.y,40,40)
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}