var Game = function(game) {
    //Declare some variables 
    this.gameover;
    this.countdown;
    this.timer;
    this.generateImage;
};

var pause_menu;
var resume_knapp;
var w = 800, h = 600;

Game.prototype = {
    create: function() {   
        score = 0;
        counterlives = 5;
        spawnspeed=1;
        Level=1;
        Levelspawn=1;
        numSecPerLev= 5;
        secondsElapsed = 0;

        var countertext;
        var scoreText;
        //feedback
        var text;
        var meme;
        
  
        //Initialize some settings and "meta data"
        gameover = false;                        
        var timer = this.time.create(false);          
        timer.loop(1000, this.updateSeconds, this);
        timer.start();

        //Start the physics of the game, gravity
        game.physics.startSystem(Phaser.Physics.ARCADE);

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

        //Add backgrounds
        var background = game.add.image(game.world.centerX, game.world.centerY, 'sky');
        background.anchor.set(0.5, 0.5);
        background.width = game.width;
        background.height = game.height;

        //Add information about the score and the number of lives left 
        scoreText = game.add.bitmapText(game.world.centerX, game.height * (1/20), 'anuswiper_font','Score: '+score );
        scoreText.anchor.set(0.5, 0.5);
        lifetext = game.add.bitmapText(game.world.centerX, game.height * (1/10), 'anuswiper_font','Lives : '+counterlives);
        lifetext.anchor.set(0.5, 0.5);
        scoreText.fontSize = game.height * (1/20);
        lifetext.fontSize = game.height * (1/20);

        // Create a label to use as a button
        pause_label = game.add.bitmapText(game.width * (94/100), 0,'anuswiper_font', 'Pause');
        pause_label.inputEnabled = true;
        pause_label.anchor.set(1, 0);
        pause_label.fontSize = game.height * (1/20);
        pause_label.events.onInputUp.add(function () {

        // When the pause button is pressed, we pause the game
        this.game.paused = true;
        
        // this.game.body.velocity.y = 0;
        // Then add the menu
        pause_menu = game.add.image(game.world.centerX, game.world.centerY, 'transpause_bild');
        pause_menu.anchor.set(0.5, 0.5);
        pause_menu.width = game.width;
        pause_menu.height = game.height;

        resume_knapp = this.game.add.image(this.game.world.centerX, game.height*(11/20), 'resume');
        resume_knapp.anchor.set(0.5, 0.5);
        resume_knapp.height=game.height*(1/10);
        resume_knapp.width=game.width*(1/3);

        back_to_knapp = this.game.add.image(this.game.world.centerX, game.height*(18/20), 'backToMenu');
        back_to_knapp.anchor.set(0.5, 0.5);
        back_to_knapp.height = game.height*(1/12);
        back_to_knapp.width = game.width*(1/3.5);

        if(muteMusicbool){
            unMuteMusic = this.game.add.image(this.game.world.centerX, game.height*(8/10), 'unMuteMusic');
            unMuteMusic.anchor.set(0.5, 0.5);
            unMuteMusic.height = game.height*(1/10);
            unMuteMusic.width = game.width*(1/3.5);
        }
        else{
            muteMusic = this.game.add.image(this.game.world.centerX, game.height*(8/10), 'muteMusic');
            muteMusic.anchor.set(0.5, 0.5);
            muteMusic.height = game.height*(1/10);
            muteMusic.width = game.width*(1/3.5);
        }
        
        if(muteSoundbool){
            unMuteSound = this.game.add.image(this.game.world.centerX, game.height*(7/10), 'unMuteSound');
            unMuteSound.anchor.set(0.5, 0.5);
            unMuteSound.height = game.height*(1/10);
            unMuteSound.width = game.width*(1/3.5);
        }
        else{
            muteSound = this.game.add.image(this.game.world.centerX, game.height*(7/10), 'muteSound');
            muteSound.anchor.set(0.5, 0.5);
            muteSound.height = game.height*(1/10);
            muteSound.width = game.width*(1/3.5);
        }

        

        });
        game.input.onDown.add(this.unpause, self);

        //Add the music and play it  
        music = this.game.add.audio('jerry5min');
        if(muteMusicbool == false)
        {
            music.play();
        }

        //Add objects in loop depending on time
        //Spawn an object every 2 seconds        

        //Quit after a certain amount of time, music ends
        this.game.time.events.add(Phaser.Timer.SECOND*1000,this.quitGame,this);  
        this.game.time.events.repeat(Phaser.Timer.SECOND*5,2000,this.spawn,this);  
      
    },
    spawn : function(){
        this.game.time.events.repeat(Phaser.Timer.SECOND*spawnspeed,5*(Levelspawn/2),this.generateImage,this);
    },
    generateImage: function() {     //Spawn an object
        
        var rndnr = this.game.rnd.integerInRange(1, 2);

        //Random X-position for spwan
    
        spwnrng = game.rnd.integerInRange(-game.width*(1/3), game.width*(1/3)) + this.game.world.centerX;

        if (rndnr == 1){
            //Add a right arrow
            arrowRight = this.game.add.sprite(spwnrng,game.height * (1/9),'right_pil'); 
            inputstuff(arrowRight);
            //signal för högerpil
            arrowRight.body.onWorldBounds = new Phaser.Signal();
            arrowRight.body.onWorldBounds.add(hitworldboundsright, this);
        }
        //If the random number is 2, then spawn a left arrow     
        if (rndnr==2){
            //Add a spacefighter, left arrow
            arrowLeft = this.game.add.sprite(spwnrng,game.height * (1/9),'left_pil');
            inputstuff(arrowLeft);
            //signal för vänsterpil
            arrowLeft.body.onWorldBounds = new Phaser.Signal();
            arrowLeft.body.onWorldBounds.add(hitworldboundsleft, this);
        }

        function inputstuff(selected){

            selected.anchor.set(0.5, 0.5);
            selected.width = game.width * (1/3);
            selected.height = game.height * (1/9);
            this.game.physics.enable( [ selected ], Phaser.Physics.ARCADE);
            //Set the velocity for the object
            selected.body.velocity.y = game.height*(0.1) + (Level) * 10;
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
            //Remove the object
            selected.destroy();

            //Update the score. 
            ++score;
            scoreText.setText( 'Score: '+score );

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
    
            if (score == 5)
            {
                this.memes(2);
            }
            if (score == 30)
            {
                this.memes(3);
            }
        },
                
        decrement: function(selected){

            if (muteSoundbool == false)
            {
                //fail sound (Oh man)
                var ohman = this.game.add.audio('ohman');
                ohman.play()
            }
            

            //Remove the object
            selected.destroy();
            //Update the score.
            --score;
            scoreText.setText( 'Score: '+score );
        },

        floor: function(selected){
                
            //Remove the object
            selected.destroy(); 
   
            //Decrement the number of lives
            --counterlives;
            
            //Update the number of lives 
            lifetext.setText('Lives : '+counterlives);

            //Play animation of exploion when an object collides with the world boundaries
            selected.play('explode', 12, true);    

            //Play a litle exlosion sound
            if(muteSoundbool == false)
            {
                var sound = this.game.add.audio('explosion_audio');
                sound.play();
            }
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
            text.font = 'anuswiper_font';
            text.fontSize = game.height * (1/10);
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
            text.font = 'anuswiper_font';
            text.fontSize = game.height * (1/8);
            text.fontWeight = 'bold';

            //  Stroke color and thickness
            text.stroke = '#000000';
            text.strokeThickness = 6;
            text.fill = '#ff00dd';

            text.alpha = 0;

            var tween = this.game.add.tween(text).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);
            tween.repeat(1,0);
        }

        //tia och en tjuga
        if (meme == 3)
        {
            if(muteSoundbool == false)
            {
                meme_sound = this.game.add.audio('tia');
                meme_sound.play();
            }

        }

    },
        unpause: function(event){
        // Only act if paused
        if(game.paused){

            if(event.x > game.width*(2/6) && event.x < game.width*(4/6) && event.y > game.height*(11/20)-game.height/20 && event.y < game.height*(11/20)+game.height/20 ){
            // Calculate the corners of the menu            
                // Remove the menu and the buttons
                pause_menu.destroy();
                resume_knapp.destroy();
                if(muteMusicbool)
                    unMuteMusic.destroy();
                else
                    muteMusic.destroy();
                
                if(muteSoundbool)
                    unMuteSound.destroy();
                else
                    muteSound.destroy();
                
                back_to_knapp.destroy();

                // Unpause the game
                game.paused = false;
            }

            else if(event.x > game.width*(5/14) && event.x < game.width*(9/14) && event.y > game.height*(18/20)-game.height/24 && event.y < game.height*(18/20)+game.height/24){
                counterlives=5;
                Level=1;
                secondsElapsed=0;
                Levelspawn=1;
                spawnspeed=1;

                if (muteMusicbool == false)
                {
                    music.pause();
                }

                game.paused = false;
                this.game.state.start('StartMenu');
            }

            else if(event.x > game.width*(5/14) && event.x < game.width*(9/14) && event.y > game.height*(15/20) && event.y < game.height*(17/20)){
                game.paused = false;
                if(muteMusicbool)
                {
                    unMuteMusic.destroy();
                    muteMusicbool = false;
                    music.play();

                    muteMusic = this.game.add.image(this.game.world.centerX, game.height*(8/10), 'muteMusic');
                    muteMusic.anchor.set(0.5, 0.5);
                    muteMusic.height = game.height*(1/10);
                    muteMusic.width = game.width*(1/3.5);
                }
                else{
                    muteMusic.destroy();
                    muteMusicbool = true;
                    music.pause();

                    unMuteMusic = this.game.add.image(this.game.world.centerX, game.height*(8/10), 'unMuteMusic');
                    unMuteMusic.anchor.set(0.5, 0.5);
                    unMuteMusic.height = game.height*(1/10);
                    unMuteMusic.width = game.width*(1/3.5);
                }
                game.paused = true;
            }

            else if(event.x > game.width*(5/14) && event.x < game.width*(9/14) && event.y > game.height*(13/20) && event.y < game.height*(15/20)){
                game.paused = false;
                if(muteSoundbool)
                {
                    unMuteSound.destroy();
                    muteSoundbool = false;

                    muteSound = this.game.add.image(this.game.world.centerX, game.height*(7/10), 'muteSound');
                    muteSound.anchor.set(0.5, 0.5);
                    muteSound.height = game.height*(1/10);
                    muteSound.width = game.width*(1/3.5);
                }
                else{
                    muteSound.destroy();
                    muteSoundbool = true;

                    unMuteSound = this.game.add.image(this.game.world.centerX, game.height*(7/10), 'unMuteSound');
                    unMuteSound.anchor.set(0.5, 0.5);
                    unMuteSound.height = game.height*(1/10);
                    unMuteSound.width = game.width*(1/3.5);
                }
                game.paused = true;
            }

            
        }
    },
    
   quitGame: function() {
        //Reset
        counterlives=5;
        Level=1;
        secondsElapsed=0;
        Levelspawn=1;
        spawnspeed=1;

        if (muteMusicbool == false)
        {
            music.pause();
        }
        
        //Send the score to the next state    
        this.state.start('GameOver', true, false, score);
    }        
    
};