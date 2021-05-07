class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage('sprites/sling1.png')
        this.sling2 = loadImage('sprites/sling2.png')
        this.sling3 = loadImage('sprites/sling3.png')
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
    display() {
        image(this.sling1, 200, 25)
        image(this.sling2, 170, 17)

        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            if (pointA.x < 220) {
                image(this.sling3, pointA.x - 30, pointA.y - 15, 15, 30);
                stroke(86, 34, 8)
                strokeWeight(6);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y);
            }
            else {
                image(this.sling3, pointA.x + 15, pointA.y - 15, 15, 30);
                stroke(86, 34, 8)
                strokeWeight(3);
                line(pointA.x + 20, pointA.y, pointB.x + 30, pointB.y);
                line(pointA.x + 20, pointA.y, pointB.x - 20, pointB.y);
            }

        }
    }

}