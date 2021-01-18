class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.2,
          density:0.1,
          friction:1

      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius;
      //this.image = loadImage("sprites/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      //imageMode(RADIUS);
      translate(pos.x,pos.y)
      //rotate(angle)
      ellipse(0,0,this.radius, this.radius);
      
      pop()
    }
  };