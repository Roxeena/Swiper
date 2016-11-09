var Game = function(game) {
    //Declare some variables 
    this.gameover;
    this.countdown;
    this.secondsElapsed;
    this.timer;
    this.generateImage;
};

//Declare more variables??
var counterlives = 5;
var scoreText;
var score = 0;
var countertext;
var music;
var bounds;
var Width=540;
var Height=960;
var Level=0;
var arrowLeft;
var arrowRight;

Game.prototype = {
    create: function() {   
        //Initialize some settings and "meta data"
        this.gameover = false;
        this.secondsElapsed = 0;                        //Is this requierd when we have a timer?
        this.timer = this.time.create(false);           //This timer is never used, it is started but never used
        this.timer.loop(1000, this.updateSeconds, this);

        //Start the physics of the game, gravity
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 100;

        //Build world
        this.buildWorld();
    },
    
    updateSeconds: function() {
        //Update the variable with how many seconds have elapsed
        this.secondsElapsed++;       
    },

    buildWorld: function() {    //Build the game

        bounds = new Phaser.Rectangle(0, 0, Width-1, Height);
        //Add backgrounds
        this.add.image(0, 0, 'sky');
        this.add.image(0, 800, 'hill');

        //Add information about the score and the number of lives left 
        scoreText = this.game.add.text(0, 10, 'Score: '+score , { font: '34px Arial', fill: '#fff' });
        lifetext = this.game.add.text(0, 40, 'Lives : '+counterlives, { font: '34px Arial', fill: '#fff' });

        //Add the music and play it
        music = this.game.add.audio('jerry');
        music.play();

        //Start the timer
        this.timer.start();

        //Add objects in loop depending on time
        //Spawn an object every 2 seconds        

        this.game.time.events.repeat(Phaser.Timer.SECOND * (2/(Level+1)), 34, this.generateImage, this);
       

        //Quit after a certain amount of time, music ends
        this.game.time.events.add(Phaser.Timer.SECOND *68, this.quitGame, this);
    },

    generateImage: function() {     //Spawn an object
        
        
        var rndnr = this.game.rnd.integerInRange(1, 2);

        //Random X-position for spwan
        var spwnrng = 0;
        spwnrng = spwnrng + this.game.rnd.integerInRange(200, 400);

         if (rndnr == 1){
            //Add a bunny, right arrow
            arrowRight = this.game.add.sprite(spwnrng,0,'proto_right_pil'); 
            
            this.game.physics.enable( [ arrowRight ], Phaser.Physics.ARCADE);
            inputstuff(arrowRight);

            arrowRight.body.onWorldBounds = new Phaser.Signal();
            arrowRight.body.onWorldBounds.add(hitworldboundsright, this);

        }
        //If the random number is 2, then spawn a spacefighter, left arrow     
        if (rndnr==2){
            //Add a spacefighter, left arrow
            arrowLeft = this.game.add.sprite(spwnrng,0,'proto_left_pil');
            this.game.physics.enable( [ arrowLeft ], Phaser.Physics.ARCADE);
            inputstuff(arrowLeft);
            arrowLeft.body.onWorldBounds = new Phaser.Signal();
            arrowLeft.body.onWorldBounds.add(hitworldboundsleft, this);
     
        }

        
        function inputstuff(selected){

        //Enalbe swiping
        selected.inputEnabled = true;
        selected.input.enableDrag(true);
        selected.input.allowVerticalDrag = false;

        //Stop gravity on swiping
        selected.events.onDragStart.add(startDrag, this);
        selected.events.onDragStop.add(stopDrag, this);
        
        //collision signal and if read signal functioncall        
        selected.body.collideWorldBounds = true;
        
        } 
        //   
        function hitworldboundsleft (arrowLeft) {
            console.log(arrowLeft.position);
            if(arrowLeft.position.x<100){
               this.increment(arrowLeft);
            }
            else if( arrowLeft.position.y<=Height-100 )
            {
                console.log("sida1");
                this.decrement(arrowLeft);
            }
            else {
                this.floor(arrowLeft);
                console.log("floor");
            }
        }
        function hitworldboundsright (arrowRight) {
            if(arrowRight.position.x >=(Width-100) )
            {
                this.increment(arrowRight)
            }
            else if (arrowRight.position.y<=Height-100)
            {
                console.log("Sida2");
               this.decrement(arrowRight);
            }
            else {
                console.log("floor");
                this.floor(arrowRight);
            }
        }
      
        
        //When starting to drag stop gravity
        function startDrag(selected) {  
            selected.body.moves = false;
        }

        //When stopping to drag allow gravity
        function stopDrag(selected) {
            selected.body.moves = true;
        }
      },   
       
      increment:function (selected){  
                 //Remove the object
                selected.destroy();
                //Update the score. Why? Isnt this function only for when losing lives? 
                ++score;
                scoreText.setText( 'Score: '+score );
                //så det går snabbare.
                if(score % (Level*5)==0)
                {
                   ++Level;
                }
                },

        decrement: function(selected){
                //Remove the object
                selected.destroy();
                //Update the score. Why? Isnt this function only for when losing lives? 
                --score;
                scoreText.setText( 'Score: '+score );
                },

        floor: function(selected){
            //Decrement the number of lives
            --counterlives;
            
            //Update the number of lives 
            lifetext.setText('Lives : '+counterlives);

            //Play animation of exploion when an object collides with the world boundaries
            //Need to add an animation to the variable
           // selected.animations.add('explode');
            selected.play('explode', 12, true);     //Does not work! I think the object is deleted before the 
            //animation it played. Also think that the loading and adding of spritesheet is wrong. 
            //counterlives.text = 'lives: ' + counterlives;

            //Play a litle exlosion sound
            var sound = this.game.add.audio('explosion_audio');
            sound.play();
             //Remove the object
            selected.destroy(); 

             //Check if the player is out of lives
            if (counterlives === 0)
            {
                //Quit to start menu
                this.quitGame();
                //Vore nice om "Game over" menu dök upp först och musik ändrades. Nu fortsätter musiken 
                //och kan loopas med ny om man startar nytt spel igen direkt.
            }
   
        },
      

   quitGame: function() {
        counterlives=5;
        score=0;
        Level=0;
        music.pause();
        this.state.start('StartMenu');
    
    },
    update: function() {
       
    }
    
    
};