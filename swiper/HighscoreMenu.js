var HighscoreMenu = function(game){
}

HighscoreMenu.prototype = {
    create: function(){
    	//Add the highscore menu image
        var Highscoremenu = this.game.add.image(0,0,'highscore_bild');

        //Add the buttons
        back = this.game.add.button(this.game.world.centerX, 800, 'back', this.backMenu, this, 2, 1, 0);

        //Add the anchor points
        back.anchor.set(0.5, 0.5);

    },
    //If the "Back" button is pressed
    backMenu: function(){
        //Go to start menu state
        this.game.state.start('StartMenu');
    }
};