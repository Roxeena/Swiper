var StartMenu = function(game){
}

StartMenu.prototype = {
	create: function(){
		//Add the start menu image
		var StartMenu = this.game.add.image(0,0,'titlescreen');

	var StartMenu = this.game.add.image(0,0,'titlescreen');

	//Add the buttons
	button = this.game.add.button(this.game.world.centerX - 155, 430, 'button', this.startGame, this, 2, 1, 0);
	HS_button = this.game.add.button(this.game.world.centerX - 130, 570, 'HS_button', this.startHighscoreMenu, this, 2, 1, 0);
	S_button = this.game.add.button(this.game.world.centerX - 130, 680, 'S_button', this.startSettings, this, 2, 1, 0);
	//Q_button = this.game.add.button(this.game.world.centerX = 130, 790, 'Q_button', this.Quit, this, 2, 1, 0);
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
		this.navigator.game.exitApp();
		consol.log("quitting swiper");
	}*/
	
	
}; 
