var counter = 0

var resultSpan = document.getElementById('result')
var turnH2 = document.getElementById('turn')
var player = document.getElementById('player')

var welcomeH2 = document.getElementById('welcome')
var buttonPlay = document.querySelector('.button-play')

var exitDiv = document.getElementById('exit')

buttonPlay.addEventListener('click', playConnect4)
exitDiv.addEventListener('click', () => location.reload())

function createTable() {
  
  var game = document.querySelector('.game')
  var table = document.createElement('table')
  var tbody = document.createElement("tbody")

  var table = document.createElement('table')
  for(var i = 0; i < 6; i++) {
    var row = document.createElement('tr')

    for(var j = 0; j < 7; j++) {
      var cell = document.createElement('td')
      cell.classList.add('cell')
      cell.classList.add(j)
      cell.addEventListener('click', selectChip)
      row.appendChild(cell)
    }

    tbody.appendChild(row)
  }

  table.appendChild(tbody)
  game.appendChild(table)
  
}



function selectChip(event) {
  var index = event.target.cellIndex
  var cells = document.getElementsByClassName(index)
  var cellSelected = getLastChip(cells)
  
  

  if (cellSelected) {
    if (counter % 2 === 0) {
      cellSelected.classList.add('red')
      player.style.backgroundColor = 'yellow'

    } else {
      cellSelected.classList.add('yellow')
      player.style.backgroundColor = 'red'
    }

    counter += 1
  }


  verticalLine(cells)
  diagonalLine("leftToRight")
  diagonalLine("rightToLeft")
  horizontalLine(cells)
  checkDrawer()
  
}

function getLastChip(cells) {
  var emptyChips = []

  for(var index = 5; index >= 0; index--) {
    if (typeof cells[index].classList[2] === 'undefined') {
      var cell = cells[index]
      cell.dataset.row = index
      emptyChips.push(cell)
    }
  }

  return emptyChips[0]
}


function verticalLine(cells) {
  var counterRed = 0
  var counterYellow = 0

  for(var i = 5; i >= 0; i--) {
    if (cells[i].classList[2] === 'red') {
      counterRed += 1
    } else {
      counterRed = 0
    }

    if (counterRed === 4) {
      showWinner('red')
    }
  }

  for(var i = 5; i >= 0; i--) {
    if (cells[i].classList[2] === 'yellow') {
      counterYellow += 1
    } else {
      counterYellow = 0
    }

    if (counterYellow === 4) {
      showWinner('yellow')
    }
  }
}

function horizontalLine() {
  var rows = document.querySelectorAll('tr')
  var color = ''
  var counterColor = 0
  
  // 2 repetitions --> Red and Yellow
  for(var z = 0; z <= 1; z++) {
    z % 2 === 0 ? color = 'red' : color = 'yellow'

    for(var i = 0; i <= 5; i++) {
      counterColor = 0
  
      for(var j = 0; j <= 6; j++) {
        var currCell = rows[i].childNodes[j]
  
        if (currCell.classList[2] === color) {
          counterColor += 1
  
        } else {
          counterColor = 0
        }
  
        if (counterColor === 4) {
          showWinner(color)
        }
  
      }
    }

  }


}

function diagonalLine(horizontal) {
  var rows = document.querySelectorAll('tr')

  var counterColor = 0
  
  for(var i = 0; i <= 5; i++) { // 6 rows
  
    for(var j = 0; j <= 6; j++) { // 7 rows

      var currentCell = rows[i].childNodes[j]
      var currentColor = currentCell.classList[2]

      if (currentColor) {

        var spot = currentCell.classList[1]
        spot = parseInt(spot)

        var {row} = currentCell.dataset
        row = parseInt(row)

        counterColor = 1


        for(var h = row + 1; h <= 5; h++) {

          if (horizontal === 'leftToRight') {
            spot += 1
          } else if (horizontal === 'rightToLeft') {
            spot -=1
          }

          var compareCell = rows[h].childNodes[spot]
          var compareColor = ''

          if (compareCell) {
            if(compareCell.classList.length > 2) {
              compareColor = compareCell.classList[2]
            }
          }

          if(compareColor === currentColor) {
            counterColor += 1

          } else {
            counterColor = 0
          }

          if (counterColor === 4) {
            // console.log(currentColor)
            showWinner(currentColor)
          }

        }
      }

      // if (spot == currCell.classList[1]) {

      //   if(cellColor === currCell.classList[2]) {
      //     counterColor += 1
      //   } else {
      //     counterColor = 0
      //   }
      // }

      // if (counterColor === 4) {
      //   showWinner(color)
      // }
    }

    
  }
}

function checkDrawer() {
  var tds = document.querySelectorAll('td')
  tds = Array.from(tds)
  var chipsWithColor = tds.filter(td => td.classList[2])

  if(chipsWithColor.length === 42) {
    showWinner(false)
  }
}

function stopGame() {
  var tds = document.querySelectorAll('td')
  tds.forEach(function(td) {
    td.removeEventListener("click", selectChip);
  })

}

function playConnect4() {
  var tds = document.querySelectorAll('td')
  tds.forEach(function(td) {
    td.addEventListener("click", selectChip);
  })

  welcomeH2.style.display = 'none'
  buttonPlay.style.display = 'none'

  turnH2.style.display = 'block'
  player.style.backgroundColor = 'red'
  exitDiv.style.display = 'block'
}

function showWinner(color) {
  stopGame()

  if( color === 'red' || color === 'yellow' ) {
    resultSpan.innerHTML = 'El color ganador es el '
    player.style.backgroundColor = color

  } else {
    resultSpan.innerHTML = 'El resultdo es un Empate'
  }
}

createTable()
stopGame()

