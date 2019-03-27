import Ranger from "../Heros/Ranger";
cc.Class({
    extends: cc.Component,
    properties:{
        accLeft:false,
        accRight:false,
        accUP:false,
        accDown:false,
        speedX:10,
        speedY:10,
        maxSpeed:900
    },         
    onCollisionEnter:function(other,self){
        // var otherAabb = other.world.aabb
        // var otherPreAabb = other.world.preAabb.clone();

        // var selfAabb = self.world.aabb
        // var selfPreAabb = self.world.preAabb.clone()
        // selfAabb.x = selfAabb.x
        // otherPreAabb.x = otherAabb.x
        // selfAabb.y = selfAabb.y
        // otherPreAabb.y = otherAabb.y
        
        // if (this.speedX < 0 && (selfPreAabb.xMax > otherPreAabb.xMax)){
        //     this.node.x = (otherPreAabb.xMax + otherPreAabb.width) - this.node.parent.x
        // }else if(this.speedX > 0 && (selfPreAabb.xMin < otherPreAabb.xMin)){
        //     this.node.x = otherPreAabb.xMin - selfPreAabb.width - this.node.parent.x
        // }
        // if(this.speedY < 0 && (selfPreAabb.yMax > otherPreAabb.yMax)){
        //     this.node.y = (otherPreAabb.height + otherPreAabb.yMax) - this.node.parent.y;
        // }else if(this.speedY > 0 && (selfPreAabb.yMin < otherPreAabb.yMin)){
        //     this.node.y = otherPreAabb.yMin - selfPreAabb.height - this.node.parent.y;
        // }
        
    },
    onKeyDown: function(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
            case cc.macro.KEY.w:
                this.accUP = true;
                break;
            case cc.macro.KEY.s:
                this.accDown = true;
                break;
        }
    },
    onKeyUP: function(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
            case cc.macro.KEY.w:
                this.accUP = false;
                break;
            case cc.macro.KEY.s:
                this.accDown = false;
                break;
        }
    },
    // LIFE-CYCLE CALLBACKS:
    onEnable:function(){
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDrawBoundingBox = true;
    },
    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUP,this)
    },

    start () {
        
    },

    update (dt) {
      
        if(this.accLeft){
            this.speedX = -this.node.mask.movement_speed;
            this.speedY = 0
        }else if(this.accRight){
            this.speedX = this.node.mask.movement_speed;
            this.speedY = 0
        }else if(this.accUP){
            this.speedX = 0
            this.speedY = this.node.mask.movement_speed;
        }else if(this.accDown){
            this.speedX = 0
            this.speedY = -this.node.mask.movement_speed;
        }else{
            this.speedX = 0
            this.speedY = 0
        }

        if(Math.abs(this.speedX) > this.maxSpeed){
            this.speedX = this.maxSpeed * this.speedX / Math.abs(this.speedX);
        }
        if(Math.abs(this.speedY) > this.maxSpeed){
            this.speedY = this.maxSpeed * this.speedY / Math.abs(this.speedY);
        }
        this.node.x += this.speedX * dt
        this.node.y += this.speedY * dt
        cc.Camera.cameras[0].node.x = this.node.x
        cc.Camera.cameras[0].node.y = this.node.y
        
    },
    onDestroy: function(){
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUP,this)
    }
});
