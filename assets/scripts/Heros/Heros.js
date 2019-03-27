import * as Formulas from "../Formulas/Formulas";
export default class Heros{
    constructor(){

        //Primary Attributes
        this.life = 0
        this._strength = 0
        this._agility = 0
        this.intelligence = 0
        this.movement_speed = 0
        this._level = 1

        //Resistences
        this.magic_resistence = 0
        this.fisic_resistence = 0
        this.armor = 0
        this.evasion = 0

        //Regenerations
        this.life_regeneration = 0

        //earnings per level
        this.str_gain = 0 //Strength Gain
        this.agility_gain = 0 //Agility Gain
        this.int_gain = 0 //Intelligence Gain

        this.magic_resistence_gain = 0
        this.life_regeneration_gain = 0

        this.armor_gain = 0
        this.movement_speed_gain = 0

        //Trees Passives
        this.passives_trees = []

        //Passive Unique
        this.passive_unique = null

       //Atributtes Base
       this.life_base = 0
       this.strength_base = 0
       this.agility_base = 0
       this.intelligence_base = 0

       this.magic_resistence_base = 0

       this.life_regeneration_base = 0

       this.armor_base = 0

       this.movement_speed_base = 0
        
    }

    /**
     * @param {number} value
     */
    set strength(value){
        this._strength = value;
        Formulas.lifeCalculator.call(this)
        Formulas.magicResistenceCalculator.call(this)
        Formulas.lifeRegenerationCalculator.call(this)
    }

    get strength(){
        return this._strength
    }

    /**
     * @param {number} value
     */
    set agility(value){
        this._agility = value
        Formulas.armorCalculator.call(this)
        Formulas.movementSpeedCalculator.call(this)
    }

    get agility(){
        return this._agility
    }
    /**
     * @param {number} value
     */
    set level(value){
        this._level = value
        Formulas.atributtesGainCalculator.call(this)
    }

    get level(){
        return this._level
    }

}