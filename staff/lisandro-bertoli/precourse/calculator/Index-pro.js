
var RESULTADOS = [];
var CANTIDAD_NUMEROS;
var NUMEROS;
    
    // Verifica si un valor es entero, si no lo es limita los decimales a 3.
function isInt(rawVal){ 
    if (rawVal%1===0) return rawVal;
    return Number(rawVal.toFixed(3)); //Number lo convierte a numero eliminando lo ceros extras.
}

function cuantosNumeros(){
    let number = prompt('¿Cuantos numeros ingresaras?');
    if(isNaN(Number(number))){
        number = window.alert('Solo se aceptan numeros');
        cuantosNumeros();
    } else if(Number(number) === 0){
        number = window.alert('Debes ingresar al menos un numero');
        cuantosNumeros();
    } else {
        CANTIDAD_NUMEROS = Number(number);
    }    
}

    //Toma input del usuario. Convierte los valores a Numero, o undifined si el valor resulta ser falsy
function ingresarNumeros (){
    let numbers = [];
    for (let i = 0; i < CANTIDAD_NUMEROS; i++){
        let number = prompt('Ingresar numero.')
        number = Number(number) || undefined;
        numbers.push(number);
    }
    NUMEROS = numbers;
}

    //Verifica si es es entero, o si es float establece cuantos decimales.
function isInt(rawVal){ 
    if (rawVal%1===0) return rawVal;
    return Number(rawVal.toFixed(3)); //Number lo convierte a numero eliminando lo ceros extras.
}

    //Funcion suma
function sum(){
    let res = 0;
    for (number in arguments) {
        res+= arguments[number];
    }
    return isInt(res);
}
    //Funcion resta
function rest(){
    let res = arguments[0];
    for (let i = 1; i<arguments.length; i++) {
        res-=arguments[i];
    }
    return isInt(res);
}

    //Funcion multiplicacion
function mult(){
    let res = arguments[0];
    for (let i = 1; i<arguments.length; i++) {
        res*=arguments[i];
    }
    return isInt(res);
}

    //Funcion division
function div(){
    let res = arguments[0];
    for (let i = 1; i<arguments.length; i++) {
        res/=arguments[i];
    }
    return isInt(res);
}

    // Funcion raiz cuadrada  para cuando solo se ingresa un numero
function squareRoot (val) {
    let res = Math.sqrt(val);
    RESULTADOS.push('Raiz cuadrada de ' + val + ': ' + isInt(res));

}

    //Funcion por default cuando se ingresan 2 o mas numeros
function calculadora(numbers){
    const suma = 'resultado suma: '+ sum(...numbers);
    const resta = 'resultado resta: ' + rest(...numbers);
    const multiplicacion = 'resultado multiplicacion: ' + mult(...numbers);
    const division = 'resultado division: ' + div(...numbers);
    RESULTADOS.push(suma, resta, multiplicacion, division);

}

function main(numbers){
    if(CANTIDAD_NUMEROS > 1){
        calculadora(numbers);
        console.log(RESULTADOS);
    }else {
        squareRoot(numbers);
        console.log(RESULTADOS);      
    }
}


function repeat(){
    let again = prompt('Nueva operacion: y/n');
    if(again === 'y' || again === 'yes'){
        init();
    }
    else if (again === 'n' || again === 'no'){
        RESULTADOS = [];        
        window.alert('Ok, adios.')
    }
}

    //Funcion de inicio.
function init(){
    cuantosNumeros();
    ingresarNumeros();
    main(NUMEROS);
    repeat();
}    

/** Ejecucion **/

init();





1 - agrego valores a result
2 - seteo result como display
3 - evento operation button
4 - 