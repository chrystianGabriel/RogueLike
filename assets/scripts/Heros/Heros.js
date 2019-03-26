
export default class Heros{
    constructor(){

        //Primary Attributes
        this.life = 0
        this.strength = 0
        this.agility = 0
        this.intelligence = 0
        this.movement_speed = 0

        //Resistences
        this.magic_resistence = 0
        this.fisic_resistence = 0
        this.armor = 0
        this.evasion = 0

        //Regenerations
        this.life_regeneration = 0

        //earnings per level
        this.life_gain = 0
        this.str_gain = 0 //Strength Gain
        this.agi_gain = 0 //Agility Gain
        this.int_gain = 0 //Intelligence Gain

        //Trees Passives
        this.passives_trees = []

        //Passive Unique
        this.passive_unique = null

        this.speedX = 10;
        this.speedY = 10;
        
    }
    
}