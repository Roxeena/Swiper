var HighscoreMenu = function(game){
}

HighscoreMenu.prototype = {
    create: function(){
    	//Add the highscore menu image
        var Highscoremenu = this.game.add.image(game.world.centerX,game.world.centerY,'highscore_bild1');
        Highscoremenu.anchor.set(0.5, 0.5);
        Highscoremenu.width=game.width;
        Highscoremenu.height=game.height;

        highscore = this.game.add.text((game.width/3), (game.height/3), localStorage.getItem('highscore'), { font: '60px anuswiper_font', fill: '#fff' });
        highscore2 = this.game.add.text((game.width/3), (game.height/2.3), localStorage.getItem('highscore2'), { font: '60px anuswiper_font', fill: '#fff' });
        highscore3 = this.game.add.text((game.width/3), (game.height/1.9), localStorage.getItem('highscore3'), { font: '60px anuswiper_font', fill: '#fff' });
        highscore4 = this.game.add.text((game.width/3), (game.height/1.62), localStorage.getItem('highscore4'), { font: '60px anuswiper_font', fill: '#fff' });
        highscore5 = this.game.add.text((game.width/3), (game.height/1.42), localStorage.getItem('highscore5'), { font: '60px anuswiper_font', fill: '#fff' });

        //Add the buttons
        back = this.game.add.button(this.game.world.centerX, game.height*(8/10), 'back', this.backMenu, this, 2, 1, 0);
      
        //Add the anchor points
        back.anchor.set(0.5, 0.5);

    },
    //If the "Back" button is pressed
    backMenu: function(){
        //Go to start menu state
        this.game.state.start('StartMenu');    }
};