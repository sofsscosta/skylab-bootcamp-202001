var resultado;
function getNumbers() {
  var x = prompt("Introduzca el número: "); 
  return parseFloat(x);
}
var num1Float = getNumbers(); //AFEGIM A LES VARIABLES EL VALOR DEL PROMPT
var num2Float = getNumbers();


function suma(n1, n2) {
  resultadroSuma = n1 + n2;
  return resultadroSuma;
}

function resta (n1, n2){
  resultadoResta = n1  - n2;
  return resultadoResta;
}

function multiplicacion(n1, n2){
  resultadoMulti = n1  * n2;
  return resultadoMulti;
}

function division(n1, n2){
  resultadoDivison = n1  / n2;
  return resultadoDivison.toFixed(3);
}

function opero(n1, n2){
  if(typeof num1 !== 'string' && typeof n2 !== 'string'){
  resultado = "la suma de los dos valores es: " + suma(n1, n2) + "\n" + " el resultado de la resta es: " + resta(n1, n2) +" el resultado de la multiplicacion es: " 
  + multiplicacion(n1, n2) + " el resultado de la division es: " + division(n1, n2) ;
  document.write(resultado); // IMPRIMIMOS VALORES 
  }
}

function calculadora(num1, num2) { // Number.isNaN(numero) comprobar si es NaN
  if(Number.isNaN(num1) && !Number.isNaN(num2)) {
    var raizNum2 = Math.sqrt(num2);
      document.write(raizNum2);   
    // arrel  2 num2
  } else if(!Number.isNaN(num1) && Number.isNaN(num2)) {
      var squareNum1 = Math.sqrt(num1);
      document.write(squareNum1);
     //arrel num1
  } else if(Number.isNaN(num1) && Number.isNaN(num2)) {
    alert("no has puesto numeros");
    getNumbers(); // TORNEM A CRIDAR A LA FUNCIÓ PER POSAR DOS NÚMEROS
  } else {
    opero(num1, num2);
  }
}

calculadora(num1Float, num2Float)