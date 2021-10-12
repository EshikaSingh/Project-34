class Hero {
  constructor(x,y,w)
	{
		var options = { 
			density: 0.5, 
		};
		this.x=x;
		this.y=y;
		this.w=w;
		this.image=loadImage("Images/superhero.png");
		this.body=Bodies.circle(this.x, this.y-40, (this.w)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-10);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.w-400, this.w+30)
			pop()
			
	}
}
