HighscoreMenu = function(game){

}

HighscoreMenu.prototype = {
    create: function(){

        var Highscoremenu = this.game.add.image(0,0,'highscore_bild');

        back = this.game.add.button(this.game.world.centerX - 130, 800, 'back', this.backMenu, this, 2, 1, 0);


    },
    backMenu: function(){
        this.game.state.start('StartMenu');
    }
};