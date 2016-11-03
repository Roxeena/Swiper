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

<<<<<<< HEAD
	button = this.game.add.button(this.game.world.centerX - 155, 430, 'button', this.startGame, this, 2, 1, 0);	
		/*var bitmapplay = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180,
			'eightbitwonder','Touch to start!',24,this.startGame,this);*/

		//g.hitArea = new PIXI.Circle(0, 0, diameter);

=======
	var playtext=this.game.add.button(this.world.centerX-155, this.world.centerY+180,
			'Touch to start',this.startGame,this);
		
	/*	var bitmapplay = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180,
			'eightbitwonder','Touch to start!',24);
*/
>>>>>>> origin/master
	},
	startGame: function() {
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