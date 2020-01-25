//Declaro las variables globales para el juego

var bingoCard = [[], [], []]; //Array anidado para formar el cartón
var contadorPartida = 0; //Contador que aumentará +1 cuando al final de la partida el usuario confirme que quiere jugar una nueva partida
var players = []; // Array en el que introduciremos el objeto jugador
var matchNum = []; //Array en el que introduciremos los números del bombo que se incluyan en el cartón
var numObtenido = []; //Array en el que introduciremos TODOS los números que vayan saliendo del bombo
var turnos = 0; //Contador de turnos
var maxNumLinea = 5; //Indicador del máximo de elementos que puede haber en una linea
var lineaUno = 0; //Contador de números de la primera linea del cartón que han salido en el bombo
var lineaDos = 0; //Contador de números de la segunda linea del cartón que han salido en el bombo
var lineaTres = 0;//Contador de números de la tercera linea que han salido en el bombo
var puntuacion = 200; //Marcador inicial de puntos

//Declaro la función bingo que llamaremos al final del código
var bingo = function(){
    newPlayer();
    crearCarton();
};

//Función para registrar un nuevo jugador
var newPlayer = function (){
    var nuevoObj = {}; //En este objeto incluiremos el NOMBRE del jugador y los PUNTOS conseguidos al final de la partida. 
    
    var bienvenida = prompt("Bienvenido a BINGO. Introduce tu nombre");
    alert ("Hola " + bienvenida + ". A continuación te mostraremos las instrucciones del juego.");
    
    nuevoObj.nombre = bienvenida;
    players.push(nuevoObj); //Pusheamos el objeto al array players

    alert ("INSTRUCCIONES \n \nAl iniciar la partida se te mostrará un cartón aleatorio con 15 números. \nSi lo deseas podrás cambiar el cartón por uno nuevo. \nAl iniciar cada turno se te mostrará el número obtenido del bombo. Si tu cartón contiene el número mostrado, se marcará automáticamente. \nAl final de cada turno se te mostrará el cartón actualizado. \nEmpezarás la partida con un marcador de 200 puntos. \nA medida que vayas avanzando turnos tu marcador irá disminuyendo 2 puntos por cada turno que avance. \nPara poder conseguir el mayor número de puntos es importante cantar BINGO lo antes posible! \nSi consigues LINEA en menos de 20 turnos se te añadirán 50 puntos extra a tu marcador \nSi consigues LINEA entre los turnos 20 y 50 se te añadirán 30 puntos extra a tu marcador \nY si consigues LINEA entre los turnos 51 y 70 se te añadirán 10 puntos extra a tu marcador \nAl finalizar la partida se te mostrará el total de turnos que has necesitado para completar el cartón y el total de puntos conseguidos. \nSe te mostrará también un RANKING con los mejores jugadores. \n \n¡¡ MUCHA SUERTE EN TU PARTIDA !!");
    
    return;
};

//Función para mostrar el RANKING al final del juego
//Ordenamos los puntos de mayor a menor mediante el método sort()
var ranking = function(){
    players.sort(function(a, b){
    return b.puntos - a.puntos;
    })
    return players;
};

//Función para empezar una nueva partida
//Llamamos a esta función al finalizar la partida del bingo. 
//Si el usuario decide empezar una nueva partida reiniciamos todos los marcadores
var newGame = function(){
    var nuevoJuego = confirm ("¿Deseas volver a jugar de nuevo?");
    if (nuevoJuego === true){
        contadorPartida++; //Aumentamos +1 el contador de partidas. Esto nos servirá para añadir los puntos del jugador actual en el objeto del ranking.
        turnos = 0; //Marcador de turnos a cero
        puntuacion = 200; //Reiniciamos marcador de puntos
        lineaUno = 0; //Reiniciamos marcador de linea
        lineaDos = 0; //Reiniciamos marcador de linea
        lineaTres = 0; //Reiniciamos marcador de linea
        numObtenido.splice(0, numObtenido.length); //Borramos todos los elementos que estén incluidos en el array
        matchNum.splice(0, matchNum.length); //Borramos todos los elementos que estén incluidos en el array
        bingoCard.forEach(function(element){ //Borramos todos los elementos del cartón
            element.splice(0);
        });
        bingo(); //Llamamos a la función bingo() para empezar una nueva partida
    } else if (nuevoJuego === false){
        alert ("Muchas gracias por jugar a BINGO. Deseamos volver a verte pronto. ¡Hasta luego!")
    }
    return;
};

