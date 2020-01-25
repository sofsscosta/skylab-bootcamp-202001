var resultado = [];
var memoria = [];


function cutDec(num) {
    if(Number.isInteger(num)){
        return num;
    } else {
        return num.toFixed(3);
    }
}


function getNumbers() {
    memoria.push(parseFloat(prompt('Ingresa un valor')));
    var getMoreNumbers = confirm('Mas numeros?');
    if(getMoreNumbers) {
        getNumbers();
    } else {
        calc(memoria);
    }
}


function calc() {
    var rsum = 0, rres = 0, rmulti = 1, rdivi = 0;
    for(var i = 0; i < memoria.length; i++) {
        if(isNaN(memoria[i])) {
            console.log('Introduzca valores numericos');
            alert('Introduzca valores numericos');
            reiniciar();
        } else if(memoria.length < 2) {
            console.log('La raiz cuadrada del primer valor es: ' + cutDec(Math.sqrt(memoria[0])))
            alert('La raiz cuadrada del primer valor es: ' + cutDec(Math.sqrt(memoria[0])))
            reiniciar();
        }else {
            for(var i in memoria){
                rsum += memoria[i];
                resultado[0] = `Suma = ${cutDec(rsum)}`;

                rmulti *= memoria[i]
                resultado[2] = `Multiplicacion = ${cutDec(rmulti)}`;

                if (i === '0'){
                    rres = memoria[i]
                    rdivi = memoria[i]
                } else {
                    rres -= memoria[i]
                    rdivi /= memoria[i]
                }

                resultado[1] = `Resta = ${cutDec(rres)}`;
                resultado[3] = `Division = ${cutDec(rdivi)}`;
            }

            console.log('Los resultados son: \n' + resultado[0] + '\n' + resultado[1] + '\n' + resultado[2] + '\n' + resultado[3]);
            alert('Los resultados son: \n' + resultado[0] + '\n' + resultado[1] + '\n' + resultado[2] + '\n' + resultado[3]);
            reiniciar();
        }
    }
}


function reiniciar() {
    var reinicio = confirm('Reiniciar?');
        switch(reinicio) {
            case true:
                resultado = [];
                memoria = [];
                getNumbers();
                break;
            case false:
                alert('Bye');
                break;
        }   
}


getNumbers();

/* ME PRODUCE UN ERROR CUANDO ESTA COMPROBANDO SI LOS DATOS INTRODUCIDOS SON NUMEROS, 
SI EL PRIMER NUMERO QUE INTRODUZCO NO ES UN NUMERO TODO FUNCIONA CORRECTAMENTE Y ME
DA EL AVISO DE QUE NO LO ES, PERO SI EL PRIMER VALOR ES UN NUMERO Y ALGUNO DE LOS DEMAS
NO LO ES, PASA DIRECTAMENTE A HACER LAS CUENTAS CON EL VALOR NO NUMERICO */