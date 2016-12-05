var HighscoreMenu = function(game){
}

HighscoreMenu.prototype = {
    create: function(){

    	//Add the highscore menu image
        var Highscoremenu = this.game.add.image(game.world.centerX,game.world.centerY,'highscore_bild');
        Highscoremenu.anchor.set(0.5, 0.5);
        Highscoremenu.width=game.width;
        Highscoremenu.height=game.height;
        
        //If there are no highscore then set it to zero
        if(localStorage.getItem('highscore') == null)
        {
            localStorage.setItem('highscore', 0);
            localStorage.setItem('highscore2', 0);
            localStorage.setItem('highscore3', 0);
            localStorage.setItem('highscore4', 0);
            localStorage.setItem('highscore5', 0);
        }
        //If there are no highscore then set it to zero
        else if(localStorage.getItem('highscore2') == null)
        {
            localStorage.setItem('highscore2', 0);
            localStorage.setItem('highscore3', 0);
            localStorage.setItem('highscore4', 0);
            localStorage.setItem('highscore5', 0);
        }
        //If there are no highscore then set it to zero
        else if(localStorage.getItem('highscore3') == null)
        {
            localStorage.setItem('highscore3', 0);
            localStorage.setItem('highscore4', 0);
            localStorage.setItem('highscore5', 0);

        }
        //If there are no highscore then set it to zero
        else if(localStorage.getItem('highscore4') == null)
        {
            localStorage.setItem('highscore4', 0);
            localStorage.setItem('highscore5', 0);
        }
        //If there are no highscore then set it to zero
        else if(localStorage.getItem('highscore5') == null)
        {
            localStorage.setItem('highscore5', 0);
        } 

        //score
        highscore  = this.add.bitmapText((game.width/3), (game.height/4),'anuswiper_font', "1.     "+localStorage.getItem('highscore'),  24);
        highscore2 = this.add.bitmapText((game.width/3), (game.height/2.88),'anuswiper_font', "2.     "+localStorage.getItem('highscore2'), 24);
        highscore3 = this.add.bitmapText((game.width/3), (game.height/2.25),'anuswiper_font', "3.     "+localStorage.getItem('highscore3'), 24);
        highscore4 = this.add.bitmapText((game.width/3), (game.height/1.85),'anuswiper_font', "4.     "+localStorage.getItem('highscore4'), 24);
        highscore5 = this.add.bitmapText((game.width/3), (game.height/1.58),'anuswiper_font', "5.     "+localStorage.getItem('highscore5'), 24);

       

        //Add the buttons
        back = this.game.add.button(this.game.world.centerX, game.height*(8.5/10), 'back', this.backMenu, this, 2, 1, 0);
        back.anchor.set(0.5, 0.5);
        back.height = game.height*(1/10);
        back.width = game.width*(1/3);
        //Add the anchor points
        back.anchor.set(0.5, 0.5);
        //width Highscores
        highscore.width=game.width*(1/2.75);
        highscore2.width=game.width*(1/2.75);
        highscore3.width=game.width*(1/2.75);
        highscore4.width=game.width*(1/2.75);
        highscore5.width=game.width*(1/2.75);
        //height higescores
        highscore.height=game.height*(1/10);
        highscore2.height=game.height*(1/10);
        highscore3.height=game.height*(1/10);
        highscore4.height=game.height*(1/10);
        highscore5.height=game.height*(1/10);


    },
    //If the "Back" button is pressed
    backMenu: function(){
        //Knappljud
        if (muteSoundbool == false)
        {
            audio.play(); 
        }
        //Go to start menu state
        this.game.state.start('StartMenu');    }
};
