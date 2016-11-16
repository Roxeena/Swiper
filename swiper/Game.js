var Game = function(game) {
    //Declare some variables 
    this.gameover;
    this.countdown;
    this.timer;
    this.generateImage;
};

//Declare more variables
//time
var timer;
var secondsElapsed = 0;
//bounds
var bounds;
//arrows
var arrowLeft;
var arrowRight;
var rndnr;
//lvl stuff
var velocityStart = 150;
var numSecPerLev= 5;
var spawnspeed=1;
var Level=1;
var Levelspawn=1;
//feedback
var text;
var meme;
var countertext;
var counterlives = 5;
var scoreText;
var score = 0;

Game.prototype = {
    create: function() {   
        score = 0;
        //Initialize some settings and "meta data"
        gameover = false;                        
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

        if((secondsElapsed % 20) == 0){
            ++Levelspawn;
            spawnspeed=(2/(Levelspawn));
        } 

        if (secondsElapsed == 1)
        {
             this.memes(1);
        }  

    },

    buildWorld: function() {    //Build the game

        bounds = new Phaser.Rectangle(0, 0);

        //Add backgrounds
        var background = game.add.image(game.world.centerX, game.world.centerY, 'sky');
        background.anchor.set(0.5, 0.5);
        background.width = game.width;
        background.height = game.height;

        //Add information about the score and the number of lives left 
        scoreText = this.game.add.text(game.world.centerX, 20, 'Score: '+score , { font: '34px Arial', fill: '#fff' });
        scoreText.anchor.set(0.5);
        lifetext = this.game.add.text(game.world.centerX, 50, 'Lives : '+counterlives, { font: '34px Arial', fill: '#fff' });
        lifetext.anchor.set(0.5);

        //Add the music and play it  
        music = this.game.add.audio('jerry5min');

        if(muteMusicbool == false)
        {
            music.play();
        }

        //Add objects in loop depending on time
        //Spawn an object every 2 seconds        
       //Quit after a certain a0mount of time, music ends
        this.game.time.events.add(Phaser.Timer.SECOND*9000,this.quitGame,this);  
        this.game.time.events.repeat(Phaser.Timer.SECOND*5,18000,this.spawn,this);  
      
    },
    spawn : function(){
        this.game.time.events.repeat(Phaser.Timer.SECOND*spawnspeed,5*(Levelspawn/2),this.generateImage,this);
    },
    generateImage: function() {     //Spawn an object
        

        var rndnr = this.game.rnd.integerInRange(1, 2);

        //Random X-position for spwan
        var spwnrng = 0;
        spwnrng = spwnrng + this.game.rnd.integerInRange(-100, 100) + this.game.world.centerX;

        if (rndnr == 1){
            //Add a right arrow
            arrowRight = this.game.add.sprite(spwnrng,50,'XL_right_pil'); 
            arrowRight.anchor.set(0.5, 0.5);
            this.game.physics.enable( [ arrowRight ], Phaser.Physics.ARCADE);
            inputstuff(arrowRight);
            //signal för högerpil
            arrowRight.body.onWorldBounds = new Phaser.Signal();
            arrowRight.body.onWorldBounds.add(hitworldboundsright, this);

        }
        //If the random number is 2, then spawn a left arrow     
        if (rndnr==2){
            //Add a spacefighter, left arrow
            arrowLeft = this.game.add.sprite(spwnrng,50,'XL_left_pil');
            arrowLeft.anchor.set(0.5, 0.5);
            this.game.physics.enable( [ arrowLeft ], Phaser.Physics.ARCADE);
            inputstuff(arrowLeft);
            //signal för vänsterpil
            arrowLeft.body.onWorldBounds = new Phaser.Signal();
            arrowLeft.body.onWorldBounds.add(hitworldboundsleft, this);
     
        }

        function inputstuff(selected){

            //Set the velocity for the object
            selected.body.velocity.y = velocityStart + (Level) * 10;
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
        
        //hanterar vänsterpilar 
        function hitworldboundsleft (arrowLeft) {
            // testar ifall träffat rätt sida med marginal för pil
            if(arrowLeft.position.x< (arrowLeft.width/2)){
               this.increment(arrowLeft);

            }//testar ifall fel sida genom att kolla höjd med marginal för object 
            else if( arrowLeft.position.y<(game.height-arrowLeft.height))
            {
                this.decrement(arrowLeft);
            }
            else {//fallet när den träffar golvet
                this.floor(arrowLeft);
                
            }
        }
        function hitworldboundsright (arrowRight) {
            //testar ifall rätt sida med marginal för pil
            if(arrowRight.position.x >= (game.width-arrowRight.width/2))
            {                
                this.increment(arrowRight)
                //console.log(arrowRight.position);
            }// testar ifall fel sida genom att kolla höjd med marginal för object
            else if (arrowRight.position.y<(game.height-arrowRight.height))
            {     
               this.decrement(arrowRight);
            }
            else {//fallet när den träffar golvet
                
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
            selected.destroy();

            if(muteSoundbool == false)
            {
                //Declaring swipes
                var swipe1 = this.game.add.audio('swipe1');
                var swipe2 = this.game.add.audio('swipe2');
                var swipe3 = this.game.add.audio('swipe3');
                var swipe4 = this.game.add.audio('swipe4');
                var swipe5 = this.game.add.audio('swipe5');
                var swipe6 = this.game.add.audio('swipe6');
                var swipe7 = this.game.add.audio('swipe7');

                //generate random number
                var rndnr = this.game.rnd.integerInRange(1, 7);

                //Assigns swipes to random numbers
                if (rndnr == 1){swipe1.play();}
                if (rndnr == 2){swipe2.play();}
                if (rndnr == 3){swipe3.play();}
                if (rndnr == 4){swipe4.play();}
                if (rndnr == 5){swipe5.play();}
                if (rndnr == 6){swipe6.play();}
                if (rndnr == 7){swipe7.play();}
            }
            //Remove the object
            selected.destroy();

            //Update the score. 
            ++score;
            scoreText.setText( 'Score: '+score );

            if (score == 5)
            {
                this.memes(2);
            }
            if (score == 10)
            {
                this.memes(3);
            }
        },
                
        decrement: function(selected){
            //Remove the object
            selected.destroy();
            

            //Update the score.
            --score;
            scoreText.setText( 'Score: '+score );
        },

        floor: function(selected){
                
            //Decrement the number of lives
            --counterlives;
            
            //Update the number of lives 
            lifetext.setText('Lives : '+counterlives);

            //Play animation of exploion when an object collides with the world boundaries
            selected.play('explode', 12, true);     //Does not work! I think the object is deleted before the 
            //animation it played. Also think that the loading and adding of spritesheet is wrong. 
            //counterlives.text = 'lives: ' + counterlives;

            //Play a litle exlosion sound
            var sound = this.game.add.audio('explosion_audio');
            if(muteSoundbool == false)
            {
                sound.play();
            }
            
             //Remove the object
            selected.destroy(); 

             //Check if the player is out of lives
            if (counterlives === 0)
            {
                //Quit to start menu
                this.quitGame();


                if(score > localStorage.getItem("highscore"))
                {
                    localStorage.setItem("highscore5", localStorage.getItem("highscore4"));
                    localStorage.setItem("highscore4", localStorage.getItem("highscore3"));
                    localStorage.setItem("highscore3", localStorage.getItem("highscore2"));
                    localStorage.setItem("highscore2", localStorage.getItem("highscore"));
                    localStorage.setItem("highscore", score);
                }

                else if(score > localStorage.getItem("highscore2"))
                {
                    localStorage.setItem("highscore5", localStorage.getItem("highscore4"));
                    localStorage.setItem("highscore4", localStorage.getItem("highscore3"));
                    localStorage.setItem("highscore3", localStorage.getItem("highscore2"));
                    localStorage.setItem("highscore2", score);
                    
                }

                else if(score > localStorage.getItem("highscore3"))
                {
                    localStorage.setItem("highscore5", localStorage.getItem("highscore4"));
                    localStorage.setItem("highscore4", localStorage.getItem("highscore3"));
                    localStorage.setItem("highscore3", score);
                }

                else if(score > localStorage.getItem("highscore4"))
                {
                    localStorage.setItem("highscore5",localStorage.getItem("highscore4"));
                    localStorage.setItem("highscore4",score);
                }

                else if(score > localStorage.getItem("highscore5"))
                {
                    localStorage.setItem("highscore5", score);
                }
            }
            
        },

        
    memes: function(meme) {

        var meme_sound;

        // Feem!
        if (meme == 2)
        {
            text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Feeem');

            //  Center align
            text.anchor.set(0.5);
            text.align = 'center';

            //  Font style
            text.font = 'eightbitwonder';
            text.fontSize = 60;
            text.fontWeight = 'normal';

            //  Stroke color and thickness
            text.stroke = '#000000';
            text.strokeThickness = 6;
            text.fill = '#00ff00';

            text.alpha = 0;

            var tween = this.game.add.tween(text).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
            
            tween.repeat(0,0);

            if(muteSoundbool == false)
            {
                meme_sound = this.game.add.audio('fem');
                meme_sound.play();
            }
            
        }

        //Text i början av spelet.
        if (meme == 1)
        {
            text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Swipe!');

            //  Center align
            text.anchor.set(0.5);
            text.align = 'center';

            //  Font style
            text.font = 'eightbitwonder';
            text.fontSize = 100;
            text.fontWeight = 'bold';

            //  Stroke color and thickness
            text.stroke = '#000000';
            text.strokeThickness = 6;
            text.fill = '#ff00dd';

            text.alpha = 0;

            var tween = this.game.add.tween(text).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);
            tween.repeat(1,0);
        }

        if (meme == 3)
        {
            if(muteSoundbool == false)
            {
                meme_sound = this.game.add.audio('tia');
                meme_sound.play();
            }
            
        }

    },
    

   quitGame: function() {
        counterlives=5;
        Level=5;
        secondsElapsed=0;
        Levelspawn=0;

        music.pause();
        this.state.start('GameOver', true, false, score);
    },
    
    
    update: function() {
    }
    
    
};