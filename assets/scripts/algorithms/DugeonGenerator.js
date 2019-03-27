import Rooms from "../Map/Rooms";

export function generateRooms(map,max_tam_room,min_tam_room,qtd_rooms){
    for(let i = 0; i < qtd_rooms;i++){
         let height_room = Math.floor(Math.random() * max_tam_room) + min_tam_room
         let width_room = Math.floor(Math.random() * max_tam_room)+ min_tam_room
         do{
             let posX = Math.floor(Math.random() * (map.width - (width_room + 1))) + 1
             let posY = Math.floor(Math.random() * (map.height - (height_room + 1))) + 1
             var room = new Rooms(posX,posY,width_room,height_room)
 
         }while(map.checkIntersects(room) && map.rooms.length > 0)
 
         map.insertRoom(room)
 
    }
 }

