var Credits = function(game){
}

Credits.prototype = {
	create: function(){
        back = this.game.add.button(this.game.world.centerX, 800, 'back', this.backMenu, this, 2, 1, 0);
        back.anchor.set(0.5, 0.5);
	}
}