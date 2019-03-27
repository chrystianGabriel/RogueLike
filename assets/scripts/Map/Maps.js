import Rooms from "./Rooms";

export default class Maps{
    constructor(width,height){
        this.width = width
        this.height = height
        this.rooms = []
        this.layout = new Array(width*height).fill(0);
    }
    
    /**
     * 
     * @param {Rooms} room 
     */
    insertRoom(room){
        this.rooms.push(room)
    }

    /**
     * 
     * @param {Rooms} otherRoom 
     */
    checkIntersects(otherRoom){
        for(let i = 0; i < this.rooms.length;i++){
            if(this.rooms[i].intersects(otherRoom)) return true;
        }
        return false;
    }
}