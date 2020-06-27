
class Ball {
    constructor(x, y,radius) {
var options={
                'restitution':0.8,
                'friction':0.3 ,
                'density':1.0,
                isStatic:false
            }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius=radius/2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     ellipseMode(RADIUS);
      fill(255,0,200);
      ellipse(pos.x,pos.y, this.radius);
     
    }
  }
  
  
