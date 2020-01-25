var currentValue = ""
var newValue = ""
var currentOperation = ""
var fontSize = 42
var operations = ["/", "*", "-", "+"]
var resultShowed = false

var display = document.getElementById("display")
var acButton = document.getElementById("ac")
var division = document.getElementById("division")

function cleanDisplay() {
  currentValue = ""
  newValue = ""
  currentOperation = ""
  display.value = "0"

  acButton.innerText = "AC"
  fontSize = 42
  display.style.fontSize = fontSize + "px"
  // operations.forEach(sign => document.getElementById(sign).style.border = "solid 1px grey")
  borderBlackOperation()
}

function eraseOne() {
  var arrayNumbers = newValue.split("")
  newValue = arrayNumbers.slice(0, arrayNumbers.length - 1).join("")
  display.value = newValue

  if (newValue === "") display.value = "0"
}

function saveValue(number) {
  if (resultShowed && currentOperation === "") {
    currentValue = number
    display.value = currentValue
    
    resultShowed = false
  } else {
    newValue += number
    display.value = newValue
  }

  acButton.innerText = "C"
  fitNumbersInDisplay()
  
}

function addOperation(operation) {
  borderBlackOperation(operation)

  if (currentValue.length === 0) {
    currentOperation = operation
    currentValue = newValue
    newValue = ""
    
  } else if (currentOperation) {

    if(newValue) {
      makeOperation()
    }
    
    currentOperation = operation
    display.value = currentValue
    fitNumbersInDisplay()
    newValue = ""

  } else {
    currentOperation = operation
  }
}


function getResult() {
  makeOperation()
  borderBlackOperation()

  newValue = ""
  currentOperation = ""

  resultShowed = true

  display.value = currentValue
  fitNumbersInDisplay()
}


// Make basic arithmetic operations
function makeOperation() {
  currentValue = parseFloat(currentValue)
  newValue = parseFloat(newValue)


  if (currentOperation === "/") currentValue = currentValue / newValue
  if (currentOperation === "*") currentValue = currentValue * newValue
  if (currentOperation === "-") currentValue = currentValue - newValue
  if (currentOperation === "+") currentValue = currentValue + newValue

  if (isNaN(currentValue) || currentValue === Infinity) currentValue = "0"

  var decimals = currentValue.toString().split('.')[1]

  if (decimals && decimals.length > 2) {
    currentValue = currentValue.toFixed(2)
  }
  
  currentValue = currentValue.toString()
}

// Mark the current operation
function borderBlackOperation(operation) {
  
  if (operation) {
    document.getElementById(operation).style.border = "solid 1px black"
    var operationsFiltered = operations.filter(op => op !== operation)

    operationsFiltered.forEach(operat => document.getElementById(operat).style.border = "solid 1px grey")
  
  } else {
    operations.forEach(operat => {
      document.getElementById(operat).style.border = "solid 1px grey"
    })
  }
  

}


function fitNumbersInDisplay() {
  var lengthNumbers = display.value.length
  
  if( lengthNumbers > 8) {
    display.style.fontSize = (320 / lengthNumbers) + "px"
  }
}