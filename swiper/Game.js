Game = function(game) {
    this.gameover;
    this.countdown;
    this.secondsElapsed;
    this.timer;
    };


Game.prototype = {
   
    create: function() {
        this.gameover = false;
        this.secondsElapsed = 0;
        this.timer = this.time.create(false);
        this.timer.loop(1000, this.updateSeconds, this);
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 100;


        this.buildWorld();
    },
    
    updateSeconds: function() {
        this.secondsElapsed++;
    },
    
    buildWorld: function() {
        this.add.image(0, 0, 'sky');
        this.add.image(0, 800, 'hill');
        this.timer.start();
        this.game.add.sprite(0,0,'bunny')
    },
    
    quitGame:function(pointer) {
        this.ding.play();
        this.state.start('StartMenu');
    },
    
    
    update: function() {
        }
    
    
};