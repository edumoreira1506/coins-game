$(document).ready(function(){
    const game = new Game(1);
    game.start()

    $('body').keydown(function(e){
        game.move(e.keyCode)
    })
})