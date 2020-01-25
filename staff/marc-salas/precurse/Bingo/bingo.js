    // Declaración de variables globales
    var carton =[[],[],[]];
    var numerosCantados = [];
    var random;
    var bingoDone = false;
    var fin = true;
    var cont = true;
    var jugador;
    var linDone = false;
    var turnos = 0;
    // Preguntar nombre del jugador y presentación
    function nombre(){
        jugador = prompt('Introduzca su nombre','');
        console.log('buenos dias senyor/a '+ jugador + ', este es su carton!') 
    }
    // Generar el carton 
    function generarCarton(){
        let y = 0;
        while (y < 3){
            let x = 0;
            while (x < 5) {
                var aleatori = Math.floor(Math.random() * 99) + 1;
                let arrayUno = carton[0];
                let arrayDos = carton[1];
                let arrayTres = carton[2];
                var numeroRepetido = arrayUno.includes(aleatori) || arrayDos.includes(aleatori) || arrayTres.includes(aleatori);
                if (numeroRepetido === false){
                    carton[y][x] = aleatori; 
                    x = x+1;
                }
            };
            y = y+1;
        };
        console.log(carton.join('\n') + '\n\n');
    };  
    // Generar el número aleatorio de cada turno
    function numeroRandom(){
        random = Math.floor(Math.random() * 99) + 1
        if (numerosCantados.includes(random) === false ){
            console.log('I el numero del bombo es el ' + random + '!!!!');
            numerosCantados[numerosCantados.length] = random;
        } else {
            numeroRandom();
        };
    };
    // Modificación del cartón del jugador.
    function modificacionCarton(){
        let arrayUno = carton[0];
        let arrayDos = carton[1];
        let arrayTres = carton[2];
        encontrarIndex();
        if (arrayUno.includes(random) === true ){
            let index = arrayUno.findIndex(encontrarIndex);
            carton[0][index] = 'X';
            console.log(carton.join('\n') + '\n\n');
        } else if (arrayDos.includes(random) === true ){
            let index = arrayDos.findIndex(encontrarIndex);
            carton[1][index] = 'X';
            console.log(carton.join('\n') + '\n\n');
        } else if (arrayTres.includes(random) === true ){
            let index = arrayTres.findIndex(encontrarIndex);
            carton[2][index] = 'X';
            console.log(carton.join('\n') + '\n\n');
        } else {
            console.log(carton.join('\n') + '\n\n');
        };
    };
    // Funcion para encontrar el index en la array
    function encontrarIndex(ind){
        return ind === random;
    };
    // Pregunta despuees de cada turno para ver si el jugador quiere continuar
    function continuar(){
        cont = confirm('A pique el portaaviones !!!! \n' + jugador + 'desea continuar la partida?');
        if (cont === false){
            console.log('Adeu Andreu');
            fin = false;
            reseteo();
        }
    }
    // Funcion para ver si hay linea el el carton del jugador
    function puntuacionLinea(){
        let arrayUno = carton[0];
        let arrayDos = carton[1];
        let arrayTres = carton[2];
        let l1 = 0;
        let l2 = 0;
        let l3 = 0;
        for (x=0; x <arrayUno.length; x++){
            if (arrayUno[x] === "X" ){
                l1 = l1 + 1;
            };
            if (arrayDos[x] === "X" ){
                l2 = l2 + 1;
            };
            if (arrayTres[x] === "X" ){
                l3 = l3 + 1;
            };
        };
        if ( (l1 === 5 || l2 === 5 ||l3 === 5 ) & linDone !== true ){
            console.log('LINEA !!');
            linDone = true;
        };
        if ((l1+l2+l3) === 15){
            console.log('ES BINGOOOO!!!');
            bingoDone = true;
        };
    }
    // Funcion que pregunta si quiere jugar otra vez al bingo
    function salida(){
        fin = confirm('Lo pasamos bien, verdad? \n' + jugador + 'Desea jugar de Nuevo?');
        if (fin === true){
            reseteo();
        }else{
            console.log('Adeu Andreu');
        }
    }
    // Reseteo de datos 
    function reseteo(){
        bingoDone = false;
        linDone = false;
        carton =[[],[],[]];
        numerosCantados = [];
        turnos = 0;
    }
    // Estroctura del programa
    while (fin === true){
        nombre();
        generarCarton();
        cont = true;
        while (cont !== false || cont == 'Undefined'){
            numeroRandom();
            modificacionCarton();
            turnos = turnos + 1;
            puntuacionLinea();
            if (bingoDone === true){
                cont = false;
                console.log('Ha realizado ' + turnos + ' turnos');
                salida();
            } else {
                continuar();
            };
        };
    };