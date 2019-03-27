export default class Rooms{
    constructor(x,y,width,height){
        this.x  = x
        this.y = y
        this.width = width
        this.height = height
         
    }

    intersects(otherRoom){
        return ((otherRoom.x + otherRoom.width) >= this.x
                && (otherRoom.y + otherRoom.height) >= this.y
                && (this.x + this.width) >= otherRoom.x
                && (this.y + this.height) >= otherRoom.y)
    }
}