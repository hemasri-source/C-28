class SlingShot{
    constructor (bodyX, pointY){
        var options = {
            bodyA:bodyX,
            pointB:pointY,
            stiffness:0.05,
            lenght:10,
        }
        this.pointB = pointY
        this.SlingShot = Constraint.create(options)
        World.add(world,this.SlingShot)
    }
    display(){
       if(this.SlingShot.bodyA){
        var pointA = this.SlingShot.bodyA.position
        var pointB = this.pointB
        strokeWeight(5)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
       }
    }
    fly(){
        this.SlingShot.bodyA=null
    }
}
