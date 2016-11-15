var GameOver = function(game){
}

var scoreText;
var score = 0;

GameOver.prototype = {
	
	init: function(scoreIn) {
		score = scoreIn;
	},

	create: function(){
		//Add the game over image
		var GameOverMenu = this.game.add.image(0,0, 'gameoverMenu');

		//Add the score
		scoreText = this.game.add.text(this.game.world.centerX, 420, 'Your score: '+score , { font: '60px Arial', fill: '#fff' });
		scoreText.anchor.set(0.5);

		//Add the buttons
		tryAgainB = this.game.add.button(this.game.world.centerX, 550, 'tryAgain', this.tryAgain, this, 2, 1, 0);
		menuB = this.game.add.button(this.game.world.centerX, 700, 'backToMenu', this.startMenu, this, 2, 1, 0);
		quitB = this.game.add.button(this.game.world.centerX, 850, 'quit', this.Quit, this, 2, 1, 0);

		//Add the anchorpoints
		tryAgainB.anchor.set(0.5, 0.5);
		menuB.anchor.set(0.5, 0.5);
		quitB.anchor.set(0.5, 0.5);
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