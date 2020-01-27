/* 
    suma(), suma todos los parametros del array.
    Valida si el resultado de la suma es un entero.
    Si no es un entero, retorna el resultado con 3 decimales.
*/
function suma(arrayNumeros){
    var oper=0;
    for (i in arrayNumeros){
        oper+=arrayNumeros[i];
    };
    if(Number.isInteger(oper)){
        return oper;
    }else{
        return oper.toFixed(3);
    }
};
   
/* 
    resta(), resta todos los parametros del array.
    Para que el bucle empiece por arrayNumeros[0] y no por 0, tengo que igualar oper a arrayNumeros[0]
    Valida si el resultado de la resta es un entero.
    Si no es un entero, retorna el resultado de la resta con un máximo de 3 decimales.
*/
function resta(arrayNumeros){
    var oper=0;
    for (i in arrayNumeros){
        if(i==="0"){
            oper=arrayNumeros[i];
        }else{
            oper-=arrayNumeros[i];
        }
    };
    if(Number.isInteger(oper)){
        return oper;
    }else{
        return oper.toFixed(3);
    }
};

/* 
    multiplicacion(), multiplica todos los parametros del array.
    Oper=1, para inicializar la operacion, si oper=0 todas las operaciones me darían 0.
    Valida si el resultado de la multiplicación es un entero.
    Si no es un entero, retorna el resultado con 3 decimales.
*/
function multiplicacion(arrayNumeros){
    var oper=1;
    for (i in arrayNumeros){
       oper*=arrayNumeros[i]
    };
    if(Number.isInteger(oper)){
        return oper;
    }else{
        return oper.toFixed(3);
    }
};

/* 
    division(), divide todos los parametros de la array.
    En la primera iteración  oper=arrayNumeros[0], para que en la segunda iteración pueda dividir arrayNumeros[0]/arrayNumeros[1]
    Valida si el resultado de la división es un entero.
    Si no es un entero,retorna el resultado con 3 decimales.
*/
function division(arrayNumeros){
    var oper=0;
    for (i in arrayNumeros){
        if(i==='0'){
          oper=arrayNumeros[i]  
        }else{
            oper/=arrayNumeros[i]
        }
    };
    if(Number.isInteger(oper)){
        return oper;
    }else{
        return oper.toFixed(3);
    }
};

//pedirNumeros(), se encarga de la captación de los números introducidos por el usuario e introducirlos en el array addNumeros 

var addNumeros=[];
const resultado=[];

function pedirNumeros(){
    var num = prompt('Introduzca un número');
    if(num!=''){
        if(isNaN(num)===false){
            addNumeros.push(parseFloat(num));            
            var resp=confirm ('¿Desea introducir mas números?')  
            switch(resp){
                case true:
                    pedirNumeros();
                    break;
                case false:
                    calculator(addNumeros);
                    break;
                default:
                    pedirNumeros();
                    break;
            };
        }else{
            alert('el dato introducido no es un número');
            pedirNumeros();
        }
    }else{
        alert('Se necesita un número');
        pedirNumeros();
    };
}; 
pedirNumeros();

/*
    calculator(), realiza las operaciones con los números introducidos por el usuario y si el usuario quiere hacer más operaciones
    vuelve a invocar pedirNumeros()para repetir el proceso sino dice 'bye'.
*/

function calculator(numeros){
    resultado.push(suma(numeros),resta(numeros),multiplicacion(numeros),division(numeros)); 
    alert(`Resultados:\n Suma=${suma(numeros)}\n Resta=${resta(numeros)}\n Multiplicación=${multiplicacion(numeros)}\n División=${division(numeros)}`)
    var masOper=confirm(('Desea hacer mas operaciones'));  
     switch(masOper){
         case true:
             addNumeros=[];
             pedirNumeros();
             break;
         case false:
             alert('bye');
             break;    
     }   
};




