/** Variables Globales **/

var RESULTADOS = [];
var PRIMER_NUMERO = ingresarNumeros();
var SEGUNDO_NUMERO = ingresarNumeros();

/** Funciones **/

    //Toma input del usuario. Convierte los valores a numero o undifined si el valor resulta ser falsy
function ingresarNumeros (){
    let number = prompt('Ingresar numero.')
    number = Number(number) || undefined;
    return number;
}

    // Verifica si un valor es entero, si no lo es limita los decimales a 3.
function isInt(rawVal){ 
    if (rawVal%1===0) return rawVal;
    return Number(rawVal.toFixed(3)); //Number lo convierte a numero eliminando lo ceros extras.
}

    //Funcion suma
function sum(val1, val2){
    let res = val1+val2;
    return isInt(res);
}

    //Funcion resta
function rest(val1, val2){
    let res = val1-val2;
    return isInt(res);
}

    //Funcion multiplicacion
function mult(val1, val2){
    let res = val1*val2;
    return isInt(res);
}

    //Funcion division
function div(val1, val2){
    let res = val1/val2;
    return isInt(res);
}

    // Funcion raiz cuadradda  para cuando solo se ingresa un valor
function squareRoot (val) {
    let res = Math.sqrt(val);
    RESULTADOS.push('Raiz cuadrada: ' + isInt(res));

}

    //Funcion por default cuando se ingresan ambos numeros.
function calculadora(n1, n2){
    const suma = 'resultado suma: '+ sum(n1,n2);
    const resta = 'resultado resta: ' + rest(n1,n2);
    const multiplicacion = 'resultado multiplicacion: ' + mult(n1, n2);
    const division = 'resultado division: ' + div(n1, n2);
    RESULTADOS.push(suma, resta, multiplicacion, division);

}

    //Funcion que se encarga de la logica
function main(num1, num2){
    if(num1 && num2 ){
        calculadora(num1, num2);
        console.log(RESULTADOS);
    }else if (num1 && num2 === undefined){
        squareRoot(num1);
        console.log(RESULTADOS);      
    }else{
        window.alert('Los valores ingresados deben ser numeros.');
        var PRIMER_NUMERO = ingresarNumeros();
        var SEGUNDO_NUMERO = ingresarNumeros();
        main(PRIMER_NUMERO, SEGUNDO_NUMERO);
    }
}    

/** Ejecucion **/

main(PRIMER_NUMERO, SEGUNDO_NUMERO)