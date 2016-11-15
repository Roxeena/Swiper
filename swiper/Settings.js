var Settings = function(game){
}

Settings.prototype = {
    create: function(){

    	//Are there no image?
    	//Add the "Back" button
        back = this.game.add.button(this.game.world.centerX, 800, 'back', this.backMenu, this, 2, 1, 0);
        back.anchor.set(0.5, 0.5);
        /*if(this.game.sound.mute == false)
        {
        	mute = this.game.add.button(this.game.world.centerX - 130, 300, 'mute', this.Mute, this, 2, 1, 0);
        }

        else if (this.sound.mute)
        {
        	unMute = this.game.add.button(this.game.world.centerX - 200, 300, 'unMute', this.unMute, this, 2, 1, 0);
        }*/
        
        if(muteMusicbool == false)
        {
        	muteMusic = this.game.add.button(this.game.world.centerX, 440, 'muteMusic', this.muteMusic, this, 2, 1, 0);
            muteMusic.anchor.set(0.5, 0.5);
        }

        else if(muteMusicbool)
        {
        	unMuteMusic = this.game.add.button(this.game.world.centerX, 440, 'unMuteMusic', this.unMuteMusic, this, 2, 1, 0);
            unMuteMusic.anchor.set(0.5, 0.5);
        }

        if(muteSoundbool == false)
        {
        	muteSound = this.game.add.button(this.game.world.centerX, 580, 'muteSound', this.muteSound, this, 2, 1, 0);
            muteSound.anchor.set(0.5, 0.5);
        }

        else if(muteSoundbool)
        {
			unMuteSound = this.game.add.button(this.game.world.centerX, 580, 'unMuteSound', this.unMuteSound, this, 2, 1, 0);
            unMuteSound.anchor.set(0.5, 0.5);
		}
        
       
    },
    //If "Back" button is pressed
    backMenu: function(){
        //Go to start menu state
        this.game.state.start('StartMenu');
    },

    /*Mute: function(){
    	this.game.sound.mute = true;
    	music.mute = true;
    	mute.pendingDestroy = true;
    	muteMusic.pendingDestroy = true;
    	muteSound.pendingDestroy = true;
    	unMute = this.game.add.button(this.game.world.centerX - 150, 300, 'unMute', this.unMute, this, 2, 1, 0);
    	unMuteMusic = this.game.add.button(this.game.world.centerX - 130, 440, 'unMuteMusic', this.unMuteMusic, this, 2, 1, 0);
    	unMuteSound = this.game.add.button(this.game.world.centerX - 130, 580, 'unMuteSound', this.unMuteSound, this, 2, 1, 0);
    },

    unMute: function(){
    	this.game.sound.mute = false;
    	music.mute = false;
    	mute = this.game.add.button(this.game.world.centerX - 130, 300, 'mute', this.Mute, this, 2, 1, 0);
    	unMute.pendingDestroy = true;
    	muteMusic = this.game.add.button(this.game.world.centerX - 130, 440, 'muteMusic', this.muteMusic, this, 2, 1, 0);
    	muteSound = this.game.add.button(this.game.world.centerX - 130, 580, 'muteSound', this.muteSound, this, 2, 1, 0);
    },*/

    muteMusic: function(){
    	music.mute = true;
    	muteMusic.pendingDestroy = true;
    	unMuteMusic = this.game.add.button(this.game.world.centerX - 130, 440, 'unMuteMusic', this.unMuteMusic, this, 2, 1, 0);
    	muteMusicbool = true;
    },

    unMuteMusic: function(){
    	music.mute = false;
    	muteMusic = this.game.add.button(this.game.world.centerX - 130, 440, 'muteMusic', this.muteMusic, this, 2, 1, 0);
    	unMuteMusic.pendingDestroy = true;
    	muteMusicbool = false;
    	//unMute.pendingDestroy = true;
    	//mute = this.game.add.button(this.game.world.centerX - 130, 300, 'mute', this.Mute, this, 2, 1, 0);
    },

    muteSound: function(){
    	muteSoundbool = true;
    	muteSound.pendingDestroy = true;
    	unMuteSound = this.game.add.button(this.game.world.centerX - 130, 580, 'unMuteSound', this.unMuteSound, this, 2, 1, 0);
    },

    unMuteSound: function(){
    	muteSoundbool = false;
    	unMuteSound.pendingDestroy = true;
    	muteSound = this.game.add.button(this.game.world.centerX - 130, 580, 'muteSound', this.muteSound, this, 2, 1, 0);
    	//unMute.pendingDestroy = true;
    	//mute = this.game.add.button(this.game.world.centerX - 130, 300, 'mute', this.Mute, this, 2, 1, 0);
    }
};