var GameOver = function(game){
}

GameOver.prototype = {
	create: function(){
		//Add the game over image
		var GameOverMenu = this.game.add.image(0,0, 'gameoverMenu');

		//Add the buttons
		tryAgain = this.game.add.button(this.game.world.centerX - 140, 550, 'tryAgain', this.tryAgain, this, 2, 1, 0);
		backMenu = this.game.add.button(this.game.world.centerX - 160, 700, 'backToMenu', this.startMenu, this, 2, 1, 0);
		Q_button = this.game.add.button(this.game.world.centerX - 105 , 850, 'quit', this.Quit, this, 2, 1, 0);
	},

	//If button "Try Again" is pressed this function will be executed
	tryAgain: function() {
		//Go to game state
		this.game.state.start('Game');
	},

	//If button "Back to Menu" is pressed this function will be executed
	startMenu: function() {
		//Go to game state
		this.game.state.start('StartMenu');
	},

	/*Quit: function() {
		navigator.this.game.exitApp();
		console.log("Quitting swiper");
	}*/
}