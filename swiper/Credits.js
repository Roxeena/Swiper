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
	
        //Add the credit text
        art = 			this.game.add.text(game.width * (1/4), game.height * (2/10), 'Art:\nNicholas\nFrederiksen',{ font: '40px anuswiper_font', fill: '#fff' });
        gameplay = 		this.game.add.text(game.width * (1/4),game.height * (4/10), 'Gameplay:\nJulius Kördel',{ font: '40px anuswiper_font', fill: '#fff'});
        github = 		this.game.add.text(game.width * (1/4), game.height * (6/10), 'Communication:\nMalin Ejdbo',{ font: '40px anuswiper_font', fill: '#fff'});
        meme = 			this.game.add.text(game.width * (3/4), game.height * (2/10), 'Feedback:\nJakob\nGunnarsson',{ font: '40px anuswiper_font', fill: '#fff'});
        menu = 			this.game.add.text(game.width * (3/4), game.height * (4/10), 'Menu:\nErik Asp',{ font: '40px anuswiper_font', fill: '#fff'});
        music_sound = 	this.game.add.text(game.width * (3/4), game.height *(6/10), 'Music and sound:\nElias Elmquist',{ font: '40px anuswiper_font', fill: '#fff'});
        
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
        art.fontSize = game.height * (1/30);
        gameplay.fontSize = game.height *(1/30);
        github.fontSize = game.height *(1/30);
        meme.fontSize = game.height *(1/30);
        menu.fontSize = game.height *(1/30);
        music_sound.fontSize = game.height *(1/30);

	},

	backSettings: function() {
		//Go to settings state
		this.game.state.start('Settings');
	}	


}