//Código para sistema de puntuación
var nameList;

var topList = [
    {name: "Satanás", score: 30},
    {name: "Dios", score: 10},
    {name: "Donald Trump", score: 5}
];

function bingo () {
    // Generación directa del cartón
    var max = 15;
    var random = [];
    var bingoCard = [];
    var trueCard = [[],[],[]];
    
    function carton(){
        for(var i = 0;i<max ; i++){
            var temp = Math.floor(Math.random()* 89) + 1;
            if(random.indexOf(temp) == -1){
                random.push(temp);
                bingoCard.push({number: temp, matched: false});
            } else {
                i--;
            };
        };
     
        for (let x=0;x<trueCard.length;x++) {
            for (let y=0;y<max/trueCard.length;y++) {
                trueCard[x].push(bingoCard[x*(max/trueCard.length)+y].number);
            };
        };
        
        alert("Esta será tu cartulina:\n\n" + trueCard[0].join("    ") + "\n" + trueCard[1].join("    ") + "\n" + trueCard[2].join("    "));
    };  

    // PRO - Función para confirmación de cartulina
    function letsGo () {
        carton();
        var confirmCard = prompt("¿Deseas quedártela o prefieres una nueva? Escribe 'Yes' si quieres una nueva o 'No' si esta ya te va bien (en caso de no responder correctamente, " +
        "se generará una nueva cartulina):");
        var confirmCardLower = confirmCard.toLowerCase();
        switch (confirmCardLower) {
            case 'yes':
                random = [];
                bingoCard = [];
                trueCard = [[],[],[]];
                letsGo();
    
            case 'no':
                return;
    
            default:
                random = [];
                bingoCard = [];
                trueCard = [[],[],[]];
                letsGo();
        };
    };

    // Bloque para preguntar si el usuario quiere hacer un nuevo turno
    function askNewTurn () {    
        var ask = confirm("¡Cuando estés list@ para la siguiente tirada dale a 'Aceptar'!");
        if (ask === false) {
            alert("¡Gracias por jugar! Hasta la próxima :^)");
            return;
        };

        newTurn();     
    };

    function winMessage () {
        nameList.score = (120-((4*scoreTracker)/3)).toFixed(2);

        if (nameList.score > topList[0].score) {
            topList[2] = topList[1];
            topList[1] = topList[0];
            topList[0] = nameList;

        } else if (nameList.score > topList[1].score) {
            topList[2] = topList[1];
            topList[1] = nameList;
            
        } else if (nameList.score > topList[2].score) {
            topList[2] = nameList;
        };

        alert(`¡Ganaste! Fin de la partida! Enhorabuena!\n\nTu puntuación final es de: ¡${nameList.score} puntos!`);

        var nextGame = confirm("Si deseas iniciar una nueva partida, marca 'Aceptar':");
        if (nextGame === false) {
            alert("¡Gracias por jugar! Hasta la próxima :^)");
            return;
        };

        bingo();
    };

    //Código para la generación de turnos
    //Controlador de turnos
    var winCounter = false;
    var allNumbers = [];
    for (let i=1;i<91;i++) {
        allNumbers.push(i);
    };
    
    // Controlador de "Líneas!"
    let line1Completed = false;
    let line2Completed = false;
    let line3Completed = false;

    // Función para saber si todos los elementos son iguales
    const allEqual = arr => arr.every( v => v === 'X' );

    // Asignación de puntos
    var scoreTracker = 0;

    function newTurn () {
        //Extración de un turno aleatorio, previniendo que se repita
        var pickBall = 0;
        var tempPos = Math.floor(Math.random()* allNumbers.length);
        pickBall = allNumbers[tempPos];
        allNumbers.splice(tempPos,1);
        scoreTracker++;
        alert(`¡Nuevo turno! Tiramos la bola y sale... ¡${pickBall}!`);
        trueCard.forEach(function(num) {
            for (let z=0; z<max/trueCard.length;z++) {
                if (num[z] === pickBall) {
                    num[z] = 'X';
                };
            };  
        });

        if (allEqual(trueCard[0]) && line1Completed === false) {
            alert("¡Línea!");
            line1Completed = true;
        } else if (allEqual(trueCard[1]) && line2Completed === false) {
            alert("¡Línea!");
            line2Completed = true;
        } else if (allEqual(trueCard[2]) && line3Completed === false) {
            alert("¡Línea!");
            line3Completed = true;
        };

        if (line1Completed === true && line2Completed === true && line3Completed === true) {
            winCounter = true;
        };

        if (winCounter === true) {
            winMessage();
        };
        
        alert(trueCard[0].join("    ") + "\n" + trueCard[1].join("    ") + "\n" + trueCard[2].join("    "));
        askNewTurn();
    };

    //Secuencia de la partida
    var name = prompt("Por favor, introduce tu nombre:");
    if (name === "") {
        name = "usuario desconocido";
    };
    nameList = {name: name, score: 0};

    alert("¡Hola " + name + ", bienvenido a SkylaBingo! Este bingo cuenta con un sistema de puntuación donde el máximo " +
    "de puntos posibles, en caso de que completes tu cartulina de 5x3 en el mínimo de tiradas posible (15 tiradas) es de " +
    "100 puntos, mientras que la peor puntuación (0 puntos) se obtiene si completas tu cartulina al realizar la última tirada.\n\nEste es el Top 3 actual:\n\n1º " + 
    topList[0].name + ": " + topList[0].score + " puntos\n2º " + topList[1].name + ": " + topList[1].score + " puntos\n3º " + topList[2].name + ": " + topList[2].score +
    " puntos\n\n¡Buena suerte!");

    letsGo();

    var conTurn = confirm("Ahora haremos la primera tirada, ¡buena suerte!");
    if (conTurn === false) {
        alert("¡Gracias por jugar! Hasta la próxima :^)");
        return;
    };

    newTurn();
};

bingo();