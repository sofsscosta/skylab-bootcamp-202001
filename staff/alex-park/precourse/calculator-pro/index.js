/* REQUISITOS BÁSICOS:
- La calculadora realizará tantas operaciones como parámetros (números) se le añada.
- Se visualizarán suma, resta, multiplicación, división, en ese orden.
- Los resultados se mostrarán en un array.
- Si se pone sólo 1 parámetro, se mostrará la raíz cuadrada del número.
- Al finalizar, el programa debe volver a preguntar de añadir argumentos/números.
- Si hay números decimales, no deben ser más de 3.
*/

////////////////////////////////////////////////////////////////////

//Código que recoge el prompt y el tratado de strings a números 

var question0 = prompt("¿Deseas usar la calculadora? Escribe 'y' si es que sí o 'n' si deseas salir.");

function calculator() {
    var question1 = prompt("Para usar la calculadora, anote los números que desee sumar/restar/multiplicar/dividir, " +
        "separados por una coma y sin espacios. En caso de decimales, anote sólo 3 y separados " +
        "por un punto. Por ejemplo: 3,6,10,52.34. Tampoco debes poner un cero a menos que sea " +
        "en la primera posición, ya que la división no tendría sentido.");
    const extractedNumbers = question1.split(","); //Se eliminan las comas
    const parsedNumbers = extractedNumbers.map(function (num) { return parseInt(num) }) //Se crea un array transformando los strings en números.
    let isValidArray = true; //Nuestro interruptor para las condiciones.
    for (let i = 0; i < parsedNumbers.length; i++) {
        const current = parsedNumbers[i];
        if (isNaN(current)) { //Si la persona no ha escrito bien un número, el array tendrá algún NaN
            isValidArray = false; //Para redirigir el código hacia los errores
        }
    }
    var hasZero = false;

    function sum() { //Función suma
        var res1 = 0;
        for (let i = 0; i < parsedNumbers.length; i++) {
            res1 += parsedNumbers[i];
        }
        return parseFloat(res1.toFixed(3));
    }

    function sub() { //Función resta
        var res2 = parsedNumbers[0];
        for (let i = 1; i < parsedNumbers.length; i++) {
            res2 -= parsedNumbers[i];
        }
        return parseFloat(res2.toFixed(3));
    }

    function mult() { //Función producto
        var res3 = parsedNumbers[0];
        for (let i = 1; i < parsedNumbers.length; i++) {
            res3 *= parsedNumbers[i];
        }
        return parseFloat(res3.toFixed(3));
    }

    function div() { //Función división
        var res4 = parsedNumbers[0];
        for (let i = 1; i < parsedNumbers.length; i++) {
            res4 /= parsedNumbers[i];
        }
        return parseFloat(res4.toFixed(3));
    }

    for (let i = 1; i < parsedNumbers.length; i++) {
        if (parsedNumbers[i] === 0) {
            hasZero = true;
        }
    }

    if (hasZero === true) {
        alert("No es posible realizar la división si hay un 0 en la lista. Por favor, " +
            "sigue las instrucciones de forma precisa.");
        checkWhatToDo(question0);
    } else if (parsedNumbers.length === 0 || isValidArray === false) { //En caso de que la persona no ponga los valores bien
        alert("No has introducido los números correctamente. Por favor, sigue las instrucciones de manera precisa.");
        checkWhatToDo(question0);
    } else if (parsedNumbers.length === 1) {  //En caso de que introduzca un 1, hacer raíz  
        var resSqrt = Math.sqrt(question1);
        var res5 = parseFloat(resSqrt.toFixed(3));
        if (question1 >= 0) {
            alert(`La raíz quadrada del número introducido es: ${res5}.`);
            question0 = prompt('¿Deseas volver a usar la calculadora? Introduce y/n como antes:');
            checkWhatToDo(question0);
        } else {
            alert('La raíz cuadrada sólo está definida para números igual o mayores a 0. Por favor, introduce otro número.')
            question0 = prompt("¿Deseas volar a usar la calculadora? Escribe 'y' si es que sí o 'n' si deseas salir.");
            checkWhatToDo(question0);
        }
    } else {
        const sumResult = sum(parsedNumbers);
        const subtractResult = sub(parsedNumbers);
        const multResult = mult(parsedNumbers);
        const divResult = div(parsedNumbers);
        const results = [sumResult, subtractResult, multResult, divResult];

        alert(`La suma,resta, mult. y div. de los números (en ese orden) dan los siguientes resultados: ${results}.`);
        question0 = prompt('¿Deseas volver a usar la calculadora? Introduce y/n como antes:');
        checkWhatToDo(question0);
    }
}

function checkWhatToDo(answer) {
    if (answer === 'y') {
        calculator();
    } else if (answer === 'n') {
        alert("¡Que tengas un buen día!");
    } else {
        question0 = prompt("No has introducido un carácter correcto. Por favor, introduce 'y' o 'n'.")
        checkWhatToDo(question0);
    };
}

checkWhatToDo(question0);

