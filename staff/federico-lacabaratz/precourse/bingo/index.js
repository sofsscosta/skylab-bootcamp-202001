

bingo();

// Función englobadora del Bingo
function bingo() {
        
    alert(`Bienvenido/a a Skylab's BINGO!`)

    //Variables globales acumuladoras
    var coincideLinea1=false;
    var coincideLinea2=false;
    var coincideLinea3=false;
    linea1=0;
    linea2=0;
    linea3=0;
    var bingo=false;
    var turns=0;

    // El inicio y pedido de user
    inputUser();
    function inputUser() {
        var user = prompt(`Por favor, escriba su nombre de usuario para comenzar`);
        welcomeUser(user);

        function welcomeUser(data1) {
            if (data1) {
                alert(`Bienvenido/a ${user} al Skylab's BINGO!`);

            } else {
                alert(`Por favor, ingrese un nombre de usuario válido`)
                inputUser();

            }
        };
    };

    //El generador de números
    var numerosCarton = generaNumeros(15); 

    function generaNumeros(numRequeridos) {

        var numAleatArr = []

        getRandomNumero();

        function getRandomNumero() {
            var numAleatSorteo = Math.floor(Math.random() * 89) + 1;
            
            if (!numAleatArr.includes(numAleatSorteo)) {
                numAleatArr.push(numAleatSorteo)
            };

            if(numRequeridos !== numAleatArr.length) {
                getRandomNumero();
            };

        };

        return numAleatArr;

    };

    // El cartón
    alert(`A continuación le asignaremos un carton de bingo con numeros random!`)

    bingoCarton();

    function bingoCarton() {

    carton = getRandomBingoCard(numerosCarton);

    function getRandomBingoCard(numsCard) {

        var bingoCard = [];

        for (var index in numsCard) {
            var numberObject = {number: numsCard[index], matched: false };
            bingoCard.push(numberObject);
        }

        console.log(`El carton que le ha sido asignado contiene los siguientes numeros: ${numsCard}`);
        return bingoCard;
        
        };

    };
    
    // El bombo
    alert(`A continuación pasaremos a sacar la primera bola!`)

    var numsBombo = [];

    function getBola() { 
        
        var bolasAleat = Math.floor(Math.random() * 89) + 1;
        
        while(numsBombo.indexOf(bolasAleat)!=-1){
            bolasAleat=Math.floor(Math.random() * 89) + 1;
        }
        alert(`El numero de la bola que has sido extraída es: ${bolasAleat}`);
        console.log(`El numero de la bola que has sido extraída es: ${bolasAleat}`)
        numsBombo.push(bolasAleat);
        return bolasAleat;
    }

    // Nuevo turno
    newTurn();

        function newTurn() {

        var bolasAleat = getBola();
        
        turns++;
        
        for (var i in carton) {
            
            if (carton[i].number === bolasAleat) {
                carton[i].matched = true;
                alert(`Muy Bien!!! La bola ${bolasAleat} sorteada coincide con un numero en su carton!!!`);
                console.log(`Muy Bien!!! La bola ${bolasAleat} sorteada coincide con un numero en su carton!!!`);
                carton[i].number = "X";
                
            };
            
            //Para comprobar lineas
            if (carton[0].number === "X" && carton[1].number === "X" && carton[2].number === "X" && carton[3].number === "X" && carton[4].number === "X") {
                coincideLinea1 = true;
                linea1++;

            
            };
            
            if (carton[5].number === "X" && carton[6].number === "X" && carton[7].number === "X" && carton[8].number === "X" && carton[9].number === "X") {
                coincideLinea2 = true;
                linea2++;

            
            }; 
            
            if (carton[10].number === "X" && carton[11].number === "X" && carton[12].number === "X" && carton[13].number === "X" && carton[14].number === "X") {
                coincideLinea3 = true;
                linea3++;

                
            };        
            
            // El display de numeros y "X"
            var cartonDisplay = `Primera Linea: ${carton[0].number}, ${carton[1].number}, ${carton[2].number}, ${carton[3].number}, ${carton[4].number}.\nSegunda Linea: ${carton[5].number}, ${carton[6].number}, ${carton[7].number}, ${carton[8].number}, ${carton[9].number}.\nTercera Linea: ${carton[10].number}, ${carton[11].number}, ${carton[12].number}, ${carton[13].number}, ${carton[14].number}.`;
            
            console.log(`Su carton al finalizar el turno:\n${cartonDisplay}`);
        };    
        
        askTurn();
        
    };

    // Función para continuar o no.
    function continuar() {

        var continua = confirm(`Deseas seguir con esta partida?`)

        if(continua) {
            newTurn();
        
        } else {
            theEnd();
        
        };

    };

    // Función para comprobar bingo y escribir en consola las lineas y bingo
    function askTurn() {

        if (coincideLinea1 === true || coincideLinea2 === true || coincideLinea3 === true) {

            if (coincideLinea1 === true && linea1 <15) {
                alert(`Felicitaciones!! Has hecho la PRIMERA LINEA!!`);
                console.log(`Felicitaciones!! Has hecho la PRIMERA LINEA!!`);
                linea1;
            
            };
            
            if (coincideLinea2 === true && linea2 <15) {
                alert(`Felicitaciones!! Has hecho la SEGUNDA LINEA!!`);
                console.log(`Felicitaciones!! Has hecho la SEGUNDA LINEA!!`);
                linea2;
            
            };
            
            if (coincideLinea3 === true && linea3 <15) {
                alert(`Felicitaciones!! Has hecho la TERCERA LINEA!!`);
                console.log(`Felicitaciones!! Has hecho la TERCERA LINEA!!`);
                linea3;
            
            };
        
        };

        if (coincideLinea1 === true && coincideLinea2 === true && coincideLinea3 === true) {
            bingo=true;
            alert(`Wow!!! Felicitaciones!!! Has hecho BINGO!!!`);
            console.log(`Wow!!! Felicitaciones!!! Has hecho BINGO!!!`)
            alert(`Has completado tu carton en ${turns} turnos!`);
            console.log(`Has completado tu carton en ${turns} turnos!`)
            
        };
        
        if (bingo !== true) {
            continuar();

        } else {
            newGame();
        }
        
    };

    // Función para resetear valores a cero ante posible repeticion del juego
    function reset() {
        
        coincideLinea1=false;
        coincideLinea2=false;
        coincideLinea3=false;
        linea1=0;
        linea2=0;
        linea3=0;
        bingo=false;
        turns=0;
        numerosCarton = generaNumeros(15);
        bingoCard=[];
        numsBombo=[];

    };

    // Función para finalizar con saludo
    function theEnd() {
        alert("Gracias por jugar y hasta la próxima!");
        console.log("Fin del Juego");
    };

    // Función para re-comenzar
    function newGame() {
        exit = confirm("Quieres continuar otra partida con otro carton?");
        
        if (exit) {
            reset();
            alert(`A continuación le asignaremos un nuevo carton de bingo con numeros random!`);
            console.log(`A continuación le asignaremos un nuevo carton de bingo con numeros random!`);
            bingoCarton();
            newTurn();
        
        } else {
            theEnd();
        }
    };
};



