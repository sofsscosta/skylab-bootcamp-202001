var numbers = []

function calculator() {
  var num = ""
  var moreNumbers = false

  do {
    num = prompt("Ingrese un numero")

    if (!isNaN(num) && num.length > 0) {
      numbers.push(Number(num))
      moreNumbers = confirm("Quieres ingresar otro numero?")

    } else if (num.length === 0) {
      alert("Ningun dato ingresado")
      num = NaN

    } else {
      alert("Ese dato no es un numero")
    }

  } while ( isNaN(num) || moreNumbers)

  showResults()
}


function showResults() {
  var division = numbers.reduce((a, c) => a / c)

  alert(
  "Los numberos ingresados fueron: " + numbers.join(', ') +"\n\n"
  + "Resultados:\n"
  + "Suma: " + numbers.reduce((a, c) => a + c) + "\n"
  + "Resta: " + numbers.reduce((a, c) => a - c) + "\n"
  + "Multiplication: " + numbers.reduce((a, c) => a * c) + "\n"
  + "Division: " + (division.toString().split('').some(c => c === ".") ? division.toFixed(3) : division) + "\n"
  )

  if (confirm("Quieres hacer otra operacion?")) {
    numbers = []
    calculator()
  }
}

calculator()