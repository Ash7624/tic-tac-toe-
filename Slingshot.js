class Slingshot {
    constructor(body1,body2){

        var options = {
        bodyA: body1,
        bodyB : body2,
        stiffness: 0.05,
        length : 10,


        }

        this.sling = Matter.Constraint.create(options);
        World.add(World.this.sling);


    }

    display(){
    strokeweight(2);
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y);

            
    }
}