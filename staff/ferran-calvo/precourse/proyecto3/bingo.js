let ranking = [];
//función principal
let nombreJugador = prompt("Introducir nombre del jugador.");
let numeroTurno = 0;
//lista numeros que aún no han salido
let listaNumerosPendientes = Array.from({ length: 90 / 1}, (_, i) => 1 + (i));
let bingoCard = [];
let lineaDone = false;
let nAciertosLinea = 0;
askTurn();
function askTurn (){
    //primer turno del juego, generamos el cartón con el que jugará el jugador
    let nAciertos = 0;
    if (numeroTurno == 0){
        bingoCard = [];
        //lista números que aún no han aparecido en el cartón, para asegurarse de que no se repiten
        let listaNumerosPendientesCarton = Array.from({ length: 90 / 1}, (_, i) => 1 + (i));
        for (numerosCarton = 0; numerosCarton < 15; numerosCarton++){
            let numeroCarton = generateRandomNumber(listaNumerosPendientesCarton)
            bingoCard.push({number: numeroCarton, matched: false});      
        }
        console.log(showCarton(bingoCard));
        //Se pregunta al jugador si desea quedarse con el cartón generado o si desea otro
        let nuevoCarton = prompt("¿Se queda con este cartón? Yes/No")
        if (nuevoCarton == "No"){
            askTurn();
        }
        else{
            numeroTurno += 1;
            askTurn();
        }
    }
    for (i=0; i<bingoCard.length; i++){
        if (bingoCard[i].matched == false){
            let askNewTurn = prompt("Cartón no completado. ¿Desea jugar otro turno? y/n")
            if (askNewTurn == 'y'){
                newTurn();
            }
            if (askNewTurn == 'n'){
                alert('Fin del juego.');
                let nuevaPartida = prompt ("¿Desea jugar una nueva partida? y/n");
                if (nuevaPartida == 'y'){
                    bingo();
                }
                else{
                    console.log("Bye");
                    return;
                }
            }
        }
        else{
            nAciertos += 1;
            if (nAciertos == 15){
                console.log("¡Cartón completado, felicidades! Fin del juego.");
                //Puntuación obtenida en base al número de bolas que han salido, por lo tanto la máxima puntuación
                //que se puede obtener son 75 puntos.
                let puntos = listaNumerosPendientes.length;
                jugadorActual = {Jugador: nombreJugador, Puntos: puntos};
                ranking = ordenarRanking(ranking, jugadorActual);
                for (p=0; p<ranking.length; p++){
                    console.log(ranking[p])
                }
                let nuevaPartida = prompt ("¿Desea jugar una nueva partida? y/n");
                if (nuevaPartida == 'y'){
                    nombreJugador = prompt("Introducir nombre del jugador.");
                    numeroTurno = 0;
                    //lista numeros que aún no han salido
                    listaNumerosPendientes = Array.from({ length: 90 / 1}, (_, i) => 1 + (i));
                    bingoCard = [];
                    lineaDone = false;
                    nAciertosLinea = 0;
                    askTurn();
                }
                else if (nuevaPartida == 'n'){
                    console.log("Bye");
                    return 
                }
            }
        }
    }   
}
//Función encargada de iniciar un nuevo turno
function newTurn (){
    let newNumber = generateRandomNumber(listaNumerosPendientes);
    console.log(newNumber.toString());
    for (i=0; i<bingoCard.length; i++){
        if (bingoCard[i].number == newNumber){
            bingoCard[i].matched = true;
            if (lineaDone == false){
                for (i=0; i<bingoCard.length; i++){
                    if (bingoCard[i].number == newNumber){
                        bingoCard[i].matched = true;
                        console.log(showCarton(bingoCard));
                        if (lineaDone == false){
                            for (j=0; j<5; j++){
                                if (bingoCard[j].matched == true){
                                    nAciertosLinea += 1;
                                    if (nAciertosLinea == 5){
                                        console.log("¡LINEA!")
                                        lineaDone = true;
                                    }
                                }
                                else{
                                    nAciertosLinea = 0;
                                    break;
                                }
                            }
                            for (j=5; j<10; j++){
                                if (bingoCard[j].matched == true){
                                    nAciertosLinea += 1;
                                    if (nAciertosLinea == 5){
                                        console.log("¡LINEA!")
                                        lineaDone = true;
                                    }
                                }
                                else{
                                    nAciertosLinea = 0;
                                    break;
                                }
                            }
                            for (j=10; j<15; j++){
                                if (bingoCard[j].matched == true){
                                    nAciertosLinea += 1;
                                    if (nAciertosLinea == 5){
                                        console.log("¡LINEA!")
                                        lineaDone = true;
                                    }
                                }
                                else{
                                    nAciertosLinea = 0;
                                    break;
                                }
                            }
                            askTurn();
                        }
                    }
                } 
            }
        }
    }
    console.log(showCarton(bingoCard));
    askTurn();
}
//Función encargada de generar un número aleatorio tanto a la hora de generar el cartón como cuando van saliendo las bolas con los números durante la partida
function generateRandomNumber(lista){
    let numeroGenerado = lista[Math.round(Math.random()*(lista.length-1))];
    lista.splice(lista.indexOf(numeroGenerado), 1);
    return numeroGenerado
}
//Función para generar el string del cartón y que el jugador pueda ver los números que le quedan para completarlo
function showCarton (carton){
    let stringCarton = "";
    for (j=0; j<15; j++){
        if (carton[j].matched == false){
            if (j == 4 || j == 9) {
                stringCarton += (carton[j].number).toString()+ '\n';
            }
            else if (j == 14){
                stringCarton += (carton[j].number).toString();
            }
            else{
                stringCarton += (carton[j].number).toString()+ "-";
            }
        }
        else{
            if (j == 4 || j == 9 || j == 14) {
                stringCarton += 'X\n';
            }
            else if (j == 14){
                stringCarton += 'X';
            }
            else{
                stringCarton += 'X-';
            }      
        }                    
    }
    return stringCarton;
}
function ordenarRanking(rank, player){
    if (rank.length==0){
        rank.push(player);
        return rank;
    }
    for (i=0; i<rank.length; i++){
        if (player.Puntos > rank[i].Puntos){
            rank.splice(i,0,player);
            return rank;
        }
    }
    rank.push(player);
    return rank
}