//Creamos el cartón por lineas mediante números aleatorios que no se van a repetir
//La primera linea del cartón está formada por números aleatorios del 1 al 30
//La segunda linea del cartón está formada por números aleatorios del 31 al 60
//La tercera linea del cartón está formada por números aleatorios del 61 al 90
var crearCarton = function(){
    var numLineaUno = function(){
        var numRandomLineaUno = Math.floor(Math.random() * (31 - 1) + 1);
        if (!bingoCard[0].includes(numRandomLineaUno)) {
            bingoCard[0].push(numRandomLineaUno);
        }
        if (maxNumLinea !== bingoCard[0].length){
            numLineaUno();
        }
        return;
    }
    var numLineaDos = function(){
        var numRandomLineaDos = Math.floor(Math.random() * (61 - 31) + 31);
        if (!bingoCard[1].includes(numRandomLineaDos)) {
            bingoCard[1].push(numRandomLineaDos);
        }
        if (maxNumLinea !== bingoCard[1].length){
            numLineaDos();
        }
        return;
    }
    var numLineaTres = function(){
        var numRandomLineaTres = Math.floor(Math.random() * (91 - 61) + 61);
        if (!bingoCard[2].includes(numRandomLineaTres)) {
            bingoCard[2].push(numRandomLineaTres);
        }
        if (maxNumLinea !== bingoCard[2].length){
            numLineaTres();
        }
        return;
    }
    numLineaUno();
    numLineaDos();
    numLineaTres();

    alert("Te mostramos tu cartón");
    alert(bingoCard[0].join("  ") + "\n" + bingoCard[1].join("  ") + "\n" + bingoCard[2].join("  "));

    //Función para cambiar los números del cartón
    //Si el jugador quiere cambiar el cartón borraremos todos los números mediante splice() y volveremos a llamar a la función de crearCarton()
    var cambiarCarton = function(){
        var confirmar = confirm ("¿Quieres seguir con el cartón propuesto?");
        if (confirmar === true){
            numBombo();
        } else if (confirmar === false) {
            bingoCard.forEach(function(element){
                element.splice(0,3);
            })
            crearCarton();
        }
        return;
    };
    cambiarCarton();
};

// Número del bombo es aleatorio entre 1 y 90, y no se repite. Almacenamos los números en el array numObtenido y verificamos mediante
// un bucle for que no haya salido antes.
// Cuando mostramos al jugador el número del bombo incrementamos el contador de turnos, y restamos dos puntos del marcador de puntos.
// Mostramos el número al jugador y llamamos a la siguiente función
var numBombo = function (){
    var randomNumber = Math.floor(Math.random() * (91 - 1) + 1);
    var existe = false;
    for (var i = 0; i < numObtenido.length; i++){
        if (numObtenido[i] === randomNumber){
            var existe = true;
        }
    }
    if (!existe === true){
        numObtenido.push(randomNumber);
        turnos ++;
        puntuacion -= 2;
        alert ("El número del bombo es el... " + randomNumber);
        match();
    } else {
        numBombo();
    }
};

//Función para detectar si se ha conseguido linea
//Implementamos el sistema de puntos en función del turno en el que se ha conseguido la linea
var getLinea = function(){
    if (lineaUno === maxNumLinea){
        alert (" ¡¡ LINEA !! ¡¡ Seguimos para BINGO !!");
        if (lineaUno === maxNumLinea && turnos <= 20){
            puntuacion += 50;
            alert ("Enhorabuena! Has conseguido LINEA en menos de 20 turnos. \n ¡ Sumas 50 puntos extra a tu marcador !");
        } else if (lineaUno === maxNumLinea && turnos > 20 && turnos <= 50){
            puntuacion += 30;
            alert ("Enhorabuena! Has conseguido LINEA en menos de 50 turnos. \n ¡ Sumas 30 puntos extra a tu marcador !");
        } else if (lineaUno === maxNumLinea && turnos > 50 && turnos <= 70){
            puntuacion += 10;
            alert ("Enhorabuena! Has conseguido LINEA en menos de 70 turnos. \n ¡ Sumas 10 puntos extra a tu marcador !");
        }   
        lineaUno++;
        lineaDos = maxNumLinea + 1;
        lineaTres = maxNumLinea + 1;
    } else if (lineaDos === maxNumLinea){
        alert (" ¡¡ LINEA !! ¡¡ Seguimos para BINGO !!");
        if (lineaDos === maxNumLinea && turnos <= 20){
            puntuacion += 50;
            alert ("Enhorabuena! Has conseguido LINEA en menos de 20 turnos. \n ¡ Sumas 50 puntos extra a tu marcador !");
        } else if (lineaDos === maxNumLinea && turnos > 20 && turnos <= 50){
            puntuacion += 30;
            alert ("Enhorabuena! Has conseguido LINEA en menos de 50 turnos. \n ¡ Sumas 30 puntos extra a tu marcador !");
        } else if (lineaDos === maxNumLinea && turnos > 50 && turnos <= 70){
            puntuacion += 10;
            alert ("Enhorabuena! Has conseguido LINEA en menos de 70 turnos. \n ¡ Sumas 10 puntos extra a tu marcador !");
        }
        lineaDos++;
        lineaUno = maxNumLinea + 1;
        lineaTres = maxNumLinea + 1;
    } else if (lineaTres === maxNumLinea){
        alert (" ¡¡ LINEA !! ¡¡ Seguimos para BINGO !!");
        if (lineaTres === maxNumLinea && turnos <= 20){
            puntuacion += 50;
            alert ("Enhorabuena! Has conseguido LINEA en menos de 20 turnos. \n ¡ Sumas 50 puntos extra a tu marcador !");
        } else if (lineaTres === maxNumLinea && turnos > 20 && turnos <= 50){
            puntuacion += 30;
            alert ("Enhorabuena! Has conseguido LINEA en menos de 50 turnos. \n ¡ Sumas 30 puntos extra a tu marcador !");
        } else if (lineaTres === maxNumLinea && turnos > 50 && turnos <= 70){
            puntuacion += 10;
            alert ("Enhorabuena! Has conseguido LINEA en menos de 70 turnos. \n ¡ Sumas 10 puntos extra a tu marcador !");
        }
        lineaTres++;
        lineaDos = maxNumLinea + 1;
        lineaUno = maxNumLinea + 1;
    }
    return;
};

