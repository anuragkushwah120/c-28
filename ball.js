class Ball{
    constructor (x,y,r)
{
    var options = {
        isStatic: true

    }
    this.x=x;
		this.y=y;
	    this.r=r;
		this.body=Bodies.circle(x, y,r, options);
 		World.add(world, this.body);
}
display(){
    var pose = this.body.position
    fill(255,0,255)
   circle (pose.x,pose.y,this.r)
}
}