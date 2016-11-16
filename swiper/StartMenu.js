var StartMenu = function(game){
}

StartMenu.prototype = {
	create: function(){
		/*startBG = this.add.image(0,0,'titlescreen');
		startBG.inputEnable = true;
		startBG.events.onInputDown.addOnce(this.startGame,this);
*/
		/*startPromt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180,
			'eightbitwonder','Touch to start!',24);
	*/
	/*var playtext=this.game.add.button(this.world.centerX-155, this.world.centerY+180,
			'Touch to start',this.startGame,this);
		*/

		//var bitmapplay = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, this.startGame,'eightbitwonder','Touch to start!',24);

		/*var bitmapplay = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, this.startGame,
			'eightbitwonder','Touch to start!',24);*/

		//Add the start menu image
		var StartMenu = this.game.add.image(0,0,'titlescreen');

//	musicStart = this.game.add.audio('seal');

	if(startMusic && muteMusicbool == false)
	{
		musicStart.loop = true;
		musicStart.play();
	}
    
    startMusic = false;


		//Add the buttons
		startB = this.game.add.button(this.game.world.centerX, 430, 'button', this.startGame, this, 2, 1, 0);
		highScoreB = this.game.add.button(this.game.world.centerX, 570, 'HS_button', this.startHighscoreMenu, this, 2, 1, 0);
		settingsB = this.game.add.button(this.game.world.centerX, 680, 'S_button', this.startSettings, this, 2, 1, 0);
		quitB = this.game.add.button(this.game.world.centerX, 790, 'quit', this.Quit, this, 2, 1, 0);

		//Add the anchor points
		startB.anchor.set(0.5, 0.5);
		highScoreB.anchor.set(0.5, 0.5);
		settingsB.anchor.set(0.5, 0.5);
		quitB.anchor.set(0.5, 0.5);
	},

	//If button "Start" is pressed this function will be executed
	startGame: function() {
		//Go to game state
		musicStart.mute = true;
		this.game.state.start('Game');
	},

	//If button "Highscore" is pressed
	startHighscoreMenu: function() {
		//Go to highscore menu state
		this.game.state.start('HighscoreMenu');
	},

	//If button "Settings"
	startSettings: function() {
		//Go to settings state
		
		this.game.state.start('Settings');
	}

	/*Quit: function() {
		navigator.this.game.exitApp();
		console.log("Quitting swiper");
	}*/
	
	
}; 