//Está función nos sirve para comprobar si el número obtenido en el bombo está incluido en el cartón
// Para comprobarlo utilizamos un for dentro de otro for y comparamos los elementos del cartón frente a las bolas que han ido saliendo del bombo
// Si hay coincidencia se avisa al jugador, aumenta el contador de linea, y se sustituye el número en el cartón por una X
var match = function(){
    for (var i = 0; i < bingoCard[0].length; i++){
        for (var j = 0; j < numObtenido.length; j++){
            if (bingoCard[0][i] === numObtenido[j]){
                matchNum.push(numObtenido[j]);
                lineaUno++;
                bingoCard[0][i] = "X";
                alert ("Enhorabuena, el número " + numObtenido[j] + " está en tu cartón");
            }
        }
    }
    for (var i = 0; i < bingoCard[1].length; i++){
        for (var j = 0; j < numObtenido.length; j++){
            if (bingoCard[1][i] === numObtenido[j]){
                matchNum.push(numObtenido[j]);
                lineaDos++;
                bingoCard[1][i] = "X";
                alert ("Enhorabuena, el número " + numObtenido[j] + " está en tu cartón");
            }
        }
    }
    for (var i = 0; i < bingoCard[2].length; i++){
        for (var j = 0; j < numObtenido.length; j++){
            if (bingoCard[2][i] === numObtenido[j]){
                matchNum.push(numObtenido[j]);
                lineaTres++;
                bingoCard[2][i] = "X";
                alert ("Enhorabuena, el número " + numObtenido[j] + " está en tu cartón");
            }
        }
    }
    getLinea(); //Llamamos a la función de LINEA para comprobar si hemos formado linea con el número que acabamos de obtener.
    //Si el array que incluye todos los números que han ido coincidiendo tiene 15 elementos, quiere decir que hemos conseguido tachar todos los número del cartón
    //Avisamos al jugador que ha conseguido bingo. Mostramos los turnos y los puntos
    //Incluimos los puntos en el objeto del jugador, y mostramos el ranking
    if (matchNum.length >= 15){
        alert (" ¡¡ BINGO !!");
        alert ("Enhorabuena, has finalizado la partida. Has necesitado " + turnos + " turnos para llenar el cartón y has conseguido un total de " + puntuacion + " puntos.");
        players[contadorPartida].puntos = puntuacion;
        alert ("Te mostramos el RANKING actual");
        alert (JSON.stringify(ranking())); // RANKING
        newGame();
        // SE ACABA LA PARTIDA. 
        // Llamamos a la función newGame() y pregunta si quiere volver a jugar.
    } else { //Si no hay bingo mostramos el cartón al jugador y llamamos a la función para generar un nuevo turno
        alert (bingoCard[0].join("  ") + "\n" + bingoCard[1].join("  ") + "\n" + bingoCard[2].join("  "));
        nuevoTurno();
    }
};

//Esta función nos sirve para preguntar al jugador si desea iniciar una nueva tirada al finalizar cada turno
//Si contesta que sí llamamos a la función del bombo
//Si contesta que no, se le pregunta al usuario si quiere abandonar el juego
var nuevoTurno = function(){
    var askTurno = confirm ("¿Deseas pasar al siguiente turno?");
    if (askTurno === true){
        numBombo();
    } else {
        var abandonar = confirm ("¿Deseas abandonar el juego?");
        if (abandonar === true){
            alert ("Muchas gracias por jugar a BINGO. ¡ Esperamos volver a verte pronto !");     
        } else if (abandonar === false){
            newGame();
        }
    }
    return;
};

bingo();
