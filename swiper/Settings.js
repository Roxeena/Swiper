var Settings = function(game){
}

Settings.prototype = {
    create: function(){

    	//Are there no image?
    	//Add the "Back" button
        back = this.game.add.button(this.game.world.centerX - 130, 800, 'back', this.backMenu, this, 2, 1, 0);
        if(this.game.sound.mute == false)
        {
        	mute = this.game.add.button(this.game.world.centerX - 130, 400, 'mute', this.Mute, this, 2, 1, 0);
        }

        else if (this.sound.mute)
        {
        	unMute = this.game.add.button(this.game.world.centerX - 130, 400, 'unMute', this.unMute, this, 2, 1, 0);
        }
        

    },
    //If "Back" button is pressed
    backMenu: function(){
        //Go to start menu state
        this.game.state.start('StartMenu');
    },

    Mute: function(){
    	this.game.sound.mute = true;
    	mute.pendingDestroy = true;
    	unMute = this.game.add.button(this.game.world.centerX - 130, 400, 'unMute', this.unMute, this, 2, 1, 0);
    },

    unMute: function(){
    	this.game.sound.mute = false;
    	mute = this.game.add.button(this.game.world.centerX - 130, 400, 'mute', this.Mute, this, 2, 1, 0);
    	unMute.pendingDestroy = true;
    }
};