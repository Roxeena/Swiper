Game = function(game) {
    this.gameover;
    this.countdown;
    this.secondsElapsed;
    this.timer;
    this.generateImage;
};

var counterlives= 5;
var scoreText;
var score=0;
var countertext;
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
        scoreText = this.game.add.text(0, 10, 'Score: '+score , { font: '34px Arial', fill: '#fff' });
        //  Lives
        lifetext=this.game.add.text(0, 40, 'Lives : '+counterlives, { font: '34px Arial', fill: '#fff' });

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

        //  The score
        scoreString = 'Score : ';
        score=0;
        
        //definerar bilder
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

        selected.body.onWorldBounds = new Phaser.Signal();
        selected.body.onWorldBounds.add(hitworldbounds, this);

        //  You still need to call `collide` in your update function, and you can still use
        //  a callback with it too, but this Signal provides for another level of notification.

        
        //tar bort object counter funkar ej atm
        function hitworldbounds (selected) {
            
            counterlives=counterlives-1;
            scoreText.setText( 'Score: '+score );
            //  Lives
            lifetext.setText('Lives : '+counterlives);

            selected.play('explosion');
         //   counterlives.text = 'lives: ' + counterlives;
            selected.destroy();
        if (counterlives === 0)
        {
        this.quitGame();
        }
            
            
            
        }

        function startDrag() {
            selected.body.moves = false;
        }

        function stopDrag() {
            selected.body.moves = true;
     
        }
      
},
    
    quitGame:function() {
        counterlives=5;
        this.state.start('StartMenu');
    },
    
    
    update: function() {
       
    }
    
    
};