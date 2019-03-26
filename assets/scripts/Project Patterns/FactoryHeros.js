import Ranger from "../Heros/Ranger";
import EnumHero from "../Enums/Heros.enum";

export default class FactoryHeros{
    constructor(){
        
    }
    getHeros(hero){
        if(hero == EnumHero.RANGER) return new Ranger();
        return null
    }
}