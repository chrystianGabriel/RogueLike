import Ranger from "../Heros/Ranger";
cc.Class({
    extends: cc.Component,
    properties:{},         
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
        this.accLeft = false;
        this.accRight = false;
        this.accUP = false;
        this.accDown = false;
        this.collisionStay = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUP,this)
        this.properties = this.node.properties
        console.log(this.node.properties)
        console.log(this.properties)
        console.log(this.properties.speedX)
    },

    start () {
        
    },

    update (dt) {
        if(this.accLeft){
            this.speedX = -10
            this.speedY = 0
        }else if(this.accRight){
            this.speedX = 10
            this.speedY = 0
        }else if(this.accUP){
            this.speedX = 0
            this.speedY = 10
        }else if(this.accDown){
            this.speedX = 0
            this.speedY = -10
        }else{
            this.speedX = 0
            this.speedY = 0
        }

        if(Math.abs(this.speedX) > this.maxSpeed){
            this.speedX = this.maxSpeed * this.speedX / Math.abs(this.speedX);
        }
        if(Math.abs(this.speedY) > this.maxSpeed){
            this.speed = this.maxSpeed * this.speedY / Math.abs(this.speedY);
        }

        this.node.x += this.speedX
        this.node.y += this.speedY
        cc.Camera.cameras[0].node.x = this.node.x
        cc.Camera.cameras[0].node.y = this.node.y
        
    },
    onDestroy: function(){
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUP,this)
    }
});
