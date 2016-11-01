var Boot = function(game){


};
//Swiper.Boot = function(game) {};

Boot.prototype = {

	preload: function() {//kan vara värt a preloada samtliga block etc innan
		this.load.image('preloaderbar','assets/images/loader_bar.png');
		this.load.image('titleimage','assets/images/TitleImage.png')
	},
	
	create: function() { // game items och menu bakground
	
	//this.input.maxPointers=1;
	//this.stage.disableVisabilityChange = false;
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_all;
	//this.scale.miniWidth = 270;
	//this.scale.miniHeight = 480;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	//this.stage.forcePortrait = true;
	//this.game.scale.setScreenSize();

	this.input.addPointer();
	this.stage.backgroundColor = '#171642';

	this.state.start('Preloader');

	}
}