var Preloader = function(game){
	this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

Preloader.prototype = {
	  preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);
        this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
        this.titleText.anchor.setTo(0.5, 0.5);
        this.load.image('titlescreen', 'assets/images/TitleBG.png');
        this.load.bitmapFont('eightbitwonder', 'assets/fonts/eightbitwonder.png', 'assets/fonts/eightbitwonder.fnt');
        this.load.image('hill', 'assets/images/hill.png');
        this.load.image('sky', 'assets/images/sky.png');
        this.load.atlasXML('bunny', 'assets/images/spritesheets/bunny.png', 'assets/images/spritesheets/bunny.xml');
        this.load.atlasXML('spacerock', 'assets/images/spritesheets/SpaceRock.png', 'assets/images/spritesheets/SpaceRock.xml');
        this.load.image('explosion', 'assets/images/explosion.png');
        this.load.image('ghost', 'assets/images/ghost.png');
        this.load.audio('explosion_audio', 'assets/audio/explosion.mp3');
        this.load.audio('hurt_audio', 'assets/audio/hurt.mp3');
        this.load.audio('select_audio', 'assets/audio/select.mp3');
        this.load.audio('game_audio', 'assets/audio/bgm.mp3');
    
},
	create: function () {
       this.game.state.start('StartMenu');
        //this.preloadBar.cropEnabled = false;
    },
 
    
    
};