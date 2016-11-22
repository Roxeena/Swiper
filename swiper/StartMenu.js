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


//liger under video
/*		//Add the start menu image
		var StartMenu = this.game.add.image(game.world.centerX,game.world.centerY,'titleText');
		StartMenu.anchor.set(0.5, 0.5);
		StartMenu.width = game.width;
		StartMenu.height = game.height;
*/
//	musicStart = this.game.add.audio('seal');

	if(startMusic && muteMusicbool == false)
	{
		musicStart.loop = true;
		musicStart.play();
	}
    
    startMusic = false;

    //Video menu
    video = this.game.add.video('titlevideo');
    
	video.play(true);

	var videoX = this.game.world.centerX;
	var videoY = this.game.world.centerY;
	var videoW = (this.game.width/video.width);
	var videoH = (this.game.height/video.height);

    //  x, y, anchor x, anchor y, scale x, scale y
    video.addToWorld(videoX, videoY, 0.5, 0.5, videoW, videoH);

 
		//Add the buttons
		startB = this.game.add.button(this.game.world.centerX, game.world.centerY, 'button', this.startGame, this, 2, 1, 0);
		highScoreB = this.game.add.button(this.game.world.centerX, 3.8*game.height/6, 'HS_button', this.startHighscoreMenu, this, 2, 1, 0);
		settingsB = this.game.add.button(this.game.world.centerX, 4.5*game.height/6 , 'S_button', this.startSettings, this, 2, 1, 0);

		//Add the anchor points
		startB.anchor.set(0.5, 0.5);
		highScoreB.anchor.set(0.5, 0.5);
		settingsB.anchor.set(0.5, 0.5);

		//skala bredd
		startB.width=game.width*(1/2);
		highScoreB.width=game.width*(1/2.5);
		settingsB.width=game.width*(1/2.5);
		//skala höjd 
		startB.height=game.height*(1/7);
		highScoreB.height=game.height*(1/10);
		settingsB.height=game.height*(1/10);
	},

	//If button "Start" is pressed this function will be executed
	startGame: function() {
		//video paus
		video.play(false);
		//Go to game state
		musicStart.mute = true;
		//musicStart.loop = false;
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
	
}; 
