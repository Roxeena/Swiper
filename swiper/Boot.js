var Boot = function(game){
	//Write on console that the grame is starting
	console.log("Starting Swiper");
};

Boot.prototype = {
	preload: function() {
		//Preload the images for the loading screen
		this.game.load.spritesheet('preloaderbar', 'assets/images/Foocy_129_273_16.png', 129, 273, 16);
		this.game.load.image('titleimage', 'assets/images/BLANK_CANVAS.png');		//Need to be changed to swiper theme
	},
	
	create: function() { 
	//Game settings and loading screen background
	
	//Inactive settings
	//this.input.maxPointers = 1;	//Can only hold one object at a time, default 2.
	


	//Active settings
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_all;		
	this.scale.pageAlignHorizontally = true;					//Set in the middle of the screen, x
	this.scale.pageAlignVertically = true;						//Set in the middle of the screen, y

	//Set background to some color
	this.stage.backgroundColor = '#171642';		//Should we have a loading screen of our own?

	//Go to Preloader state
	this.state.start('Preloader');
	},
	
};