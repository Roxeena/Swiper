var Preloader = function(game){     
	//Initialize some variables
    this.preloadBar = null;
    this.titleText = null;
};

Preloader.prototype = {
	  preload: function () {   //Preload all the images and data that are going to be used in the game
        //This is the loading screen 
        //Add the images
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderbar');
        this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
        //Set them in the middle of the screeen
        this.titleText.anchor.setTo(0.5, 0.5);
        this.preloadBar.anchor.setTo(0.5, 0.5);
        //This is what makes the loading bar animation
        this.load.setPreloadSprite(this.preloadBar); 

        //Preload thing in the game
        //Menu images
        this.load.image('titlescreen', 'assets/images/ässomebgb2.png');
        this.load.image('highscore_bild', 'assets/images/HighscoreMenu1.png')
        
        //Fonts
        this.load.bitmapFont('eightbitwonder', 'assets/fonts/eightbitwonder.png', 'assets/fonts/eightbitwonder.fnt');
        
        //Backgrounds in game
        this.load.image('hill', 'assets/images/hill.png');
        this.load.image('sky', 'assets/images/sky.png');
        this.load.image('highscore_bild', 'assets/images/HighscoreMenu1.png');
        
        this.load.atlasXML('bunny', 'assets/images/spritesheets/bunny.png', 'assets/images/spritesheets/bunny.xml');
        this.load.atlasXML('spacerock', 'assets/images/spritesheets/SpaceRock.png', 'assets/images/spritesheets/SpaceRock.xml');

        this.load.image('spacefighter', 'assets/images/player_blue.png');


        //Objects in game
        this.load.atlasXML('bunny', 'assets/images/spritesheets/bunny.png', 'assets/images/spritesheets/bunny.xml');
        this.load.atlasXML('spacerock', 'assets/images/spritesheets/SpaceRock.png', 'assets/images/spritesheets/SpaceRock.xml');
        this.load.image('explosion', 'assets/images/explosion.png');
        this.load.image('ghost', 'assets/images/ghost.png');
        this.load.image('spacefighter', 'assets/images/player_blue.png');
        this.load.image('explode', 'assets/images/explode.png');        //New and possibly wrong
        
        //Music and sounds
        this.load.audio('jerry', 'assets/audio/jerry.mp3');
        this.load.audio('explosion_audio', 'assets/audio/explosion.mp3');
        this.load.audio('hurt_audio', 'assets/audio/hurt.mp3');
        this.load.audio('select_audio', 'assets/audio/select.mp3');
        this.load.audio('game_audio', 'assets/audio/bgm.mp3');
        
        //Animations and spritirsheets
        this.load.spritesheet('button', 'assets/images/spritesheets/Start_knapp.png');
        this.load.spritesheet('HS_button', 'assets/images/spritesheets/highscore_knapp.png');
        this.load.spritesheet('back', 'assets/images/spritesheets/Back_knapp.png');
        this.load.spritesheet('S_button', 'assets/images/spritesheets/settings_knapp.png');
        this.load.spritesheet('mute', 'assets/images/spritesheets/MUTE_knapp.png');
        
},

	create: function () {
        //Go to the start menu state
        this.game.state.start('StartMenu');
    },

};