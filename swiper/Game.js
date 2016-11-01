Game = function(game) {
    this.gameover;
    this.countdown;
    this.secondsElapsed;
    this.timer;
    };

var bunny;
var spacefighter;
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
        //definerar bilder
        bunny = this.game.add.sprite(0,0,'bunny');
        spacefighter = this.game.add.sprite(100,0,'spacefighter');
        

        this.game.physics.enable( [ bunny,spacefighter ], Phaser.Physics.ARCADE);
        //collide with world 
        bunny.body.collideWorldBounds = true;
        spacefighter.body.collideWorldBounds = true;

    },
    
    quitGame:function(pointer) {
        
        this.state.start('StartMenu');
    },
    
    
    update: function() {
        
        }
    
    
};