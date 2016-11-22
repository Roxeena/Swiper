var Settings = function(game){
}

var musicStart;

Settings.prototype = {
    create: function(){


        var Settings = this.game.add.image(game.world.centerX,game.world.centerY,'settings_bild');
        Settings.anchor.set(0.5, 0.5);
        Settings.width=game.width;
        Settings.height=game.height;
    	//Are there no image?
    	//Add the "Back" button
        back = this.game.add.button(this.game.world.centerX, 8*game.height/10, 'back', this.backMenu, this, 2, 1, 0);
        back.anchor.set(0.5, 0.5);
        back.height=game.height*(1/10);
        back.width=game.width*(1/3);

        credits = this.game.add.button(this.game.world.centerX, 3.5*game.height/10, 'credits', this.startCredits, this, 2, 1, 0);
        credits.anchor.set(0.5, 0.5);
        credits.height=game.height*(1/10);
        credits.width=game.width*(1/2.5);

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
        	muteMusic = this.game.add.button(this.game.world.centerX, game.world.centerY, 'muteMusic', this.muteMusic, this, 2, 1, 0);
            muteMusic.anchor.set(0.5, 0.5);
            muteMusic.height=game.height*(1/10);
            muteMusic.width=game.width*(1/2.5);
        }

        else if(muteMusicbool)
        {
        	unMuteMusic = this.game.add.button(this.game.world.centerX, game.world.centerY, 'unMuteMusic', this.unMuteMusic, this, 2, 1, 0);
            unMuteMusic.anchor.set(0.5, 0.5);
            unMuteMusic.height=game.height*(1/10);
            unMuteMusic.width=game.width*(1/2.5);

        }

        if(muteSoundbool == false)
        {
        	muteSound = this.game.add.button(this.game.world.centerX, 6*game.height/10, 'muteSound', this.muteSound, this, 2, 1, 0);
            muteSound.anchor.set(0.5, 0.5);
            muteSound.height=game.height*(1/10);
            muteSound.width=game.width*(1/2.5);

        }

        else if(muteSoundbool)
        {
			unMuteSound = this.game.add.button(this.game.world.centerX, 6*game.height/10, 'unMuteSound', this.unMuteSound, this, 2, 1, 0);
            unMuteSound.anchor.set(0.5, 0.5);
            unMuteSound.height=game.height*(1/10);
            unMuteSound.width=game.width*(1/2.5);
        }
        
       
    },
    //If "Back" button is pressed
    backMenu: function(){
        //Go to start menu state
        this.game.state.start('StartMenu');
    },

        muteMusic: function(){
    	musicStart.mute = true;
    	muteMusic.pendingDestroy = true;
    	unMuteMusic = this.game.add.button(this.game.world.centerX, game.world.centerY, 'unMuteMusic', this.unMuteMusic, this, 2, 1, 0);
        unMuteMusic.anchor.set(0.5, 0.5);
        unMuteMusic.height=game.height*(1/10);
        unMuteMusic.width=game.width*(1/2.5);
    	muteMusicbool = true;
    },

    unMuteMusic: function(){
    	musicStart.mute = false;
    	muteMusic = this.game.add.button(this.game.world.centerX, game.world.centerY, 'muteMusic', this.muteMusic, this, 2, 1, 0);
    	unMuteMusic.pendingDestroy = true;
        muteMusic.anchor.set(0.5, 0.5);
        muteMusic.height=game.height*(1/10);
        muteMusic.width=game.width*(1/2.5);
    	muteMusicbool = false;
    	//unMute.pendingDestroy = true;
    	//mute = this.game.add.button(this.game.world.centerX - 130, 300, 'mute', this.Mute, this, 2, 1, 0);
    },

    muteSound: function(){
    	muteSoundbool = true;
    	muteSound.pendingDestroy = true;
    	unMuteSound = this.game.add.button(this.game.world.centerX, 6*game.height/10, 'unMuteSound', this.unMuteSound, this, 2, 1, 0);
        unMuteSound.anchor.set(0.5, 0.5);
        unMuteSound.height=game.height*(1/10);
        unMuteSound.width=game.width*(1/2.5);
    },

    unMuteSound: function(){
    	muteSoundbool = false;
    	unMuteSound.pendingDestroy = true;
    	muteSound = this.game.add.button(this.game.world.centerX, 6*game.height/10, 'muteSound', this.muteSound, this, 2, 1, 0);
        muteSound.anchor.set(0.5, 0.5);
        muteSound.height=game.height*(1/10);
        muteSound.width=game.width*(1/2.5);
    	//unMute.pendingDestroy = true;
    	//mute = this.game.add.button(this.game.world.centerX - 130, 300, 'mute', this.Mute, this, 2, 1, 0);
    },

    startCredits: function(){
    	this.game.state.start('Credits');
    }

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


};