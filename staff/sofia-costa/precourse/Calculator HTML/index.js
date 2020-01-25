//_______________Variables_______________//

// Principales:

var num
var num2
var result

// Variables para los eventos "click" y "keypress":

var number = document.getElementsByClassName('num');
var input = document.getElementById('userInput');
var op = document.getElementsByClassName('op');
var key

// Para limpiar el input cada vez que se clica en una operación para que se introduzca un numero nuevo. Si es verdadero, la función get.clear() retornará el input límpio.

var isClearScreen = false

// Variable que es true se la última funcionalidade utilizada fue una operación. Para que no se repita una operación cuando se clica dos veces el el mismo botón de operación.

var wereThere = true

// Para recoger la ultima operacion realizada. Así, cuando se clica en el ultimo numero antes de clicar en = , la operación es ejecutada:

var lastOp

//_______________Funciones_______________//



// Variable con functiones para activar el evento "click" y "keypress": 

var introduce = {

    onScreen: function () {     // Para adicionar el evento a cada numero de la grilla:

        for (let i = 0 ; i < number.length; i++) {

            function add () {

                if (input.innerHTML.length < 10) {

                    get.clear();
                    isClearScreen = false;
                    wereThere = false;
                    if (number.item(i).innerHTML === '.' || number.item(i).innerHTML === ',') {
                        return input.innerHTML += number.item(i).innerHTML}
                    else {return input.innerHTML += parseFloat(number.item(i).innerHTML)}
                }
                else if (wereThere){

                    get.clear();
                    isClearScreen = false;
                    wereThere = false;
                    if (number.item(i).innerHTML === '.' || number.item(i).innerHTML === ',') {
                        return input.innerHTML += number.item(i).innerHTML}
                    else {return input.innerHTML += parseFloat(number.item(i).innerHTML)}
                }
            }

        number[i].addEventListener("click", add);

        }
    },

    onKeyPress: function () {

            key = event.key

            if (key === '.' || key === ',') {       // Para adicionar un punto:

                get.clear();
                isClearScreen = false;
                wereThere = false;                  // Registra que no han sido realizada una operación.
                return get.checkPoint()}

            else if (!isNaN(key) && input.innerHTML.length<10) {                 // Para adicionar los números:

                get.clear();
                isClearScreen = false;
                wereThere = false;
                return input.innerHTML += parseFloat(key)}

            else if (!isNaN(key) && wereThere) {

                get.clear();
                isClearScreen = false;
                wereThere = false;
                return input.innerHTML += parseFloat(key)}

            else if (key === '+' || key === '-' || key === '/' || key === '*') {  // Para que reconozca cada vez que se presiona un operador:

                for (let i = 0 ; i < op.length; i++) {
                    if (op[i].id === key) {return op[i].onclick()}
                }  
            }

            else if (key === 'Enter') { 
                
                return get.result() }        // Para mostrar el resultado con la clave de enter:  
    },

    onKeyDown: function (event) {      // Para apagar con la clave de backspace y acceder al AC directamente con la clave 'c'::

        key = event.key;

        if (key === 'Backspace') { 
            
            return get.backspace()}
        if (key === 'c') {return get.reset()}           
    }
}

// Para activar las funciones "click" y "keypress/keydown" :

document.onkeypress = introduce.onKeyPress;

document.onkeydown = introduce.onKeyDown;

introduce.onScreen();

//__________________________________________________________________




// Variable con funciones que no son operaciones:

var get = {

    // Función para coger los dos numeros que van a ser operados:

    number: function ()  { 
        if (num === undefined) {
        return num = parseFloat(input.innerHTML);
        };
        if (num !== undefined && num2 === undefined){
        return num2 = parseFloat(input.innerHTML);
        };
        if (num2 !== undefined && num !== undefined){
        num = num2;
        return num2 = parseFloat(input.innerHTML)};
    }, 

    // Función para averiguar se ya se ha utilizado un punto:

    checkPoint: function () {
        if(input.innerHTML.includes('.') === false) {input.innerHTML+='.'}
        if (input.innerHTML === undefined) {input.innerHTML+='0.'}
    },

    polarity: function () {

        wereThere ? get.clear() : ''

        if(input.innerHTML !== ''){
            input.innerHTML[0] !== '-' 
            ? input.innerHTML = '-'.concat(input.innerHTML) 
            : input.innerHTML = input.innerHTML.slice(1, input.innerHTML.length)
        } 
    },

    // Función para reset:

    reset: function() {
        input.innerHTML = '';
        num = undefined;
        num2 = undefined;
        wereThere = true;
    },

    // Para limpiar el input siempre que se clica en una operacion para se recoger el numero siguiente:

    clear: function () {
        isClearScreen ? input.innerHTML = '' : '';
        // result = undefined
    },

    backspace: function () {
        return input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length-1)
    },

    // Mostrar resultado:

    result: function () { 
        if (num === undefined) {return input.innerHTML}
        if(lastOp !== undefined && lastOp !== get.result) {lastOp();} // Recoger la ultima operacion y ejecutarla con los ultimos dos numeros.
        else if (num2 === undefined) {
            get.number();
            result = num
            isClearScreen = true
        }
        if (result.length <= 10) {
            input.innerHTML = result;
        }
        else { input.innerHTML = result.toPrecision(6)}
        
        num = undefined;
        num2 = undefined;
        lastOp = get.result;
        wereThere = false;
    },
}

//______________________________________________________



// Variable con funciones para las operaciones:

var operation = {

    // Función para sumar:

    add: function () { debugger

        lastOp = operation.add;

        if (!wereThere) {       //  Variable que registra se la última clave clicada fue una operación. Si sí, no hace nada.

            if (lastOp !== undefined && lastOp !== get.result && lastOp !== operation.add) {     // Para ejecutar la última operación clicada. Así, no pasa eso: 2+3+ (input === 5) 2- (input === 3).
                lastOp()
                lastOp = operation.add
                return }
     
            get.number();
            isClearScreen = true;
            wereThere = true;       // Para registrar que se ha realizado una operación. Así, no se repite la operación cuando se clica dos veces el el mismo botón de operación.
            
            if (num2 === undefined) {
                result = num
                return input.innerHTML = result; }

            else {
                result = num + num2;
                num2 = result
                return input.innerHTML = result;}
        }
    },

    // Función para subtrair:

    subtract: function () {

        lastOp = operation.subtract;

        if (!wereThere) {

            if (lastOp !== undefined && lastOp !== get.result && lastOp !== operation.subtract) {
                lastOp()
                lastOp = operation.subtract
                return }

            get.number();
            isClearScreen = true;
            wereThere = true;

            if (num2 === undefined) {
                result = num
                return input.innerHTML = result;}

            else {
                result = num - num2;
                num2 = result
                return input.innerHTML = result; }
            
        }
    },

    // Función para multiplicar:

    multiply: function () {

        lastOp = operation.multiply;

        if (!wereThere) {

            if (lastOp !== undefined && lastOp !== get.result && lastOp !== operation.multiply) { 
                lastOp()
                lastOp = operation.multiply 
                return }

            get.number();
            isClearScreen = true;
            wereThere = true;

            if (num2 === undefined) {result = num}
            
            else {result = num * num2;
                num2 = result}
            return input.innerHTML = result;
        }
    },

    // Función para dividir:

    divide: function () {

        lastOp = operation.divide;

        if (!wereThere) {

            if(lastOp !== undefined && lastOp !== get.result && lastOp !== operation.divide) { 
                lastOp()
                lastOp = operation.divide
                return }

            get.number();
            isClearScreen = true;
            wereThere = true;

            if(num2 === undefined) {result = num}

            else {result = num / num2;
                    num2 = result}
            return input.innerHTML = result;
        }  
    }
}
