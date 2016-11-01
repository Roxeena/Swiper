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
        rndnr=rndnr +this.game.rnd.integerInRange(1, 4);
        if ( rndnr==1){
            arrowRight = this.game.add.sprite(0,0,'bunny');  
            this.game.physics.enable( [ arrowRight], Phaser.Physics.ARCADE);
            arrowRight.body.collideWorldBounds = true; 
            arrowRight.inputEnabled = true;
            arrowRight.input.enableDrag(true);
            arrowRight.input.allowVerticalDrag = false;
        }
        else if(rndnr==2){
            arrowLeft = this.game.add.sprite(100,0,'spacefighter');
            this.game.physics.enable( [ arrowLeft ], Phaser.Physics.ARCADE);
            arrowLeft.body.collideWorldBounds = true;
            arrowLeft.inputEnabled = true;
            arrowLeft.input.enableDrag(true);
            arrowLeft.input.allowVerticalDrag = false;
           
        }
        else if(rndnr==3){
            arrowUp = this.game.add.sprite(100,0,'explosion');
            this.game.physics.enable( [ arrowUp], Phaser.Physics.ARCADE);
            arrowUp.body.collideWorldBounds = true;
            arrowUp.inputEnabled = true;
            arrowUp.input.enableDrag(true);
            arrowUp.input.allowVerticalDrag = false;
           
        }
        else if(rndnr==4){
            arrowDown = this.game.add.sprite(100,0,'ghost');
            this.game.physics.enable( [arrowDown ], Phaser.Physics.ARCADE);
            arrowDown.body.collideWorldBounds = true;
            arrowDown.inputEnabled = true;
            arrowDown.input.enableDrag(true);
            arrowDown.input.allowVerticalDrag = false;
           
        }
        
        

        
       
    },
    
    quitGame:function(pointer) {
        
        this.state.start('StartMenu');
    },
    
    
    update: function() {
        
        }
    
    
};