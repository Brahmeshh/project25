class Paper{
    constructor(x,y,r){

        this.image = loadImage("sprites/paper.png");

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.8

        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r/2,options)
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos=this.body.position;
        ellipseMode(RADIUS);
        push();
        translate(pos.x,pos.y)
        fill("white");
        strokeWeight(4);
        stroke("green");
        //ellipse(0,0,this.r);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}