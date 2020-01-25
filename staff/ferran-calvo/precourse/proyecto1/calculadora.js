let historialOperaciones = [];
let vecesOperacion = 0;

function suma(numeros){
    let resultadoSuma = numeros[0];
    let stringResultado = numeros[0].toString();
    for (i=1; i < numeros.length; i++){
        resultadoSuma += numeros[i];
        stringResultado += `+${numeros[i]}`;
    }
    stringResultado += `= ${numeroDecimales(resultadoSuma)}`;
    return stringResultado;
}
function resta(numeros){
    let resultadoResta = numeros[0];
    let stringResultado = numeros[0].toString();
    for (i=1; i < numeros.length; i++){
        resultadoResta -= numeros[i];
        stringResultado += `-${numeros[i]}`;
    }
    stringResultado += `= ${numeroDecimales(resultadoResta)}`;
    return stringResultado;
}
function multiplicacion(numeros){
    let resultadoMultiplicacion = numeros[0];
    let stringResultado = numeros[0].toString();
    for (i=1; i < numeros.length; i++){
        resultadoMultiplicacion *= numeros[i];
        stringResultado += `*${numeros[i]}`;
    }
    stringResultado += `= ${numeroDecimales(resultadoMultiplicacion)}`;
    return stringResultado;
}
function division(numeros){
    let resultadoDivision = numeros[0];
    let stringResultado = numeros[0].toString();
    for (i=1; i < numeros.length; i++){
        resultadoDivision /= numeros[i];
        stringResultado += `/${numeros[i]}`;
    }
    stringResultado += `= ${numeroDecimales(resultadoDivision)}`;
    return stringResultado;
}
function nuevaOperacion(){
    let pregunta = prompt("¿Desea realizar una operación? y/n");
    if (pregunta.toLowerCase() == "y"){
        let numerosOperacion = prompt("Introducir los números separados por una coma.")
        let listaNumeros = numerosOperacion.split(",");
        for (i=0; i<listaNumeros.length ; i++){
            listaNumeros[i] = parseFloat(listaNumeros[i]);
        }
        if (listaNumeros.length > 1){
            calculadora(listaNumeros);
        }
        else{
            vecesOperacion += 1;
            let raizCuadrada = Math.sqrt(listaNumeros[0]);
            let info = [`NumeroOperacion: ${vecesOperacion}, sqrt(${listaNumeros[0]}) = ${numeroDecimales(raizCuadrada)}`]
            console.log(info);
            historialOperaciones.push(info);
            nuevaOperacion();
        }
    }
    if (pregunta.toLowerCase() == "n"){
        console.log("Bye");
    }
}
function calculadora (num){
    vecesOperacion += 1;
    let operacion = [`NumeroOperacion: ${vecesOperacion}`, `Suma: ${suma(num)}`, `Resta: ${resta(num)}`, `Multiplicacion: ${multiplicacion(num)}`, `Division:  ${division(num)}`]; 
    console.log(operacion);
    historialOperaciones.push(operacion)
    nuevaOperacion();
}
function numeroDecimales(n){
    if (Number.isInteger(n)){
        return n;
    }else{
        return parseFloat(n.toFixed(3))
    }
}
var nombre = prompt("Por favor introduce tu nombre");
console.log("Bienvenido " + nombre);
nuevaOperacion();