var StartMenu = function(game){
}

StartMenu.prototype = {
	create: function(){
<<<<<<< HEAD
		/*startBG = this.add.image(0,0,'titlescreen');
		startBG.inputEnable = true;
		startBG.events.onInputDown.addOnce(this.startGame,this);
*/
		/*startPromt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180,
			'eightbitwonder','Touch to start!',24);
	*/
	var StartMenu = this.game.add.image(0,0,'titlescreen');
	/*var playtext=this.game.add.button(this.world.centerX-155, this.world.centerY+180,
			'Touch to start',this.startGame,this);
		*/
		var bitmapplay = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, this.startGame,
			'eightbitwonder','Touch to start!',24);
=======
		//Add the start menu image
		var StartMenu = this.game.add.image(0,0,'titlescreen');

		//Add the buttons
		button = this.game.add.button(this.game.world.centerX - 150, 430, 'button', this.startGame, this, 2, 1, 0);
		HS_button = this.game.add.button(this.game.world.centerX - 125, 570, 'HS_button', this.startHighscoreMenu, this, 2, 1, 0);
		S_button = this.game.add.button(this.game.world.centerX - 125, 680, 'S_button', this.startSettings, this, 2, 1, 0);
		Q_button = this.game.add.button(this.game.world.centerX - 105, 790, 'quit', this.Quit, this, 2, 1, 0);
>>>>>>> fb6b4071e21fd5e829b78e72298b465ee28fb8cd
	},

	//If button "Start" is pressed this function will be executed
	startGame: function() {
		//Go to game state
		this.game.state.start('Game');
	},

	//If button "Highscore" is pressed
	startHighscoreMenu: function() {
		//Go to highscore menu state
		this.game.state.start('HighscoreMenu');
	},

	//If button "Settings"
	startSettings: function() {
		//Go to settings state
		this.game.state.start('Settings');
	},

	/*Quit: function() {
		navigator.this.game.exitApp();
		console.log("Quitting swiper");
	}*/
	
	
}; 
