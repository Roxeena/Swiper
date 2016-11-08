var Game = function(game) {
    //Declare some variables 
    this.gameover;
    this.countdown;
    this.timer;
    this.generateImage;
};

//Declare more variables
var timer;
var secondsElapsed = 0;
var counterlives = 5;
var scoreText;
var score = 0;
var countertext;
var music;
var bounds;
var Width=540;
var Height=960;
var Level=0;
var rndnr;
var velocityStart = 150;
var numSecPerLev= 10;

Game.prototype = {
    create: function() {   
        //Initialize some settings and "meta data"
        this.gameover = false;                        
        timer = this.time.create(false);          
        timer.loop(1000, this.updateSeconds, this);
        timer.start();

        //Start the physics of the game, gravity
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //Build world
        this.buildWorld();
    },
    
    updateSeconds: function() {
        //Update the variable with how many seconds have elapsed
        secondsElapsed++;
        //Update the level with time
        if((secondsElapsed % numSecPerLev) == 0){
            ++Level;
        }       
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
        //this.timer.start();

        //Add objects in loop depending on time
        //Spawn an object every 2 seconds        

        this.game.time.events.repeat(Phaser.Timer.SECOND * (2), 34, this.generateImage, this);
       

        //Quit after a certain amount of time, music ends
        this.game.time.events.add(Phaser.Timer.SECOND *68, this.quitGame, this);
    },

    generateImage: function() {     //Spawn an object
        //Create a random number between 1 and 2
        rndnr = this.game.rnd.integerInRange(1, 2);

        //Random X-position for spwan
        var spwnrng = 0;
        spwnrng = spwnrng +this.game.rnd.integerInRange(200, 400);
        
        //Create a random object to spawn
        //If the random number is 1, then spawn a right arrow
        if (rndnr == 1){
            //Add a right arrow
            arrowRight = this.game.add.sprite(spwnrng,0,'proto_right_pil'); 
            selected = arrowRight;

        }
        //If the random number is 2, then spawn a left arrow     
        if (rndnr==2){
            //Add a spacefighter, left arrow
            arrowLeft = this.game.add.sprite(spwnrng,0,'proto_left_pil');
            selected = arrowLeft;
        }
     
        //Enable physics for new spawned object
        this.game.physics.enable( [ selected ], Phaser.Physics.ARCADE);
        
        //Set the velocity for the object
        selected.body.velocity.y = velocityStart + (Level + 1) * 10;
        
        //Enalbe swiping
        selected.inputEnabled = true;
        selected.input.enableDrag(true);
        selected.input.allowVerticalDrag = false;

        //Stop gravity on swiping
        selected.events.onDragStart.add(startDrag, this);
        selected.events.onDragStop.add(stopDrag, this);

        //Enable collision with world bounds and trigger event if this happens
        selected.body.collideWorldBounds = true;
        selected.body.onWorldBounds = new Phaser.Signal();
        selected.body.onWorldBounds.add(hitworldbounds, this);
           
        //tar bort object counter funkar ej atm. Malin: Denna funktion vill ha ett in argument, säker på att du skickar med något?
        //If an object hit the world bounds, this function is executed
        function hitworldbounds (selected) {
            
            if((selected.x<=100) || (selected.x >=Width-100))//pga objektbredd
            {
                //Remove the object
                selected.destroy();
                //Update the score. Why? Isnt this function only for when losing lives? 
                ++score;
                scoreText.setText( 'Score: '+score );
                
            }
            else
            {
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
            }
            
           
             //Check if the player is out of lives
            if (counterlives === 0)
            {
                //Quit to start menu
                this.quitGame();
                //Vore nice om "Game over" menu dök upp först och musik ändrades. Nu fortsätter musiken 
                //och kan loopas med ny om man startar nytt spel igen direkt.
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
    
    quitGame:function() {
        counterlives=5;
        score=0;
        Level=0;
        music.pause();
        this.state.start('StartMenu');
    },
    
    
    update: function() {
    }
    
    
};