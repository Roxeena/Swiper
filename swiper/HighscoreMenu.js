var HighscoreMenu = function(game){
}

HighscoreMenu.prototype = {
    create: function(){
    	//Add the highscore menu image
        var Highscoremenu = this.game.add.image(game.world.centerX,game.world.centerY,'highscore_bild1');
        Highscoremenu.anchor.set(0.5, 0.5);
        Highscoremenu.width=game.width;
        Highscoremenu.height=game.height;

        //higescoretext

        highscoreText = this.game.add.text(game.width/2, game.height/6.3, 'Higescore ' , { font: '60px Arial', fill: '#fff' });
        highscoreText.anchor.set(0.5, 0.5);

        //score
        highscore = this.game.add.text((game.width/3), (game.height/3.15),  "1.     "+localStorage.getItem('highscore'), { font: '60px Arial', fill: '#fff' });
        highscore2 = this.game.add.text((game.width/3), (game.height/2.35), "2.     "+localStorage.getItem('highscore2'), { font: '60px Arial', fill: '#fff' });
        highscore3 = this.game.add.text((game.width/3), (game.height/1.95), "3.     "+localStorage.getItem('highscore3'), { font: '60px Arial', fill: '#fff' });
        highscore4 = this.game.add.text((game.width/3), (game.height/1.67), "4.     "+localStorage.getItem('highscore4'), { font: '60px Arial', fill: '#fff' });
        highscore5 = this.game.add.text((game.width/3), (game.height/1.47), "5.     "+localStorage.getItem('highscore5'), { font: '60px Arial', fill: '#fff' });

        //Add the buttons
        back = this.game.add.button(this.game.world.centerX, game.height*(9/10), 'back', this.backMenu, this, 2, 1, 0);
        //size
        back.width=game.width*(1/2.5);
        back.height=game.height*(1/10);
        //Add the anchor points
        back.anchor.set(0.5, 0.5);
        //width Highscores
        highscoreText.width=game.width*(1/1.5);
        highscore.width=game.width*(1/2.75);
        highscore2.width=game.width*(1/2.75);
        highscore3.width=game.width*(1/2.75);
        highscore4.width=game.width*(1/2.75);
        highscore5.width=game.width*(1/2.75);
        //height higescores
        highscoreText.width=game.width*(1/3)
        highscore.height=game.height*(1/10);
        highscore2.height=game.height*(1/10);
        highscore3.height=game.height*(1/10);
        highscore4.height=game.height*(1/10);
        highscore5.height=game.height*(1/10);


    },
    //If the "Back" button is pressed
    backMenu: function(){
        //Go to start menu state
        this.game.state.start('StartMenu');    }
};