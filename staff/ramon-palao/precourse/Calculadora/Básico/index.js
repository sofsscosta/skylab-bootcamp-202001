// Array en el que iremos introduciendo las operaciones matemáticas mediante un push.
var results = [];

// Función de Suma. Aplicamos una sentencia condicional para que, cuando el resultado sea decimal, muestre como máximo 3 decimales. Introducimos el resultado en el Array inicial.
const suma = (num1, num2) =>{
  var resultSuma = num1 + num2;
  if(Number.isInteger(resultSuma) === false){
    results.push(`${num1} + ${num2} = ${resultSuma.toFixed(3)}`);
    return results
  } else {
    results.push(`${num1} + ${num2} = ${resultSuma}`);
    return results;
  }
}

// Función de Resta. Aplicamos una sentencia condicional para que, cuando el resultado sea decimal, muestre como máximo 3 decimales. Introducimos el resultado en el Array inicial. 
const resta = (num1, num2) =>{
  var resultResta = num1 - num2;
  if (Number.isInteger(resultResta) === false){
    results.push(`${num1} - ${num2} = ${resultResta.toFixed(3)}`);
    return results;
  } else {
    results.push(`${num1} - ${num2} = ${resultResta}`);
    return results;
  }
}

// Función de Multiplicación. Aplicamos una sentencia condicional para que, cuando el resultado sea decimal, muestre como máximo 3 decimales. Introducimos el resultado en el Array inicial.
const multi = (num1, num2) =>{
  var resultMulti = num1 * num2;
  if(Number.isInteger(resultMulti) === false){
    results.push(`${num1} * ${num2} = ${resultMulti.toFixed(3)}`);
    return results;
  } else {
    results.push(`${num1} * ${num2} = ${resultMulti}`);
    return results;
  }
}

// Función de División. Aplicamos una sentencia condicional para que, cuando el resultado sea decimal, muestre como máximo 3 decimales. Introducimos el resultado en el Array inicial.
const division = (num1, num2) =>{
  var resultDivision = num1 / num2;
  if(Number.isInteger(resultDivision) === false){
    results.push(`${num1} / ${num2} = ${resultDivision.toFixed(3)}`);
    return results;
  } else {
    results.push(`${num1} / ${num2} = ${resultDivision}`);
    return results;
  }
}

// Función de Raíz Cuadrada. Pasamos únicamente un parámetro y, al igual que en las anteriores funciones, aplicamos una sentencia condicional para que, cuando el resultado sea decimal, muestre como máximo 3 decimales. Introducimos el resultado en el Array inicial.
const raiz = (num1) =>{
  var resultRaiz = Math.sqrt(num1);
  if (Number.isInteger(resultRaiz) === false){
    return `La raíz cuadrada de ${num1} es ${resultRaiz.toFixed(3)}`;
  } else {
    return `La raíz cuadrada de ${num1} es ${resultRaiz}`;
  }
}

// Función de la Calculadora. 
const calculadora = (num1, num2) =>{
  // Si llamamos a la función sin introducir ningún argumento la consola nos pedirá que introduzcamos números.
  if (num1 === undefined){
    console.log("Introduce números");
 // Si alguno de los argumentos introducidos no es un número, o es una cadena de caracteres la consola indicará que los valores son incorrectos.
  } else if (isNaN(num1) === true || num1 === "" || typeof(num2) === "string"){
    console.log("Valor introducido incorrecto!");
 // Si sólo introducimos un número como argumento invocaremos la función de Raíz Cuadrada.
  } else if (num2 === undefined){
    console.log(raiz(num1));
 // Si introducimos dos números como argumentos invocaremos las funciones matemáticas que se reflejarán dentro del Array results. 
  } else {
    suma(num1, num2);
    resta(num1, num2);
    multi(num1, num2);
    division(num1, num2);
    console.log(results);
  }
}
calculadora();








