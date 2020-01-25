// Variable que almazena todos los usuários, que después será cambiada se algun usuário introduzido es nuevo:

var addUsers = [{name: 'SOFIA', score: 30},
{name: "user1", score: 0},
{name: "user2", score: 5},
{name: "user3", score: 10}]

// Variable que cambia de acuerdo com el usuario del momento:

var nameUser = {name: '', score: 0}

// Variable para generar los numeros random del carton, que después será convertida en tres lineas:

var line = [];

// Variable que almazena todos los numeros random que salen en las bolas:

var randomNumbers = []

//Variable para generar 3 lineas:

var card = [[], [], []];

var cardComplete = [["X","X","X","X","X"], ["X","X","X","X","X"], ["X","X","X","X","X"]]

var totalPoints = 0

// Variable para averiguar se se hizo o no linea:

var isLine = false

alert('Welcome to Bingo! \n Powered by Skylab - Together We May Reach the Sky.')

getName()




// Funcion donde se obtiene el nombre del usuario:

function getName() {
    var whatName = prompt('What is your name?').toUpperCase()
    if (whatName !== '') {nameUser.name = whatName
                        return bingo()}
    else if(whatName === '') {alert('Please introduce your name :)')
                            return getName()}
}




// Funcion que mostra las reglas del juego. Se el usuario la acepta empieza el juego:

function bingo () { 

    var startConfirm = confirm(`Oh hi there ${nameUser.name}! Here are the rules of our bingo game:

You are given a card with numbers. Random numbers will be shown, and if one of those matches a number \
in your card it will be marked with a cross. When you make a line you will be noticed! \
When you have all the numbers, you will get BINGO!

The less attempts you need to do BINGO!, the more points you earn. \
Your points will be accumulated in your user, and user punctuations will be compared.

There you go! Shall we start?`)

    if (startConfirm === true) {return getCard()}
    else (startConfirm === false) ; {return alert('Well, you just lost the chance to play a pretty fun game ;) See you next time!')}

}




// Funcion para generar el carton del usuario. Se él acepta, se mantiene, se la rechaza, se genera una nueva:

function getCard() {

    randomNums()

    // Aquí se añaden numeros random en linea que después serán convertidos en 3 lineas:
    
    function randomNums() {

        var num = Math.floor((Math.random() * 90) + 1)

        if (line.length === 0) {line.push(num)}
        else if (line.length < 15) { line.includes(num) ? '' : line.push(num) }

        if(line.length < 15) {randomNums()}
        else if(line.length === 15) {threeLines()}

    }  

    // La conversion en 3 lineas:

    function threeLines() {
        for (var i in card) {
            card[i] = line.splice(0,5)
            }
    }

    console.log(
`
Line 1:   ${card[0].join('  ')}
Line 2:   ${card[1].join('  ')}
Line 3:   ${card[2].join('  ')}

`)

    // Para confirmar se el usuario quiere mantener su carton o generar un nuevo:
            
    var confirmBombo = confirm('Confirm to keep this sheet of number or cancel to get another one.')
            
        if(confirmBombo === true) {return showRandomNum()}
        else (confirmBombo === false) ; {return getCard()}
            
}




// Funcion para los numeros random que salen en las bolas:

    
function getRandomNumber() {

    var num = Math.ceil(Math.random() * 90)
    
    if(randomNumbers.includes(num)) {return getRandomNumber()}
    else { 
        randomNumbers.push(num)
        return num}
        
}    

// Funcion para mostrar el numero de la bola:

