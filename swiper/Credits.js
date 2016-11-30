var Credits = function(game){
}

Credits.prototype = {
	create: function(){
		Credits.width=game.width;
        Credits.height=game.height;
        
        var Background = this.game.add.image(game.world.centerX,game.world.centerY,'blank_canvas');
        Background.anchor.set(0.5, 0.5);
        Background.width=game.width;
        Background.height=game.height;

        back = this.game.add.button(this.game.world.centerX, game.height*(8/10), 'back', this.backSettings, this, 2, 1, 0);
		back.anchor.set(0.5, 0.5);
		back.height = game.height*(1/10);
        back.width = game.width*(1/3);
	
                //var style = { font: "anuswiper_font", fill: "#ffffff", align: "center" };

        //Add the credit text
        art = 			this.add.bitmapText(game.width * (1/4), game.height * (2/10),'anuswiper_font','Art:\nNicholas\nFrederiksen' );
        gameplay = 		this.add.bitmapText(game.width * (1/4), game.height * (4/10), 'anuswiper_font','Gameplay:\nJulius Kordel');
        github = 		this.add.bitmapText(game.width * (1/4), game.height * (6/10), 'anuswiper_font','Communication:\nMalin Ejdbo');
        meme = 			this.add.bitmapText(game.width * (3/4), game.height * (2/10), 'anuswiper_font','Feedback:\nJakob\nGunnarsson');
        menu = 			this.add.bitmapText(game.width * (3/4), game.height * (4/10), 'anuswiper_font','Menu:\nErik Asp');
        music_sound = 	this.add.bitmapText(game.width * (3/4), game.height *(6/10),  'anuswiper_font','Audio:\nElias\n Elmquist');
        
      //  art.addColor('#ffffff', 25);

        //Add the anchors
        art.anchor.set(0.5, 0.5);
        gameplay.anchor.set(0.5, 0.5);
        github.anchor.set(0.5, 0.5);

        meme.anchor.set(0.5, 0.5);
        menu.anchor.set(0.5, 0.5);
        music_sound.anchor.set(0.5, 0.5);


        //Align the text
        art.align = "center";
        gameplay.align = "center";
        github.align = "center";
        meme.align = "center";
        menu.align = "center";
        music_sound.align = "center";

        //Scale the text 
        art.height = game.height * (1/9);
        gameplay.height = game.height *(1/9);
        github.height = game.height *(1/9);
        meme.height = game.height *(1/9);
        menu.height = game.height *(1/9);
        music_sound.height = game.height *(1/9);

        art.width = game.width * (1/2.3);
        gameplay.width = game.width *(1/2.3);
        github.width = game.width *(1/2.3);
        meme.width = game.width *(1/2.3);
        menu.width = game.width *(1/2.3);
        music_sound.width = game.width *(1/2.3);

	},

	backSettings: function() {
		//Knappljud
		if (muteSoundbool == false)
		{
			audio.play(); 
		}
		//Go to settings state
		this.game.state.start('Settings');
	}	


}