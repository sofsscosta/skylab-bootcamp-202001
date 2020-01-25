//Array que almacenara los resultados
var resultado = []; 

//Se piden los numeros de entrada y se comprueban si son valores validos, si no se introduce un valor valido en la segunda variable, se calculara la raiz cuadrada del primer valor y se imprimira por consola.
var n1 = parseFloat(prompt('Ingresa el primer valor'));

    if(isNaN(n1) || n1 === '' || n1 === null) {
        console.log('El valor introducido no es valido')
    }

var n2 = parseFloat(prompt('Ingresa el segundo valor'));

    if(!isNaN(n1) & isNaN(n2) || n2 === '' || n2 === null) {
    console.log('La raiz cuadrada del primer valor es: ' + Math.sqrt(n1).toFixed(3))
    }

//Funcion calculadora
function calculadora(n1, n2) {

        function suma(n1, n2) {
            var ressuma =  n1 + n2;
            resultado.push(`${n1} + ${n2} = ${ressuma.toFixed(3)}`);
            return ressuma;
        }

        function resta(n1, n2) {
            var resresta = n1 - n2;
            resultado.push(`${n1} - ${n2} = ${resresta.toFixed(3)}`);
            return resresta;
        }

        function multi(n1, n2) {
            var resmulti = n1 * n2;
            resultado.push(`${n1} x ${n2} = ${resmulti.toFixed(3)}`);
            return resmulti;
        }

        function divi(n1, n2) {
            var resdivi = n1 / n2;
            resultado.push(`${n1} / ${n2} = ${resdivi.toFixed(3)}`);
            return resdivi;
        }

    return suma(n1, n2) + resta(n1, n2) + multi(n1, n2) + divi(n1, n2);

}


//Si el segundo valor es un numero valido, llamamos a la funcion e imprimimos el resultado por consola.
if(n2){

    calculadora(n1, n2);

    console.log(resultado);

}