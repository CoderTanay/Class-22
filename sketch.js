const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ourengine, ourworld, ground, ball;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);



  ourengine = Engine.create();
  ourworld = ourengine.world;

  var options = {
    isStatic: true

  }

  var ball_options ={
    restitution: 0.8

  }
  ground = Bodies.rectangle(200,390,400,20,options)
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(ourworld,ball)
  World.add(ourworld,ground);
  console.log(ground);

}

function draw() {
  background(0); 
  Engine.update(ourengine) 

  ellipseMode (RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
  //drawSprites();
}