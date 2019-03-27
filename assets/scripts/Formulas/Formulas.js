export default {
    atributtesGainCalculator:function(){
        this.strength = this.strength_base + Math.floor(this.strength_gain * (this.level-1))
        this.agility = this.agility_base + Math.floor(this.agility_gain * (this.level - 1))
        this.intelligence = this.intelligence_base + Math.floor(this.intelligence_gain * (this.level - 1))
        console.log(this.agility)
    },

    lifeCalculator: function(){
        this.life = this.life_base + this.strength * this.life_gain
    },

    magicResistenceCalculator: function(){
        this.magic_resistence = 1 - ((1 - this.magic_resistence_base) * (1 - this.strength * this.magic_resistence_gain))
        console.log(this.magic_resistence)
    },

    lifeRegenerationCalculator: function(){
        this.life_regeneration = this.life_regeneration_base + this.strength * this.life_regeneration_gain
        console.log(this.life_regeneration)
    },
    armorCalculator:function(){
        this.armor = this.armor_base + (this.agility * this.armor_gain)
        console.log(this.armor)
    },
    movementSpeedCalculator:function(){
        this.movement_speed = this.movement_speed_base + (this.agility * this.movement_speed_gain)
        console.log(this.movement_speed)
    }

}