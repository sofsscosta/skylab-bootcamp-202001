var op = 'add';
var a = 10, b = 20;
var result;

switch(op) {
    case 'add': result = a + b; break;
    //case 'sub': result = a - b; break;
    default: result = a - b;
}

// 2

var age = 2

switch(true) {
    case age < 3: console.log('slimy')
    case age < 16: console.log('hormons instead of neurons')
    case age < 21: console.log('immature yet')
    case age < 25: console.log('butterfly mind')
}

// 3

do {
    var player1 = prompt('player 1')
    var player2 = prompt('player 2')

    } while(player1 === player2)

//console.log('player ' + (player1 > player2? 1 : 2) + ' wins')

console.log('player ' + (function() {
    if (player1 > player2) return 1 
    else return 2
})() + ' wins')
