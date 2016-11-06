var Boot = function(game){
	console.log("%cStarting my awesome game", "color:white; background:red");

};


Boot.prototype = {

	preload: function() {//kan vara värt a preloada samtliga block etc innan
		this.load.image('preloaderbar','assets/images/loader_bar.png');
		this.load.image('titleimage','assets/images/TitleImage.png');
	},
	
	create: function() { // game items och menu bakground
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_all;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#171642';

	this.state.start('Preloader');

	}
}