Game = function(game) {
    this.gameover;
    this.countdown;
    this.secondsElapsed;
    this.timer;
    this.generateImage;
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

        var music;
        music = this.game.add.audio('jerry');
        music.play();


        this.timer.start();

        //definerar bilder i loop med tiden        
        this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, this.generateImage, this);

        

    },

    generateImage: function() {
        //definerar bilder

        var rndnr=0;
        rndnr=rndnr +this.game.rnd.integerInRange(1, 2);
        if ( rndnr==1){
            bunny = this.game.add.sprite(0,0,'bunny');  
            this.game.physics.enable( [ bunny], Phaser.Physics.ARCADE);
            bunny.body.collideWorldBounds = true; 
            bunny.inputEnabled = true;
            bunny.input.enableDrag(true);
        }
        else if(rndnr==2){
        spacefighter = this.game.add.sprite(100,0,'spacefighter');
        this.game.physics.enable( [ bunny,spacefighter ], Phaser.Physics.ARCADE);
        spacefighter.body.collideWorldBounds = true;
        spacefighter.inputEnabled = true;
        spacefighter.input.enableDrag(true);
       
        }
        
        

        
       
    },
    
    quitGame:function(pointer) {
        
        this.state.start('StartMenu');
    },
    
    
    update: function() {
        
        }
    
    
};