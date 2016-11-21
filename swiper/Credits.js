var Credits = function(game){
}

Credits.prototype = {
	create: function(){
		Credits.width=game.width;
        Credits.height=game.height;

        back = this.game.add.button(this.game.world.centerX, game.height*(8/10), 'back', this.backSettings, this, 2, 1, 0);
        back.anchor.set(0.5, 0.5);

        
	},

	backSettings: function() {
		//Go to settings state
		this.game.state.start('Settings');
	}	


}