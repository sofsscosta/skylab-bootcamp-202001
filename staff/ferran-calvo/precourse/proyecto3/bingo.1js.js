function bingo(){
    let nombreJugador = prompt("Introducir nombre del jugador.")
    let numeroTurno = 0;
    let bingoCard = {'Linea1': [], 'Linea2': [], 'Linea3': []};
    askTurn();
    function askTurn (){
        if (numeroTurno == 0){
            for (i=1; i=3; i++){
                for (numerosLinea = 0; numerosLinea < 5; numerosLinea++){
                    bingoCard['Linea'+i.toString()][numerosLinea] = {number: Math.round(Math.random()*90), matched: false}
                }
            }
            numeroTurno += 1;
            console.log(showCarton(bingoCard));
        }else{
            console.log(showCarton(bingoCard));
        }
    }
    function newTurn (){

    }
    function generateRandomNumber(){

    }
    function showCarton (carton){
        let stringCarton = "";
        for (i=1; i=3; i++){
            for (j=0; j<5; j++){
                if (carton['Linea'+i.toString()][j].matched == false){
                    stringCarton += (carton['Linea'+i.toString()][j].number).toString();
                }
                else{
                    stringCarton += 'X ';
                    
                }                    
            }
            if (i<3){
                stringCarton += '\n';
            }
        }
        return stringCarton;
    }
}