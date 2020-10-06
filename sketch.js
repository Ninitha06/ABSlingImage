const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;


var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    sling1Img = loadImage("sprites/sling1.png");
    sling2Img = loadImage("sprites/sling2.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    platform = new Ground(150, 505, 300, 300);

    box1 = new Box(800,520,70,70);
    box2 = new Box(1000,520,70,70);
    pig1 = new Pig(900, 540);
    log1 = new Log(900,500,280, PI/2);

    box3 = new Box(800,460,70,70);
    box4 = new Box(1000,460,70,70);
    pig2 = new Pig(900, 480);

    log3 =  new Log(900,400,280, PI/2);

    box5 = new Box(900,400,70,70);
    log4 = new Log(840,360,150, PI/7);
    log5 = new Log(960,360,150, -PI/7);
   
        
    bird = new Bird(270,170);
    
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:270, y:170});

    let canvasmouse = Mouse.create(canvas.elt);
   // canvasmouse.pixelRatio = pixelDensity();
    let options = {
      mouse: canvasmouse }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    platform.display();

    image (sling1Img,270,155);
    bird.display();
    image (sling2Img,245,155);
    //log6.display();
    slingshot.display();    
}

// function mouseDragged(){
//     Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
// }


function mouseReleased(){
    setTimeout(() => {
        slingshot.fly();
      }, 150);
    
      //engine.timing.timeScale = 1.5;

       //engine.world.gravity.y=2;

}