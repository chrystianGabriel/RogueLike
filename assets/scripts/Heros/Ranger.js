import Heros from "Heros";
export default class Ranger extends Heros{
    constructor(){
        super();
        this.strength_base = 25
        this.strength_gain = 3.6

        this.agility_base = 20
        this.agility_gain = 2.2

        this.intelligence_base = 0
        this.intelligence_gain = 0

        this.life_base = 200
        this.life_gain = 20

        this.magic_resistence_base = 0.25;
        this.magic_resistence_gain = 0.0008;

        this.life_regeneration_base = 2.75
        this.life_regeneration_gain = 0.1

        this.armor_base = -2
        this.armor_gain = (1/6.25)

        this.movement_speed_base = 1900
        this.movement_speed_gain = 0.0005

        this.level = 15
        console.log(this.life)
    }
}

