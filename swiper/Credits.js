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

        back = this.game.add.button(this.game.world.centerX, game.height*(9/10), 'back', this.backSettings, this, 2, 1, 0);
		
		back.width=game.width*(1/2.5);
        back.height=game.height*(1/10);
       	back.anchor.set(0.5, 0.5);
       	
        art = this.game.add.text(50,50, 'Art director \n Nicholas Frederiksen',{ font: '60px anuswiper_font', fill: '#fff' });
        gameplay = this.game.add.text(700,50, 'Gameplay director \n PushPulle',{ font: '60px anuswiper_font', fill: '#fff'});
        github = this.game.add.text(50, 500, 'Communication manager \n Gittan',{ font: '60px anuswiper_font', fill: '#fff'});
        meme = this.game.add.text(700,500, 'Meme generator \n Jakob Gunnarsson',{ font: '60px anuswiper_font', fill: '#fff'});
        menu = this.game.add.text(50, 950, 'Menu designer \n Erik The King',{ font: '60px anuswiper_font', fill: '#fff'});
        music_sound = this.game.add.text(700, 950, 'Avicii \n Sälias',{ font: '60px anuswiper_font', fill: '#fff'});
        
	},

	backSettings: function() {
		//Go to settings state
		this.game.state.start('Settings');
	}	


}