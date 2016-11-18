var Credits = function(game){
}

Credits.prototype = {
	create: function(){

        var Settings = this.game.add.image(game.world.centerX,game.world.centerY,'blank_canvas');
        Settings.anchor.set(0.5, 0.5);
        Settings.width=game.width;
        Settings.height=game.height;
        
        back = this.game.add.button(this.game.world.centerX, 800, 'back', this.backMenu, this, 2, 1, 0);
        back.anchor.set(0.5, 0.5);
	}
}