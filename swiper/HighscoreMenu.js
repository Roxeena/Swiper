var HighscoreMenu = function(game){
}

HighscoreMenu.prototype = {
    create: function(){
    	//Add the highscore menu image
        var Highscoremenu = this.game.add.image(0,0,'highscore_bild');

        //Add the "Back" button
        back = this.game.add.button(this.game.world.centerX - 130, 800, 'back', this.backMenu, this, 2, 1, 0);

    },
    //If the "Back" button is pressed
    backMenu: function(){
        //Go to start menu state
        this.game.state.start('StartMenu');
    }
};