function showRandomNum() {

    var points = Math.floor(1/randomNumbers.length * 10000 ) - 110
    var number = getRandomNumber()
    var isConfirm = confirm(`Number ${number} came out!`)
    if (isConfirm === false) {return alert('Bye bye!')}

    confirmNums()

    // Para ver se la bola que ha salido es igual a algun numero del cartón.

    function confirmNums() {

        for (var index in card) {
            for (var i in card[index]) {

                // Se se hace una linea:

                if ( isLine === false && card[index].toString() == cardComplete[0].toString()) {
                    console.log(
`
LINE!
        
Line 1:   ${card[0].join('  ')}
Line 2:   ${card[1].join('  ')}
Line 3:   ${card[2].join('  ')}
        
`)
                    alert ('You just made a LINE! Woooo!');

                    // Aqui se garantiza que no vuelve a cantar linea:

                    isLine = true
                }

                if (card[index][i] === number) {
                    card[index][i] = 'X'
                    alert('You got a matching number!')
                    console.log(
`
Here is your card so far:

Line 1:   ${card[0].join('  ')}
Line 2:   ${card[1].join('  ')}
Line 3:   ${card[2].join('  ')}

`)

                    }

            }
        }
    }  


    // Se se hace bingo:

        if (card[0].toString() == cardComplete[0].toString() && 
            card[1].toString() == cardComplete[0].toString() && 
            card[2].toString() == cardComplete[0].toString()) {


    // Es necesario añadir los puntos nuevos al usuario, o sea, a la variable nameUser, y añadirlos a los puntos preexistentes, se se los había:

        totalPoints += points
        nameUser.score = totalPoints


    // Aquí es para añadir ese nuevo usuário a la variable addUser, donde están todos los usuários.
    // Se ya había un usuário con el nombre introducido, es necesário añadir su puntuación a puntuación que tenía antes:

        var user = addUsers[user]

        if (addUsers.filter(function(user){return user.name === nameUser.name}).pop() === undefined) {addUsers.push(nameUser)}
        else { for (var i in addUsers) {
                if(addUsers[i].name === nameUser.name) {nameUser.score += addUsers[i].score
                                                        addUsers[i].score += nameUser.score - addUsers[i].score}
            }
        }
        
        
console.log(
`
BINGO!!

Oh yeah! Congratulations, ${nameUser.name}!

You got bingo in ${randomNumbers.length} attempts!

You got ${points} points on this round.

You have ${nameUser.score} points so far!

`)
            
            alert (
`
BINGO!!
    
Congratulations, ${nameUser.name}! 

You got bingo in ${randomNumbers.length} attempts!

`)
            return isNewGame()
        } 
        else ; {
            return showRandomNum()}    
}




// En el final, para preguntar se el usuário quiere jugar un nuevo juego o ver el ranking:


function isNewGame() {

    var newGame = prompt('Would you like to start a new game? Y/N \
    If you wish to see the ranking so far type R.')
    if (newGame === null) {alert(`Please write either Y or N, or R to see the ranking!`)
                            return isNewGame()}
    else if (newGame.toUpperCase() === 'N') {return alert(`Thank you, ${nameUser.name}, for playing Bingo! Powered by SkyLab inc.`)}
    else if (newGame.toUpperCase() === 'R') {return ranking()}
    else if (newGame.toUpperCase() === 'Y') {randomNumbers = [] ; return getCard()}
}



// Para ver el ranking:

function ranking() {

    var allScores = []
    var organizedScores = []

    //He extraído las puntuaciónes de cada usuário para un array para poder hacer .sort(), o sea, organizarlas, en ese caso, en orden decreciente:

    for (var object of addUsers) {
        allScores.push(object.score)
    }

    allScores.sort(function(a,b){return b-a})


    // Después volvi a organizarlas en organizedScores por orden:

    for (var i in allScores) {
        organizedScores.push(addUsers.filter(function(someone){return someone.score === allScores[i]}).pop())
    }
    confirm (`Here is the ranking of the users so far: 
    
    1st: ${organizedScores[0].name} with ${organizedScores[0].score} points.
    2nd: ${organizedScores[1].name} with ${organizedScores[1].score} points.
    3rd: ${organizedScores[2].name} with ${organizedScores[2].score} points.`)
    
    isNewGame()

}



// (Aquí es una anotación personal para que no me olvide ºuº)

// Se o user cancela um confirm ou um prompt, a sua resposta é null. 
// É diferente de que se faça ok sem introduzir nada, isso é '' ou undefined






//  FINITO <3 