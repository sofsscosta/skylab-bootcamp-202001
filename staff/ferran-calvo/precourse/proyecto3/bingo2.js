function bingo(){
    let nombreJugador = prompt("Introducir nombre del jugador.")
    let numeroTurno = 0;
    let listaNumerosGenerados = [];
    let bingoCard = [];
    let lineaDone = false;
    let nAciertosLinea = 0;
    askTurn();
    function askTurn (){
        if (numeroTurno == 0){
            bingoCard = [];
            for (numerosCarton = 0; numerosCarton < 15; numerosCarton++){
                let numeroCarton = Math.round(Math.random()*1);
                if (numeroCarton > 0){
                    bingoCard.push({number: numeroCarton, matched: false});
                }      
                else{
                    askTurn();
                }
            }
            console.log(showCarton(bingoCard));
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
                    let nuevaPartida = prompt ("¿Desea jugart una nueva partida? y/n");
                    if (nuevaPartida == 'y'){
                        bingo();
                    }
                }
            }
        }    
    }
    function newTurn (){
        let newNumber = generateRandomNumber();
        if (newNumber > 0){
            for (i=0; i < listaNumerosGenerados.length ; i++){
                if (newNumber == listaNumerosGenerados[i]){
                    newTurn();
                }
            }
            console.log(newNumber.toString())
            listaNumerosGenerados.push(newNumber);
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
            console.log(showCarton(bingoCard));
            askTurn();
        } 
        else{
            newTurn();
        }
    }
    function generateRandomNumber(){
        let numeroGenerado = Math.round(Math.random()*1);
        return numeroGenerado
    }   
    function showCarton (carton){
        let stringCarton = "";
        for (j=0; j<15; j++){
            if (carton[j].matched == false){
                stringCarton += (carton[j].number).toString()+ "-";
                if (j == 4 || j == 9) {
                    stringCarton += '\n';
                }
            }
            else{
                stringCarton += 'X-';
                if (j == 4 || j == 9) {
                    stringCarton += '\n';
                }
                    
            }                    
        }
        return stringCarton;
    }
}