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
        
        //Add backgrounds
        this.add.image(0, 0, 'sky');
        this.add.image(0, 800, 'hill');

        //Add information about the score and the number of lives left 
        scoreText = this.game.add.text(0, 10, 'Score: '+score , { font: '34px Arial', fill: '#fff' });
        lifetext = this.game.add.text(0, 40, 'Lives : '+counterlives, { font: '34px Arial', fill: '#fff' });

        //Add the music and play it
        var music = this.game.add.audio('jerry');
        music.play();

        //Start the timer
        this.timer.start();

        //Add objects in loop depending on time
        //Spawn an object every 2 seconds        
        this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 34, this.generateImage, this);

        //Quit after a certain amount of time, music ends
        this.game.time.events.add(Phaser.Timer.SECOND *68, this.quitGame, this);
    },

    generateImage: function() {     //Spawn an object
        //Create a random number between 1 and 4
        var rndnr = 0;      
        rndnr = rndnr +this.game.rnd.integerInRange(1, 4);

        //The Score. Denna gör dubbel text! Redan addad tidigare i koden! 
        //Men den går ej att uppdatera (ej i loop) så förstår vad tanken är. Går det inte att göra som med 
        //elapsed secounds? Ha en function som uppdaterar värdet när ett event (ett mer i score) triggas?            
        scoreString = 'Score : ';
        score = 0;
        
        //Create a random object to spawn
        //If the random number is 1, then spawn a bunny, right arrow
        if (rndnr == 1){
            //Add a bunny, right arrow
            arrowRight = this.game.add.sprite(this.game.world.randomX, 0, 'bunny'); 
            selected = arrowRight;

            //Declare variables... Why here?
            var arrowUp;
            var arrowDown;
            var arrowRight;
            var arrowLeft;
            var arrowarray;
            var selected;
        }
        //If the random number is 2, then spawn a spacefighter, left arrow     
        if (rndnr==2){
            //Add a spacefighter, left arrow
            arrowLeft = this.game.add.sprite(this.game.world.randomX,0,'spacefighter');
            selected = arrowLeft;
        }
        //If random number is 3, spawn an explosion, up arrow
        if (rndnr==3){
            //Add an explosion, up arrow
            arrowUp = this.game.add.sprite(this.game.world.randomX,0,'explosion');
            selected=arrowUp;
        } 
        //If number is 4, spawn ghost, down arrow 
        if (rndnr==4){
            //Add a ghost, down arrow
            arrowDown = this.game.add.sprite(this.game.world.randomX,0,'ghost');
            selected=arrowDown;
        }
        
        //Enable gravity for new spawned object
        this.game.physics.enable( [ selected ], Phaser.Physics.ARCADE);
         
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

        //  You still need to call `collide` in your update function, and you can still use
        //  a callback with it too, but this Signal provides for another level of notification.

        
        //tar bort object counter funkar ej atm. Malin: Denna funktion vill ha ett in argument, säker på att du skickar med något?
        //If an object hit the world bounds, this function is executed
        function hitworldbounds (selected) {
            //Decrement the number of lives
            --counterlives;

            //Update the score. Why? Isnt this function only for when losing lives? 
            scoreText.setText( 'Score: '+score );
            //Update the number of lives 
            lifetext.setText('Lives : '+counterlives);

            //Play animation of exploion when an object collides with the world boundaries
            //Need to add an animation to the variable
            selected.animations.add('explode');
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
            
        }

        //When starting to drag stop gravity
        function startDrag() {
            selected.body.moves = false;
        }

        //When stopping to drag allow gravity
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