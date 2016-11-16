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
		var GameOverMenu = this.game.add.image(game.world.centerX,game.world.centerY, 'gameoverMenu');
		GameOverMenu.anchor.set(0.5, 0.5);
		GameOverMenu.width=game.width;
		GameOverMenu.height=game.height;
		// Game over music
		if(muteMusicbool == false)
		{
			var gameoverjerry = this.game.add.audio('gameoverjerry');
			gameoverjerry.play();
		}
		

		//Add the score
		scoreText = this.game.add.text(this.game.world.centerX, game.world.centerY, 'Your score: '+score , { font: '60px Arial', fill: '#fff' });
		scoreText.anchor.set(0.5);

		startMusic = true;

		//Add the buttons
		tryAgainB = this.game.add.button(this.game.world.centerX, game.height*(6/10), 'tryAgain', this.tryAgain, this, 2, 1, 0);
		menuB = this.game.add.button(this.game.world.centerX, game.height*(8/10), 'backToMenu', this.startMenu, this, 2, 1, 0);
		
		//Add the anchorpoints
		tryAgainB.anchor.set(0.5, 0.5);
		menuB.anchor.set(0.5, 0.5);
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
		musicStart.mute = false;
	},

}