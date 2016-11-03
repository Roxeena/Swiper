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
       // this.game.time.events.loop(Phaser.Timer.SECOND, updateSeconds, this);


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

        //quit
        this.game.time.events.add(Phaser.Timer.SECOND *68, this.quitGame, this);

        

    },

    generateImage: function() {
        //definerar bilder

        var rndnr=0;
        rndnr=rndnr +this.game.rnd.integerInRange(1, 4);
        arrowRight;
        arrowLeft;
        arrowUp;
        arrowDown;

        if ( rndnr==1){
        arrowRight = this.game.add.sprite(0,0,'bunny'); 
        }
        
        if ( rndnr==2){
        arrowLeft = this.game.add.sprite(100,0,'spacefighter');
        }
        
        if ( rndnr==1){
        arrowUp = this.game.add.sprite(100,0,'explosion');
        }

        if ( rndnr==1){
        arrowDown = this.game.add.sprite(100,0,'ghost');
        }
        picarray= [arrowRight,arrowLeft,arrowDown,arrowUp];
        this.game.physics.enable( [ picarray], Phaser.Physics.ARCADE);
            picarray.body.collideWorldBounds = true; 
            picarray.inputEnabled = true;
            picarray.input.enableDrag(true);
            picarray.input.allowVerticalDrag = false;

        
       
    },
    
    quitGame:function(pointer) {
        
        this.state.start('StartMenu');
    },
    
    
    update: function() {
        
        }
    
    
};