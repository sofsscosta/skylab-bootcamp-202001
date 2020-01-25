/* 
    Esta función suma dos parametros.
    Valida si el resultado de la suma es un entero.
    Si no es un entero, solo muestra 3 dígitos del decimal.
*/
function suma(param1,param2){
    var suma=parseFloat(param1)+parseFloat(param2);
    if (Number.isInteger(suma)){
        return (param1 + ' + '+ param2 +' = '+ suma);
    }else{
        return (param1 + ' + '+ param1 +' = '+ suma.toFixed(3));
    }
};
/* 
    Esta función resta dos parametros.
    Valida si el resultado de la resta es un entero.
    Si no es un entero, solo muestra 3 dígitos del decimal.
*/
function resta(param1,param2){
    var resta=parseFloat(param1)-parseFloat(param2);
    if(Number.isInteger(resta)){
        return (param1 + ' - '+ param2 +' = '+ resta);
    }else{
        return (param1 + ' - '+ param2 +' = '+ resta.toFixed(3));
    }
};
/* 
    Esta función multiplica dos parametros.
    Valida si el resultado de la multiplicacion es un entero.
    Si no es un entero, solo muestra 3 dígitos del decimal.
*/
function multiplicacion(param1,param2){
    var multiplicacion=parseFloat(param1)*parseFloat(param2);
    if((Number.isInteger(multiplicacion))){
        return (param1 + ' x '+ param2 +' = '+ multiplicacion);
    }else{
        return (param1 + ' x '+ param2 +' = '+ multiplicacion.toFixed(3));
    }
};
/* 
    Esta función divide dos parametros.
    Valida si el resultado de la multiplicacion es un entero.
    Si no es un entero, solo muestra 3 dígitos del decimal.
*/
function division(param1,param2){
    var division=parseFloat(param1)/parseFloat(param2);;
    if(Number.isInteger(division)){
        return (param1 + ' / '+ param2 +' = '+ division);
    }else{
        return (param1 + ' / '+ param2 +' = '+ division.toFixed(3));
    }
};
/*  
    Esta función realiza lo siguiente:
    Comprueba que no se han dejado números sin introducir.
    Comprueba si solamente se ha introducido un número.
    Si solo se introduce un número saca por pantalla la raiz cuadrada del número introducido.    
    Comprueba si los datos introducidos por el usuario son números.
    Si los datos son números los introduce en la array "resultado".
    Si no son números lanza el mensaje de que alguno de los datos no es un número.
*/

const resultado=[];


function calculator(){
    var param1=prompt('Introduzca un número');
    var param2=prompt('Introduzca un número');
    
    if(param1===''){
        param1=undefined;
    };
        if(param2===''){
        param2=undefined;
    };
    
    if(typeof param1==='undefined' && typeof param2!='undefined' ){
         alert(`La raiz cuadrada de ${param2} es ${Math.sqrt(param2).toFixed(3)}`);
    }else if(typeof param2==='undefined' && typeof param1!='undefined' ){
        alert(`La raiz cuadrada de ${param1} es ${Math.sqrt(param1).toFixed(3)}`);
    }else{
        if (isNaN(param1)===false && isNaN(param2)===false){
            resultado.push(suma(param1,param2),resta(param1,param2),multiplicacion(param1,param2),division(param1,param2));
        }else{
          alert('Alguno de los datos introducidos no es un número');                                  
        }
    }
};
/*
    Invocamos a la funcion calculator.
    Si el array tiene elementos, mostramos el resultado con un alert.
*/
calculator();
if(resultado.length>0){
alert(`Resultado: \n${resultado[0]}\n${resultado[1]}\n${resultado[2]}\n${resultado[3]}\n`);
};








