var board = []
var gameCounter = 0
var name = ''
var points = 100
var gameRules = 'Inicias con 100 puntos. Por cada turno pierdes 1 punto'
var users = []
var numbersOut = []
var islineMatched = false


function startBingo(numbersInBoard, rangeRandomNumbers) {
  welcome()
  alert(gameRules)
  giveoutBoard(numbersInBoard, rangeRandomNumbers)
}

function welcome() {
  name = prompt('Cual es tu nombre?')
  name = firstLetterUppercase(name)
  alert("Hola " + name + ", bienviendo al Bingo")
}

function firstLetterUppercase(nameInput) {
  var firstLetter = nameInput.split('')[0]
  var letterUppercase = firstLetter.toUpperCase()

  return letterUppercase + nameInput.slice(1).toLowerCase()
}

function giveoutBoard(numbersInBoard, rangeRandomNumbers) {
  var generateBoard = false

  do {
    createBoard(numbersInBoard, rangeRandomNumbers)
    showBoard('inAlert')

    var response = prompt("Si realmente quieres ese Cartón deberás responder 'Yes' ")
    if (response === "Yes") {
      generateBoard = false
      
    } else {
      generateBoard = true
      board = []
    }

  } while(generateBoard)

  var nextBall = false
  var fullBoard = false

  do {
    var randomNumber = newTurn(rangeRandomNumbers)
    var successfulNumber = board.some(cell => cell.number === randomNumber)
    showBoard()
    
    if (successfulNumber) {
      showMatchedNumber(randomNumber)
      fullBoard = board.every(cell => cell.matched)

      if (!islineMatched) {
        var listEachFiveNumbers = []

        for (let index = 0; index < board.length; index = index + 5) {
          listEachFiveNumbers.push(board.slice(index, index+5))
        }

        for (let index = 0; index < listEachFiveNumbers.length; index++) {

          if (listEachFiveNumbers[index].every(cell => cell.matched) && !islineMatched) {
            alert('Bingo 1 Linea!')
            islineMatched = true
          }
        }
        
      }

      if (fullBoard) {
        alert('BINGOOO! Te has tomando ' + gameCounter + " turnos terminar.")
        nextBall = false
      }
    } 

    if (!fullBoard) {
      nextBall = confirm('"OK" para continuar o "Cancel" para Salir?')
    }
    
  } while(nextBall)

  saveUser()
  showUsers()

  if (confirm('Quieres volver a jugar Bingo?')) {
    restartBingo()
  } 
}


function createBoard(quantityBoard, rangeRandomNumbers) {
  for (var i = 1; i <= quantityBoard; i++) {
    var boardLength = board.length
  
    while(boardLength === board.length) {
      var random = Math.ceil(Math.random() * rangeRandomNumbers)
      
      if (!board.some(cell => cell.number === random)) {
        board.push({
          number: random, 
          matched: false
        })
      }
    }


  }
}


function showBoard(whereShow) {
  var updatedBoard = board.map((cell, index) => {
    var {number} = cell
    var matchedNumber = ''

    if(cell.matched) {
      number = "X"
    }

    if ( (index + 1) % 5 === 0) {
      matchedNumber = number + "\n"
    } else {
      matchedNumber = number + "  "

      if (number.toString().length === 1) {
        matchedNumber = matchedNumber + " "
      } 
    }

    return matchedNumber
  })

  updatedBoard = updatedBoard.join('')

  if (whereShow === 'inAlert') {
    alert("Tu tablero" + ":\n" + updatedBoard)

  } 

  console.log("Tu tablero" + ":\n" + updatedBoard)
  

  
}

function showMatchedNumber(randomNumber) {

  board = board.map(cell => {
    if (cell.number === randomNumber) {
      return {
        number: cell.number, 
        matched: true
      }
    }
    return cell
  })

  showBoard('inAlert')
}

function newTurn(rangeRandomNumbers) {
  var numberRandom;
  
  do {
    numberRandom = Math.ceil(Math.random() * rangeRandomNumbers)
    var isRepeatedNumber = numbersOut.some(number => number === numberRandom)

  } while (isRepeatedNumber);

  numbersOut.push(numberRandom)

  gameCounter += 1

  alert("Turno #" + gameCounter + ". El número que salió es el: " + numberRandom)
  return numberRandom
}

function saveUser() {
  users.push({
    name: name,
    points: points - gameCounter
  })
}

function showUsers() {
  var morePointsFirst = users.sort((a, b) => (a.points > b.points) ? -1 : 1)

  var updatedUsers = morePointsFirst.map(user => {
    return ("\n" + user.name + " tiene " + user.points + " puntos.") 
  })

  alert(updatedUsers)
}


function restartBingo() {
  board = []
  gameCounter = 0
  name = ''
  numbersOut = []
  islineMatched = false
  points = 100
  startBingo(numbersInBoard, rangeRandomNumbers)
}


var rangeRandomNumbers = 99

// Select how many numbers inside the board
var numbersInBoard = 15
// I set by default 15 numbers in the board

startBingo(numbersInBoard, rangeRandomNumbers)