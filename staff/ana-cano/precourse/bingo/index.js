// Definicion variables globales
let turno = 0;
let cantadoBingo = false;
// TURNOS
function generarCartonBingo() {
    return [
        { numero: getRandomNumber(1, 21), matched: false },
        { numero: getRandomNumber(20, 41), matched: false },
        { numero: getRandomNumber(40, 61), matched: false },
        { numero: getRandomNumber(60, 81), matched: false },
        { numero: getRandomNumber(80, 101), matched: false }
    ]

}

// Cartón Bingo
let cartonBingo = generarCartonBingo();

// FUNCIONES AYUDA

//Números aleatorios cartón
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//Función nuevo Turno
function nuevoTurno(param) {
    for (let i = 0; i < cartonBingo.length; i++) {
        if (cartonBingo[i].numero === param) {
            alert('Felicidades tu número ' + param + 'está en el cartón.¡¡Y vamos para BINGO!!')
            cartonBingo[i].numero = "X";
            cartonBingo[i].matched = true;
        }
    }
}

//Función imprimer bingo
let imprimirBingo = () => {
    let myCartonString = ' ';
    Object.keys(cartonBingo).forEach(key => {
        if (key != 0 && key % 5 === 0) { myCartonString = myCartonString + '\n'; }
        myCartonString = myCartonString + cartonBingo[key].numero + '          ';
    });
    alert(myCartonString);
}

// Preguntar nuevo turno
function seguirJugando() {
    let confirmJuego = confirm('¿Quieres seguir jugando?')
    if (confirmJuego == true) {
        turno++;
        let bombo = Math.round(Math.random() * 99);
        alert('El número elegido és el ' + bombo)
        nuevoTurno(bombo);
        if (comprobarBingo() === true) 
        {
           alert("BINGOOO Felicidades")
        }
        imprimirBingo();
    } else {
        alert('¡Abandonas cerca de ser ganador! Ciao :)')
    }
}


// Función cambiar cartón
// NO ENTIENDO COMO TENGO QUE CAMBIAR EL CARTÓN, SIEMPRE ME SALE MISMO Y EN TEORÍA ES RANDOM
function cambiarCarton() {
    let cambioCarton = confirm("Quieres este cartón o lo cambiamos?");
    if (cambioCarton == true) {
        alert('¡¡Pues juguemos!!');
        let bombo = Math.round(Math.random() * 100);
        alert('El número elegido és el ' + bombo);
        turno++;
        nuevoTurno(bombo);
        imprimirBingo();
    } else {
        alert('Ahora mismo te mostraré otro cartón');
        cartonBingo = generarCartonBingo();
        imprimirBingo();
        cambiarCarton()
    }
}

// Si todos son X
function comprobarBingo() {
    let checkBingo = true;
    Object.keys(cartonBingo).forEach(key => {
        if (cartonBingo[key].matched === false) {
            checkBingo = false;
        }
    });
    return checkBingo;
}





// INICIO BINGO
let nameGamer = prompt('¡Bienvenid@ a Bingo Game!¿Cómo te llamas?');
alert('A continuación vamos a mostrarte el cartón de BINGO');
imprimirBingo();
cambiarCarton();
do {
    seguirJugando();
    cantadoBingo = comprobarBingo();
} while (cantadoBingo === false );
alert ('El número de turnos jugados és' + turno);


