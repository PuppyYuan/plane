
module.exports = cc.Class({
    extends: cc.Component,

    // lambda表达式 解决循环引用
    // @see http://www.cocos.com/docs/creator/scripting/reference/class.html#deferred-definition
    properties: () => ({
        battle: require('Battle'),
        scoreDisplay: cc.Label,
        mask: require('Mask'),
    }),

    pauseGame: function(){

        this.mask.node.active = true;
        cc.audioEngine.pause(this.battle.currentBgm); 
        cc.director.pause();
        
    },

    cancelGame: function(){

        cc.audioEngine.stop(this.battle.currentBgm);
        cc.director.resume();
        cc.director.loadScene('menu');
    },

    resumeGame: function(){

        this.mask.node.active = false;
        cc.audioEngine.resume(this.battle.currentBgm);
        cc.director.resume();
    },

});
