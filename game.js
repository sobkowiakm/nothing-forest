var game = new Game(create, update);
var cursors;
function create() {
    
    for (var x=0; x<3; x++) {
        game.addPlayer();
    }
    game.setGravity(100);

    cursors = game.input.keyboard.createCursorKeys();
}

move_table = {
    up: 'moveUp',
    down: 'moveDown',
    left: 'moveLeft',
    right: 'moveRight'
}

function update() {
    
    for (var direction in move_table) {
        if (cursors[direction].isDown) {
            
            var move_fn = move_table[direction]
            
            game.players[0].body[move_fn](100);
        }
    }
    


}
