var HighscoreMenu = function(game){
}

HighscoreMenu.prototype = {
    create: function(){
    	//Add the highscore menu image
        var Highscoremenu = this.game.add.image(0,0,'highscore_bild1');

        highscore = this.game.add.text(150, 300, localStorage.getItem('highscore'), { font: '60px Arial', fill: '#fff' });
        highscore2 = this.game.add.text(150, 400, localStorage.getItem('highscore2'), { font: '60px Arial', fill: '#fff' });
        highscore3 = this.game.add.text(150, 500, localStorage.getItem('highscore3'), { font: '60px Arial', fill: '#fff' });
        highscore4 = this.game.add.text(150, 600, localStorage.getItem('highscore4'), { font: '60px Arial', fill: '#fff' });
        highscore5 = this.game.add.text(150, 700, localStorage.getItem('highscore5'), { font: '60px Arial', fill: '#fff' });

        //Add the "Back" button
        back = this.game.add.button(this.game.world.centerX - 130, 800, 'back', this.backMenu, this, 2, 1, 0);

    },
    //If the "Back" button is pressed
    backMenu: function(){
        //Go to start menu state
        this.game.state.start('StartMenu');
    }
};