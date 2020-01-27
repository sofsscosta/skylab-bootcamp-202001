alert("Bienvenidos a Skylab's Calculator Pro");

var arrNumbers = [];
var number;

visor();

function visor() {

    number = prompt("Inserte valores númericos para operar con ellos, al finalizar escriba FIN");
    verify(number);

};

function verify(data) {

    if (data === 'FIN') {
        calculator()
    } else if (isNaN(data) || data === '') {
        number = prompt("Por favor, introduce un número válido. Al finalizar escriba FIN");
        verify(number);
    } else if (data === null) {
        var exit = confirm("Quieres salir del ejercicio?")

        if (exit) {
            theEnd();
        } else {
            visor();
        }

    } else {
        arrNumbers.push(parseFloat(data))
        visor();
    }

};

var sqrn;

function calculator() {

    if (arrNumbers.length === 1) {
        var sqrn = Math.sqrt(arrNumbers[0]).toFixed(3);
        console.log(`La raíz cuadrada de ${arrNumbers[0]} es: ${sqrn}`);

        newOp ()

    } else {

        var accSum = 0;
        var accRest = 0;
        var accMult = 0;
        var accDiv = 0;

        for (var i = 0; i < arrNumbers.length; i++) {
            if (!i) {
                accSum = arrNumbers[0];
                accRest = arrNumbers[0];
                accMult = arrNumbers[0];
                accDiv = arrNumbers[0];
            } else {
                accSum += arrNumbers[i];
                accRest -= arrNumbers[i];
                accMult *= arrNumbers[i];
                accDiv /= arrNumbers[i];
            }


        }

        print(accSum.toFixed(3), accRest.toFixed(3), accMult.toFixed(3), accDiv.toFixed(3));

    }

};

function print(suma, resta, mult, div) {

    if (arrNumbers.length > 1) {

        console.log(`Los resultados son: ${suma}, ${resta}, ${mult} y ${div}`);

    }
    newOp ()
};

function reset() {
    arrNumbers = [];
    number;
    sqrn;
}

function theEnd() {
    alert("Hasta la vista, Baby!");
    console.log("No se muestran resultados");
}

function newOp () {
    var exit2 = confirm("Quieres hacer otra operacion?");

        if (!exit2) {
            theEnd();
        } else {
            reset();
            visor();
        }
}