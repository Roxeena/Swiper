var StartMenu = function(game){
	this.startBG;
	this.startPromt;
	this.ding;
}

StartMenu.prototype = {
	create: function(){
		startBG = this.add.image(0,0,'titlescreen');
		startBG.inputEnable = true;
		startBG.events.onInputDown.addOnce(this.startGame,this);

		startPromt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180,
			'eightbitwonder','Touch to start!',24);
	},
	startGame: function(pointer) {
		this.ding.play();
		this.state.start('Game');
	}
};