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
        rndnr=rndnr +this.game.rnd.integerInRange(1, 4);
        

        if (rndnr==1){
            arrowRight = this.game.add.sprite(this.game.world.randomX,0,'bunny');  
            this.game.physics.enable( [ arrowRight ], Phaser.Physics.ARCADE);
            arrowRight.body.collideWorldBounds = true; 
            arrowRight.inputEnabled = true;
            arrowRight.input.enableDrag(true);
            arrowRight.input.allowVerticalDrag = false;

            arrowRight.events.onDragStart.add(startDrag, this);
            arrowRight.events.onDragStop.add(stopDrag, this);

            function startDrag() {
                arrowRight.body.moves = false;
            }

            function stopDrag() {
           arrowRight.body.moves = true;
            }

        }
        else if(rndnr==2){
            arrowLeft = this.game.add.sprite(this.game.world.randomX,0,'spacefighter');
            this.game.physics.enable( [ arrowLeft ], Phaser.Physics.ARCADE);
            arrowLeft.body.collideWorldBounds = true;
            arrowLeft.inputEnabled = true;
            arrowLeft.input.enableDrag(true);
            arrowLeft.input.allowVerticalDrag = false;

            arrowLeft.events.onDragStart.add(startDrag, this);
            arrowLeft.events.onDragStop.add(stopDrag, this);

            function startDrag() {
                arrowLeft.body.moves = false;
            }

            function stopDrag() {
           arrowLeft.body.moves = true;
            }
           
        }
        else if(rndnr==3){
            arrowUp = this.game.add.sprite(this.game.world.randomX,0,'explosion');
            this.game.physics.enable( [ arrowUp ], Phaser.Physics.ARCADE);
            arrowUp.body.collideWorldBounds = true;
            arrowUp.inputEnabled = true;
            arrowUp.input.enableDrag(true);
            arrowUp.input.allowVerticalDrag = false;

            arrowUp.events.onDragStart.add(startDrag, this);
            arrowUp.events.onDragStop.add(stopDrag, this);

            function startDrag() {
                arrowUp.body.moves = false;
            }

            function stopDrag() {
           arrowUp.body.moves = true;
            }
           
        }
        else if(rndnr==4){
            arrowDown = this.game.add.sprite(this.game.world.randomX,0,'ghost');
            this.game.physics.enable( [ arrowDown ], Phaser.Physics.ARCADE);
            arrowDown.body.collideWorldBounds = true;
            arrowDown.inputEnabled = true;
            arrowDown.input.enableDrag(true);
            arrowDown.input.allowVerticalDrag = false;

            arrowDown.events.onDragStart.add(startDrag, this);
            arrowDown.events.onDragStop.add(stopDrag, this);

            function startDrag() {
                arrowDown.body.moves = false;
            }

            function stopDrag() {
           arrowDown.body.moves = true;
            }
        
        }
    },

    
    quitGame:function() {
        this.state.start('StartMenu');
    },
    
    
    update: function() {
        
    }
    
    
};