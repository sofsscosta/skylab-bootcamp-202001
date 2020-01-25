
// En primer lugar declaro las variables de operaciones
var opera1;
var opera2;

// variables para teclas de la calculadora
var uno = document.getElementById('one');
var result = document.getElementById('displayNum');
var allClear = document.getElementById('ac');
var clear = document.getElementById('cl');
var suma = document.getElementById('sum');
var resta = document.getElementById('res');
var multiplica = document.getElementById('mul');
var divide = document.getElementById('div');
var igual = document.getElementById('equal');
var punto = document.getElementById('dot');
var dos = document.getElementById('two');
var tres = document.getElementById('three');
var cuatro = document.getElementById('four');
var cinco = document.getElementById('five');
var seis = document.getElementById('six');
var siete = document.getElementById('seven');
var ocho = document.getElementById('eight');
var nueve = document.getElementById('nine');
var cero = document.getElementById('zero');

// funciones relacionadas con los eventos de los botones de la calculadora

uno.onclick = function(event) {
    result.value = result.value += "1";
}

dos.onclick = function(event) {
    result.value = result.value += "2";
}

tres.onclick = function(event) {
    result.value = result.value += "3";
}

cuatro.onclick = function(event) {
    result.value = result.value += "4";
}

cinco.onclick = function(event) {
    result.value = result.value += "5";
}

seis.onclick = function(event) {
    result.value = result.value += "6";
}

siete.onclick = function(event) {
    result.value = result.value += "7";
}

ocho.onclick = function(event) {
    result.value = result.value += "8";
};

nueve.onclick = function(event) {
    result.value = result.value += "9";
};

cero.onclick = function(event) {
    result.value = result.value += "0";
};

punto.onclick = function(event) {
    result.value = result.value += "."
};

allClear.onclick = function(event) {
    borrar();
};

clear.onclick = function(event) {
    result.value = result.value.slice(0, -1);
};

suma.onclick = function(event) {
    opera1= result.value;
    calculo = "+";
    limpiar();
};

resta.onclick = function(event) {
    opera1= result.value;
    calculo = "-";
    limpiar();
};

multiplica.onclick = function(event) {
    opera1= result.value;
    calculo = "*";
    limpiar();
};

divide.onclick = function(event) {
    opera1= result.value;
    calculo = "/";
    limpiar();
};

igual.onclick = function(event) {
    opera2= result.value;
    resolver();
};

function limpiar() {
    result.value = "";
};

function borrar() {
    result.value = "";
    opera1= 0;
    opera2= 0;
    calculo = "";
};

function resolver() {
    respuesta = 0;
    switch (calculo) {
        case "+": 
            respuesta = parseFloat(opera1) + parseFloat(opera2);
        break;
        case "-":
            respuesta = parseFloat(opera1) - parseFloat(opera2);
        break;
        case "*":
            respuesta = parseFloat(opera1) * parseFloat(opera2);
        break;
        case "/":
            respuesta = parseFloat(opera1) / parseFloat(opera2);
        break;        
    };
    result.value = respuesta;
};
