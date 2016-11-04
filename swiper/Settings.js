var Settings = function(game){
}

Settings.prototype = {
    create: function(){

    	//Are there no image?
    	//Add the "Back" button
        back = this.game.add.button(this.game.world.centerX - 130, 800, 'back', this.backMenu, this, 2, 1, 0);

    },
    //If "Back" button is pressed
    backMenu: function(){
        //Go to start menu state
        this.game.state.start('StartMenu');
    }
};