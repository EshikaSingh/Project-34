const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var bgImage;

function preload() {
  

  getTime();
}

function setup() {
  createCanvas(2000, 700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1400, 20);

  hero = new Hero(320,500,110);

  rope = new Rope(hero.body, {x: 320, y: -90});

  monster = new Monster(1100,550,300,300);

  //box1 = new Box(600, 100, 70, 70);
  //box2 = new Box(600, 100, 70, 70);
  //box3 = new Box(600, 100, 70, 70);
  //box4 = new Box(600, 100, 70, 70);
  //box5 = new Box(600, 100, 70, 70);
  //box6 = new Box(600, 100, 70, 70);
 // box7 = new Box(600, 100, 70, 70);

  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11= new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(800, 100, 70, 70);
  box14 = new Box(800, 100, 70, 70);

  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18= new Box(700, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(700, 100, 70, 70);

  box21 = new Box(900, 100, 70, 70);
  box22 = new Box(900, 100, 70, 70);
  box23 = new Box(900, 100, 70, 70);
  box24= new Box(900, 100, 70, 70);
  box25 = new Box(900, 100, 70, 70);

  var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
	  Engine.run(engine);
	  Render.run(render);

}

function draw() {
  if(bgImage){
  background(bgImage);
  }
  Engine.update(engine);
  ground.display();
  //box1.display();
  //box2.display();
  //box3.display();
  //box4.display();
  //box5.display();
  //box6.display();
  //box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  rope.display();
  hero.display();
  monster.display();


}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
      rope.attach(hero.body);
  }
}

async function getTime (){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;

  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour >= 06 && hour <= 18){
      bg = "Images/gamingbackground2.png";
  }
  else {
      bg = "Images/background2.jpg";
  }
  bgImage = loadImage(bg);
  console.log(bgImage);
}
