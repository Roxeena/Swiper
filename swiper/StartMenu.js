var StartMenu = function(game){
}

StartMenu.prototype = {
	create: function(){

	var StartMenu = this.game.add.image(0,0,'titlescreen');


	button = this.game.add.button(this.game.world.centerX - 155, 430, 'button', this.startGame, this, 2, 1, 0);
	HS_button = this.game.add.button(this.game.world.centerX - 130, 570, 'HS_button', this.startHighscoreMenu, this, 2, 1, 0);
	S_button = this.game.add.button(this.game.world.centerX - 130, 680, 'S_button', this.startSettings, this, 2, 1, 0);

	},
	startGame: function() {
		this.game.state.start('Game');
	},

	startHighscoreMenu: function() {
		this.game.state.start('HighscoreMenu');
	},

	startSettings: function() {
		this.game.state.start('Settings');
	}
}; 
