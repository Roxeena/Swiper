Settings = function(game){

}

Settings.prototype = {
    create: function(){

        back = this.game.add.button(this.game.world.centerX - 130, 800, 'back', this.backMenu, this, 2, 1, 0);


    },
    backMenu: function(){
        this.game.state.start('StartMenu');
    }
};