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
        this.load.image('highscore_bild', 'assets/images/HighscoreMenu1.png');
        this.load.image('gameoverMenu', 'assets/images/GAMEOVER.png');
        
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
        //this.load.atlasXML('bunny', 'assets/images/spritesheets/bunny.png', 'assets/images/spritesheets/bunny.xml');
        this.load.atlasXML('spacerock', 'assets/images/spritesheets/SpaceRock.png', 'assets/images/spritesheets/SpaceRock.xml');
        //this.load.image('explosion', 'assets/images/explosion.png');
        //this.load.image('ghost', 'assets/images/ghost.png');
        //this.load.image('spacefighter', 'assets/images/player_blue.png');
        this.load.image('explode', 'assets/images/explode.png');        //New and possibly wrong
        this.load.image('proto_right_pil', 'assets/images/proto_right_pil.png');
        this.load.image('proto_left_pil', 'assets/images/proto_left_pil.png');

        //Music and sounds
        this.load.audio('seal', 'assets/audio/seal.mp4.mp3');
        this.load.audio('jerry', 'assets/audio/jerry.mp3');
        this.load.audio('explosion_audio', 'assets/audio/explosion.mp3');
        this.load.audio('hurt_audio', 'assets/audio/hurt.mp3');
        this.load.audio('select_audio', 'assets/audio/select.mp3');
        this.load.audio('game_audio', 'assets/audio/bgm.mp3');
        this.load.audio('fem', 'assets/audio/FEM.mp3');
        this.load.audio('tia', 'assets/audio/10och20.mp3');
        this.load.audio('swipe1', 'assets/audio/swipe1.mp3');
        this.load.audio('swipe2', 'assets/audio/swipe2.mp3');
        this.load.audio('swipe3', 'assets/audio/swipe3.mp3');
        this.load.audio('swipe4', 'assets/audio/swipe4.mp3');
        this.load.audio('swipe5', 'assets/audio/swipe5.mp3');
        this.load.audio('swipe6', 'assets/audio/swipe6.mp3');
        this.load.audio('swipe7', 'assets/audio/swipe7.mp3');
        this.load.audio('gameoverjerry', 'assets/audio/gameoverjerry.mp3');    
        
        //Animations and spritirsheets
        this.load.spritesheet('button', 'assets/images/spritesheets/Start_knapp.png');
        this.load.spritesheet('HS_button', 'assets/images/spritesheets/highscore_knapp.png');
        this.load.spritesheet('back', 'assets/images/spritesheets/Back_knapp.png');
        this.load.spritesheet('S_button', 'assets/images/spritesheets/settings_knapp.png');
        this.load.spritesheet('mute', 'assets/images/spritesheets/MUTE_knapp.png');
        
        this.load.spritesheet('unMute', 'assets/images/spritesheets/UNMUTE_knapp.png');
        this.load.spritesheet('muteMusic', 'assets/images/spritesheets/MUTE_music_knapp.png');
        this.load.spritesheet('unMuteMusic', 'assets/images/spritesheets/UNMUTE_music_knapp.png');
        this.load.spritesheet('muteSound', 'assets/images/spritesheets/MUTE_sound_knapp.png');
        this.load.spritesheet('unMuteSound', 'assets/images/spritesheets/UNMUTE_sound_knapp.png');

        this.load.spritesheet('tryAgain', 'assets/images/spritesheets/try_again_knapp.png');
        this.load.spritesheet('backToMenu', 'assets/images/spritesheets/back_to_menu_knapp.png');
        this.load.spritesheet('quit', 'assets/images/spritesheets/Quit_knapp.png');

        
        
},

	create: function () {
        //Go to the start menu state
        this.game.state.start('StartMenu');
    },

};