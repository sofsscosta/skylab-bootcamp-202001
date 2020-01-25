/*
1. ECMAScript 5 - Transformed:
- Before let and now var
- Before template strings and now concatenation
- Before arrow functions and now regular functions

2. Make functions:
- function calculator()
- add, substract, multiplication, division
*/

var arrayresult = [];

function add(num1, num2) {
  return num1 + num2
} 

function substract(num1, num2) {
  return num1 - num2
} 

function multiplication(num1, num2) {
  return num1 * num2
} 

function division(num1, num2) {
  return  num1 / num2
}


function calculator() {
  var num1;
  var num2;

  do {
    alert("Ingresar solo números")
    num1 = prompt("Ingrese un número")
    num2 = prompt("Ingrese otro número")

    // If is number, transform from string to number. If is empty let it equal.
    if (num1.length > 0) num1 = Number(num1)
    if (num2.length > 0) num2 = Number(num2)

    if (num1.length === 0 && num2.length === 0) {
      alert("Ingresa al menos un numero")
      num1 = NaN
    }

  } while (isNaN(num1) || isNaN(num2) )


  // If only put a number and let empty the other ---> square root
  if (typeof num1 === "string" || typeof num2 === "string") {
    var num; 

    if (num1) {
      num = num1
    } else {
      num = num2
    }

    var sqrt = Math.sqrt(num)
    
    arrayresult.push("La raiz cuadrada de " + num + " es: " + 
    (sqrt.toString().split('').some(c => c === ".") ? sqrt.toFixed(2) : sqrt)
    )
  }

  // If both are numbers...
  if (typeof num1 === "number" && typeof num2 === "number") {
    let divi = division(num1, num2)
    
    arrayresult.push(
      num1 + " + " + num2 + " = " + add(num1, num2),
      num1 + " - " + num2 + " = " + substract(num1, num2),
      num1 + " * " + num2 + " = " + multiplication(num1, num2),
      num1 + " / " + num2 + " = " + (divi.toString().split('').some(c => c === ".") ? divi.toFixed(2) : divi)
    )
  }
  
}

calculator()
console.log(arrayresult)