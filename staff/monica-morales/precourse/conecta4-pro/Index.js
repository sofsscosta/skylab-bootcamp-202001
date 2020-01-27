
    //BOTONES
    window.onload = function (){
   
        document.getElementById('reiniciar').addEventListener("click", reiniciar_juego);
        document.getElementById('play').addEventListener("click", start);
        document.getElementById('salir').addEventListener("click",salir);
        document.getElementById('conecta').addEventListener("click",nextGame);
        document.getElementById('column1').addEventListener("click", push_token);
        document.getElementById('column2').addEventListener("click", push_token);
        document.getElementById('column3').addEventListener("click", push_token);
        document.getElementById('column4').addEventListener("click", push_token);
        document.getElementById('column5').addEventListener("click", push_token);
        document.getElementById('column6').addEventListener("click", push_token);
        document.getElementById('column7').addEventListener("click", push_token);
        
        
        //VARIABLES
        var tiradas = document.getElementsByClassName('controles')[0].firstElementChild; //para coger el formato de tiradas
        var play = false; //el juego está inactivo
        var turnos = 0; //contador para incrementar las tiradas
        var name = document.getElementById('user');//nombre del jugador
        var active_player = 0; //cuando inicia el juego, antes de que se active el juego
        var turno_jugador1 = document.getElementById('turno_jugador1');
        var turno_jugador2 =  document.getElementById('turno_jugador2');
        var tablero = []
        derecha_rojo = 0;
        derecha_amarillo = 0;
        var col = 0;
        col_random = 0;
        var conecta = false;
        
    
        //Objeto para ocultar y mostrar los elementos del layout
        var show = {
            bienvenida: function(state){
                if(state === true){
                    document.getElementById('welcome').style.visibility = 'visible';
                }if(state === false){
                    document.getElementById('welcome').style.visibility = 'hidden';
                }
            },
            user: function(state){
                if(state === true){
                    document.getElementById('user').style.visibility = 'visible';
                }if(state === false){
                    document.getElementById('user').style.visibility = 'hidden';
                }
            },
            tablero: function(state){
                if(state === true){
                    document.getElementById('board').style.visibility = 'visible';
                }if(state === false){
                    document.getElementById('board').style.visibility = 'hidden';
                }
            },
            pulsador: function(state){
                if(state === true){
                    document.getElementById('column1').style.visibility = 'visible';
                    document.getElementById('column2').style.visibility = 'visible';
                    document.getElementById('column3').style.visibility = 'visible';
                    document.getElementById('column4').style.visibility = 'visible';
                    document.getElementById('column5').style.visibility = 'visible';
                    document.getElementById('column6').style.visibility = 'visible';
                    document.getElementById('column7').style.visibility = 'visible';
    
                }if(state === false){
                    document.getElementById('column1').style.visibility = 'hidden';
                    document.getElementById('column2').style.visibility = 'hidden';
                    document.getElementById('column3').style.visibility = 'hidden';
                    document.getElementById('column4').style.visibility = 'hidden';
                    document.getElementById('column5').style.visibility = 'hidden';
                    document.getElementById('column6').style.visibility = 'hidden';
                    document.getElementById('column7').style.visibility = 'hidden';
                }
            },
            turnos: function(state){
                if(state === true){
                    document.getElementById('controles').style.visibility = 'visible';
                    
                }if(state === false){
                    document.getElementById('controles').style.visibility = 'hidden';
                }
            },
            reiniciar: function(state){
                if(state === true){
                    document.getElementById('reiniciar').style.visibility = 'visible';
                }if(state === false){
                    document.getElementById('reiniciar').style.visibility = 'hidden'; 
                }
            },
            salir: function(state){
                if(state === true){
                    document.getElementById('salir').style.visibility = 'visible';
                }if(state === false){
                    document.getElementById('salir').style.visibility = 'hidden';
                }
            },
            finPartida: function(state){
                if(state === true){
                    document.getElementById('conecta').style.visibility = 'visible';                
                }if(state === false){
                    document.getElementById('conecta').style.visibility = 'hidden';  
                }
            },
            nuevoJuego: function(state){
                if(state === true){
                    document.getElementById('return').style.visibility = 'visible';
                }if(state === false){
                    document.getElementById('return').style.visibility = 'hidden';
                }
            },
        };

        //crear un array de 6 filas y 7 columnas simulando el tablero 
        function crearTablero(){
            tablero = new Array(6);
            for(var i=0; i<6; i++){
                tablero[i] = new Array(6);
            }
            console.log(tablero);
        };
        crearTablero();

        //validar usuario
        function validate_user(name){
            var _name = name.value.trim();
            if(_name === null || _name === ''){
                play = false;
            }else{
                play = true;
            }
        };

        //iniciar el juego
        function start(){
            validate_user(name)
            if(play === true){
                show.bienvenida(false);
                show.turnos(true);
                show.user(false);
                show.reiniciar(true);
                show.salir(true);
                document.getElementById('name').innerHTML = name.value;
           }
        };
                
        //colocar ficha jugador 
        function push_token(){
            if(play === true){
                col=parseInt(this.name);
                for(var row = 5;row>= 0; row--){
                    if(tablero[row][col]!=undefined){
                        continue;
                    }
                    if(tablero[row][col] === undefined){
                        tablero[row][col] = 'jugador';//identificar en el array 'tablero' que esta casilla está ocupada por jugador
                        document.getElementById('cell'+'_'+row+'_'+col).className = 'token_jugador1'; 
                        active_player = 2;
                    }
                    turno_jugador1.className = 'jugador_espera';
                    turno_jugador2.className = 'turno_jugador2';//se activa jugador2
                    break;
                }
                conecta4();
                contador_tiradas();
                show.pulsador(false);
                if(conecta === false){
                    push_skylab();
                }
                
           }
           
        };

        //colocar ficha skylab con un retardo de dos segundos
        function push_skylab(){
            setTimeout(function(){
                    play = true;
                    turno_jugador2.className = 'jugador_espera';
                    turno_jugador1.className = 'turno_jugador1';//se activa jugador1
                    active_player = 1;
                    col_random = Math.floor(Math.random()*6)+1;
                    for(var row = 5; row>=0; row--){
                        if(tablero[row][col_random] === undefined){
                            tablero[row][col_random] = 'skylab';//identificar en el array 'tablero' que esta casilla está ocupada por skylab 
                            document.getElementById('cell'+'_'+row+'_'+col_random).className = 'token_skylab'; 
                            break;
                        }
                    }
                    show.pulsador(true);
                    conecta4_maquina() 

            },2000);
        };
        
        //incrementar las tiradas
        function contador_tiradas(){
            turnos++;
            tiradas.innerHTML = 'Tiradas:' + ' ' + turnos; //contador de tiradas
        };
        
        //detectar conecta4 en horizontal jugador y maquina
        function acierto_horizontal(){
            var horizontal = 0; 
            for(var row=0; row<=5; row++){
                for(var colm=0; colm<6; colm++){
                    if((tablero[row][colm]!=undefined) && (tablero[row][colm] === tablero[row][colm+1])){
                        horizontal++;
                        if(horizontal === 3){
                            conecta = true;
                            player_win(active_player)
                        }
                    }else{
                        horizontal = 0
                    }              
                }
            }
        };

        //detectar conecta4 en vertical del jugador
        function acierto_vertical(){
            var vertical = 0; //contador aciertos verticales
            for(var i=1; i<=5; i++){
                if((tablero[i][col]!=undefined) && (tablero[i-1][col] === tablero[i][col])){
                    vertical++;
                    if(vertical === 3){
                        conecta = true;
                        player_win(active_player)
                    }
                }else{
                    vertical = 0;
                }
            }
        };
        
        //detectar conecta4 en vertical de la máquina
         function acierto_vertical_maquina(){
            var vertical = 0; //contador aciertos verticales
            for(var i=1; i<=5; i++){
                if((tablero[i][col_random]!=undefined) && (tablero[i-1][col_random] === tablero[i][col_random])){
                    vertical++;
                    if(vertical === 3){
                        conecta = true;
                        player_win(active_player)
                    }
                }else{
                    vertical = 0;
                }
            }
        };

        //detectar conecta4 en diagonal derecha a izquierda jugador y maquina
        function acierto_diagonal_derecha(){
            var diagonal = 0; //contador aciertos en diagonal
            for(var i=0; i<=5; i++){
                for(var j=0; j<=6; j++){
                    if((tablero[i][j]!=undefined && tablero[i-1]!=undefined) && (tablero[i][j] === tablero[i-1][j-1])){
                        diagonal++;
                    }if((tablero[i][j]!=undefined && tablero[i-2]!=undefined) && (tablero[i][j] === tablero[i-2][j-2])){
                        diagonal++;
                    }if((tablero[i][j]!=undefined && tablero[i-3]!=undefined) && (tablero[i][j] === tablero[i-3][j-3])){ 
                        diagonal++;
                    }if(diagonal === 3){
                        conecta = true;
                        player_win(active_player)
                    }else{
                        diagonal = 0;
                    }
                }
            }
        };
        
        //detectar conecta4 en diagonal izquierda a derecha jugador y maquina
        function acierto_diagonal_izquierda(){
            var diagonal = 0; //contador aciertos en diagonal
            for(var i=0; i<=5; i++){
                for(var j=0; j<=6; j++){
                    if((tablero[i][j]!=undefined && tablero[i-1]!=undefined) && (tablero[i][j] === tablero[i-1][j+1])){
                        diagonal++;
                    }if((tablero[i][j]!=undefined && tablero[i-2]!=undefined) && (tablero[i][j] === tablero[i-2][j+2])){
                        diagonal++;
                    }if((tablero[i][j]!=undefined && tablero[i-3]!=undefined) && (tablero[i][j] === tablero[i-3][j+3])){ 
                        diagonal++;
                    }if(diagonal === 3){
                        conecta = true;
                        player_win(active_player)
                    }else{
                        diagonal = 0;
                    }
                }
            }
        };

        //detectar todos los aciertos conecta4 del jugador
        function conecta4(){
            acierto_horizontal();
            acierto_vertical();
            acierto_diagonal_derecha();
            acierto_diagonal_izquierda();
        };
        
        //detectar todos los aciertos conecta4 de la máquina
        function conecta4_maquina(){
            acierto_horizontal();
            acierto_vertical_maquina();
            acierto_diagonal_derecha();
            acierto_diagonal_izquierda();
        };

        //informar del jugador ganador
        function player_win(active_player){
            show.tablero(true);
            show.pulsador(false);
            show.turnos(false);
            show.reiniciar(false);
            show.salir(false);
            show.finPartida(true);
            if(active_player === 1){
                document.getElementById('ganador').innerHTML = `skylab ha ganado!!\<br>\<br> Conseguido Conecta4 en ${turnos} tiradas.`;
                document.getElementById("return").style.visibility = 'visible';
            }if(active_player === 2){
                document.getElementById('ganador').innerHTML = `${name.value} ha ganado!!\<br>\<br> Conseguido Conecta4 en ${turnos+1} tiradas.`;
                document.getElementById("return").style.visibility = 'visible';
            }
        };

        //reiniciar juego
        function reiniciar_juego(){
            crearTablero()
            turnos = -1
            contador_tiradas()
            turno_jugador1.className = 'turno_jugador1';
            turno_jugador2.className = 'jugador_espera';
            for(var row = 0; row<=5; row++){
                for(var col = 0; col<=6; col++){
                    document.getElementById('cell'+'_'+row+'_'+col).className = 'token_jugador0';
                }
            }
        };

        //salir del juego
        function salir(){
            show.bienvenida(true);
            show.turnos(true);
            show.user(true);
            show.reiniciar(false);
            show.salir(false);
            reiniciar_juego();
            play = false;
        };
        
        //volver a jugar
        function nextGame(){
            play = true;
            active_player = 0;
            conecta = false;
            show.tablero(true);
            show.pulsador(true);
            show.turnos(true);
            show.reiniciar(true);
            show.salir(true);
            show.finPartida(false);
            show.nuevoJuego(false);
            document.getElementById('name').innerHTML = name.value;
            reiniciar_juego();
        };
    };