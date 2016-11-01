var StartMenu = function(game){
	/*this.startBG;
	this.startPromt;
	this.ding;*/
}

StartMenu.prototype = {
	create: function(){
		/*startBG = this.add.image(0,0,'titlescreen');
		startBG.inputEnable = true;
		startBG.events.onInputDown.addOnce(this.startGame,this);
*/
		/*startPromt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180,
			'eightbitwonder','Touch to start!',24);
	*/
	var StartMenu = this.game.add.image(0,0,'titlescreen');
	var playtext=this.game.add.button(this.world.centerX-155, this.world.centerY+180,
			'Touch to start',this.startGame,this);
		},
	startGame: function(pointer) {
		//this.ding.play();
		//console.log("%cStarting my awesome game", "color:white; background:red");
		this.game.state.start('Game');
	}
}; 
/*var StartMenu = function(game){}

StartMenu.prototype = {
  	create: function(){
		var gameTitle = this.game.add.image(0,0,"titlescreen");
		
		var playButton = this.game.add.button(this.world.centerX-155, this.world.centerY+180,"play",this.playTheGame,this);
		
	},
	playTheGame: function(){
		this.game.state.start("Game");
	}
}*/