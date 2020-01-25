var board = []
var gameCounter = 0
var name = ''

function startBingo(cellsQuantity, rangeRandomNumbers) {
  welcome()
  giveoutBoard(cellsQuantity, rangeRandomNumbers)
}

function welcome() {
  name = prompt('Cual es tu nombre?')
  alert("Hola " + name + ", bienviendo al Bingo")
}

function giveoutBoard(cellsQuantity, rangeRandomNumbers) {
  createBoard(cellsQuantity, rangeRandomNumbers)
  showBoard(board)

  var nextBall = false
  var fullBoard = false

  do {
    var randomNumber = newTurn(rangeRandomNumbers)
    var successfulNumber = board.some(cell => cell.number === randomNumber)
    
    if (successfulNumber) {
      showCheckedNumber(randomNumber)
      fullBoard = board.every(cell => cell.check)

      if (fullBoard) {
        alert('Felicidades, has ganado! Te has tomando ' + gameCounter + " turnos terminar.")
        nextBall = false
      }
    }

    if (!fullBoard) {
      nextBall = confirm('Quieres continar con el siguiente turno?')
    }
    
  } while(nextBall)

  if (confirm('Quieres jugar de nuevo?')) {
    restartBingo()
  } 
}


function createBoard(quantityBoard, rangeRandomNumbers) {
  for (var i = 1; i <= quantityBoard; i++) {
    var boardLength = board.length
  
    while(boardLength === board.length ) {
      var random = Math.ceil(Math.random() * rangeRandomNumbers)
      
      if (!board.some(n => n.num === random)) {
        board.push({
          number: random, 
          check: false
        })
      }
    }
  }
}


function showBoard(board) {
  var updatedBoard = board.map((cell, i) => {
    var index = i + 1

    if (cell.check) {
      return ("\nTu número " + index + " es: " + cell.number + " ==> X")

    } else {
      return  ("\nTu número " + index + " es: " + cell.number)
    }
  })

  alert(updatedBoard)
}

function showCheckedNumber(randomNumber) {
  alert("Exc! :-D  Haz acertado el numero: " + randomNumber)

  board = board.map(cell => {
    if (cell.number === randomNumber) {
      return {
        number: cell.number, 
        check: true
      }
    }
    return cell
  })

  showBoard(board)
}

function newTurn(rangeRandomNumbers) {
  var numberRandom = Math.ceil(Math.random() * rangeRandomNumbers)
  gameCounter += 1
  alert("Turno #" + gameCounter + ". El número que salió es el: " + numberRandom)
  return numberRandom
}


function restartBingo() {
  board = []
  gameCounter = 0
  name = ''
  startBingo(cellsQuantity, rangeRandomNumbers)
}


/* 
Para probar el bingo rapidamente:
- Cambiar rangeRandomNumbers a 3
- Cambiar cellsQuantity a 1
*/

var rangeRandomNumbers = 99
var cellsQuantity = 15

startBingo(cellsQuantity, rangeRandomNumbers)