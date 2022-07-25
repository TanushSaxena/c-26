
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;
var box1,box2,box3,box4

var pendulum
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   box1= new Box(50,370,50,30)
   box2= new Box(150,370,50,30)
   box3= new Box(250,370,50,30)
   box4= new Box(350,370,50,30)

   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 pendulum= Matter.Constraint.create( 
{
pointA:{x:200,y:20},
bodyB:ball,
Length:100,
stiffness:0.01

}
 )
 World.add(world,pendulum)


  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 line(pendulum.pointA.x,pendulum.pointA.y,ball.position.x,ball.position.y)

box1.show()
box2.show()
box3.show()
box4.show()


  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  