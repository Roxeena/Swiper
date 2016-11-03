Game = function(game) {
    this.gameover;
    this.countdown;
    this.secondsElapsed;
    this.timer;
    this.generateImage;
};


Game.prototype = {

   
    create: function() {
        this.gameover = false;
        this.secondsElapsed = 0;
        this.timer = this.time.create(false);
        this.timer.loop(1000, this.updateSeconds, this);
        //this.game.time.events.loop(Phaser.Timer.SECOND, updateSeconds, this);

        //fysik statar t.ex. fysik
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 100;

        //bygg upp världen
        this.buildWorld();
    },
    
    updateSeconds: function() {
        this.secondsElapsed++;       
    },

    buildWorld: function() {

        //addar bakgrund hill och sky
        this.add.image(0, 0, 'sky');
        this.add.image(0, 800, 'hill');

        //musiken skapas och spelas
        var music;
        music = this.game.add.audio('jerry');
        music.play();

        //startar timer som events beror på
        this.timer.start();

        //definerar bilder i loop med tiden        
        this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 34, this.generateImage, this);

        //quit
        this.game.time.events.add(Phaser.Timer.SECOND *68, this.quitGame, this);
    },

    generateImage: function() {
        //definerar bilder

        var rndnr=0;
        var arrowUp;
        var arrowDown;
        var arrowRight;
        var arrowLeft;
        var arrowarray;
        var selected;
        rndnr=rndnr +this.game.rnd.integerInRange(1, 4);

        if (rndnr==1){

        arrowRight = this.game.add.sprite(this.game.world.randomX,0,'bunny'); 
        selected=arrowRight;
        }     
        if (rndnr==2){
        arrowLeft = this.game.add.sprite(this.game.world.randomX,0,'spacefighter');
            selected=arrowLeft;
        }
        if (rndnr==3){
        arrowUp = this.game.add.sprite(this.game.world.randomX,0,'explosion');
        selected=arrowUp;
        }   
        if (rndnr==4){
        arrowDown = this.game.add.sprite(this.game.world.randomX,0,'ghost');
        selected=arrowDown;
        }
      
        this.game.physics.enable( [ selected ], Phaser.Physics.ARCADE);
            selected.body.collideWorldBounds = true; 
            selected.inputEnabled = true;
            selected.input.enableDrag(true);
            selected.input.allowVerticalDrag = false;

            selected.events.onDragStart.add(startDrag, this);
            selected.events.onDragStop.add(stopDrag, this);

            function startDrag() {
                selected.body.moves = false;
            }

            function stopDrag() {
           selected.body.moves = true;

            }
            },

    
    quitGame:function() {
        this.state.start('StartMenu');
    },
    
    
    update: function() {
        
    }
    
    
};