// Definicion variables globales
let turno = 0;
let cantadoBingo = false;
let cantandoLinea = false;
let puntos = 100;
let ranking = [];
let numerosCantados=[];
let numeroCantado = 0;
let seguirJugando = true;
let puntua = true;

// TURNOS
function generarCarton() {
    return [
        { number: getRandomNumber(1, 21), matched: false },
        { number: getRandomNumber(20, 41), matched: false },
        { number: getRandomNumber(40, 61), matched: false },
        { number: getRandomNumber(60, 81), matched: false },
        { number: getRandomNumber(80, 99), matched: false },
        { number: getRandomNumber(1, 21), matched: false },
        { number: getRandomNumber(20, 41), matched: false },
        { number: getRandomNumber(40, 61), matched: false },
        { number: getRandomNumber(60, 81), matched: false },
        { number: getRandomNumber(80, 99), matched: false },
        { number: getRandomNumber(1, 21), matched: false },
        { number: getRandomNumber(20, 41), matched: false },
        { number: getRandomNumber(40, 61), matched: false },
        { number: getRandomNumber(60, 81), matched: false },
        { number: getRandomNumber(80, 99), matched: false }
    ]

}

// Cartón Bingo
let carton = generarCarton();

// FUNCIONES AYUDA

//Números aleatorios cartón
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Función Bombo
function generarNumeroAleatorio(){
    let numeroAleatorio = 0;
    let numeroAleatorioOk = false;

    numeroAleatorio = getRandomNumber(1,99);
    
    do {
        // Comprobamos que numero aleatorio no este en numeros cantados
        if (numerosCantados.indexOf(numeroAleatorio)==-1) {
            numerosCantados.push(numeroAleatorio);
            numeroAleatorioOk = true;
        } else 
        {
            numeroAleatorio = getRandomNumber(1,99);
        }
    } while (numeroAleatorioOk === false);
    
    return numeroAleatorio;
}


//Función nuevo Turno
function comprobarNumeroAleatorioEnCarton(param) {
    var cartonLength = carton.length;
    for (let i = 0; i < cartonLength; i++) {
        if (carton[i].number === param) {
            alert('Felicidades tu número ' + param + ' está en el cartón.¡¡Y vamos para BINGO!!')
            carton[i].number = "X";
            carton[i].matched = true;
        }
    }
}


// Función imprimir ranking
function imprimirBingo() {
    let myCartonString = ' ';
    for (let i = 0; i < carton.length; i++) {
        if (i != 0 && i % 5 === 0) { myCartonString = myCartonString + '\n'; }
        myCartonString = myCartonString + carton[i].number + '          ';
    };
    alert(myCartonString);
}
// Función cambiar cartón
function visualizarCarton() {
    let cambioCarton = false;
    carton = generarCarton();
    imprimirBingo();
    do {
        cambioCarton = confirm("Quieres este cartón o lo cambiamos?");

        if (cambioCarton === false) {
            alert('Ahora mismo te mostraré otro cartón');
            carton = generarCarton();
            imprimirBingo();
        }
    } while (cambioCarton === false)
}

// Si todos son X
function comprobarBingo() {
    let checkBingo = true;
    for (let i = 0; i < carton.length; i++) {
        if (carton[i].matched === false) {
            checkBingo = false;
        }
    };
    if (checkBingo) { alert ("Felicidades!! Has hecho bingo.") };
    return checkBingo;
}

// Línea
function comprobarLinea (){
    if ((carton[0].matched == true && carton[1].matched == true && carton[2].matched == true && carton[3].matched == true && carton[4].matched == true) || (carton[5].matched == true && carton[6].matched == true && carton[7].matched == true && carton[8].matched == true && carton[9].matched == true) || (carton[10].matched == true && carton[11].matched == true && carton[12].matched == true && carton[13].matched == true && carton[14].matched == true)) {
        cantandoLinea = true;
        alert ("Felicidades!!! Has hecho linea.")
    }
}

function generarRanking() {
    puntos = 100 - turno;
    ranking.push(nameGamer);
    ranking.push(puntos);
    alert(`¡Felicidades ${nameGamer} entras en nuestro ranking con una puntuación de ${puntos}`)
}


// INICIO BINGO

function iniciarBingo() {
    let nameGamer = prompt('¡Bienvenid@ a Bingo Game!¿Cómo te llamas?');
    puntos = 100;
    turno =0;
    alert(' Empiezas la partida con un total de '+ puntos + " puntos.")
    alert('A continuación vamos a mostrarte el cartón de BINGO');
    numerosCantados = [];
    visualizarCarton();
    alert('¡¡Pues juguemos!!');
        do {
            seguirJugando = confirm('¿Quieres seguir jugando?')
            turno++;
            numeroCantado = generarNumeroAleatorio();
            alert (`El número del bombo és el: ${numeroCantado}`);
            comprobarNumeroAleatorioEnCarton(numeroCantado);
            if (cantandoLinea === false) { 
                comprobarLinea();
            }
            cantadoBingo=comprobarBingo();
            imprimirBingo();

        } while(cantadoBingo===false && seguirJugando===true)
        if (seguirJugando===false) {
            alert('¡Abandonas cerca de ser ganador! Ciao :)');
            puntua = false;
        }
        if ( puntua === false) {
        alert('Tendrás una puntuación de 0 al haber abandonado, pero formarás parte de nuestro ranking');
        puntos = 0;
    } else {
        puntos = 100 - turno}
    ranking.push(nameGamer);
    ranking.push(puntos);
    console.log(ranking);
let seguirBingo = confirm('¿Quieres volver a jugar?');
if (seguirBingo === true){
    iniciarBingo()
} else {
    alert(`Gracias ${nameGamer} y hasta siempre`)
}
}

iniciarBingo();