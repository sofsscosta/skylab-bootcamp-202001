
function finJuego(){ 
    alert('Hasta la próxima!');
    return
};
function bingo (){ 

    //carton: array de objetos, con numero y match como propiedades
    var carton =[
       { numero: 0, match: false},
       { numero: 0, match: false},
       { numero: 0, match: false},
       { numero: 0, match: false},
       { numero: 0, match: false},
       //linea2
       { numero: 0, match: false},
       { numero: 0, match: false},
       { numero: 0, match: false},
       { numero: 0, match: false},
       { numero: 0, match: false},
       //linea3
       { numero: 0, match: false},
       { numero: 0, match: false},
       { numero: 0, match: false},
       { numero: 0, match: false},
       { numero: 0, match: false},

    ];
    //contadores de lineas y bingo


    var lineaCantada1 = false;
    var lineaCantada2 = false;
    var lineaCantada3 = false;
    var contadorTurnos= 0:


    //generar array con numeros del 1 al 90 para el carton, de ahi iremos sacando numeros random que iran en el carton
    var listaNumeros=[];
    for (var i=1; i<91; i++){
        listaNumeros.push(i)
    };

    
    //generar array con numeros del 1 al 90 para el bombo, de ahi iremos sacando numeros random que iran en el bombo
    var listaNumeros2 = [];
    for (var i=1; i<91; i++){
     listaNumeros2.push(i)
    };



    //generar lista vacia para poder generar numeros random
    var numcarton=[];
    function generarCarton () {
        while(numcarton.length<15){
            var temp = Math.floor(Math.random()*90);
            if (listaNumeros.includes(temp)===false){
                generarCarton();
            } else {
                var subtractNumber = listaNumeros.splice(listaNumeros.indexOf(temp),1);
                numcarton.push(parseInt(subtractNumber));
            };
        };

        //igualar la array generada de numeros random, con cada numero (object) del carton
        for var (i=0; i<carton.length;i++){
            carton[i].numero=numcarton[i]
        };
    };

   

    //mostrar carton por filas
    function mostrarCarton(){
        var fila1='';
        var fila2='';
        var fila3='';

        for (var i=0; i<carton.length; i++){
         if (i<5){
             fila1=fila1+carton[i].numero + ' / ';

        }else if(i<10){
            fila2=fila2+carton[i].numero+' / ';

        }else if (i<15){
            fila3=fila3+carton[i].numero+ ' / ';
        };
      };

      alert ('Cartón: \n' +fila1+ '\n'+fila2+'\n'+fila3+'')
    }; 
    
   

    //Función para confirmación del cartón de números
    function confirmarCarton () { 
        generarCarton(); 
        mostrarCarton();
        var confirmCard = prompt("¿Desea jugar con este carton? Responde SI si quiere y NO para generar uno nuevo.");
        var confirmCardLower = confirmCard.toLowerCase();
        switch (confirmCardLower) {
            case 'no':
                numcarton =[];
                generarCarton();
                confirmarCarton();
    
            case 'si':
                return;
    
            default:
                numcarton =[];
                generarCarton();
                confirmarCarton();
        };
    };
    
    confirmarCarton();
    
    //funcion para confirmar turno
    function confirmarTurno (){
        var confirmar = confirm('Dale a ACEPTAR para tirar la bola');
        if (confirmar === false){
            alert ('Ha finalizado el juego. Hasta pronto!');
            return;
         }; 
        contadorTurnos++
        bombo()
    };

    confirmarTurno();


    //funcion bombo, primero sacar bola con num aleatorio, si coincide, que pase a ser X y por cada X se suma a los respectivos contadores de filas o bingo
    function bombo () { 

        var temp2= Math.floor(Math.random() * 89) + 1;
        while (listaNumeros2.includes(temp2)===false){
            temp2= Math.floor(Math.random() * 89) + 1
        } 
        
        var numeroBombo = parseInt(listaNumeros2.splice(listaNumeros2.indexOf(temp2),1));
    
        
        alert('El número es....'+numeroBombo+'!!');

        var contadorLinea1=0;
        var contadorLinea2=0;
        var contadorLinea3=0;

        //por cada match: pasar a X y match true
        for (var i=0; i<carton.length;i++){ 
            if( carton[i].numero===numeroBombo){
                carton[i].numero='X';
                carton[i].match=true; 
            };

            if (i>=0 && i<5 && carton[i].match===true ){
                contadorLinea1++
            } else if (i>=5 && i<10 && carton[i].match===true){
                contadorLinea2++
            } else if (i>=10 && i<15 && carton[i].match===true){
                contadorLinea3++
            };
        };
        

       mostrarCarton()


       //sistema puntuacion

       function puntuacion (){
            usuario.puntuacionFinal = Math.round(120-((4*contadorTurnos)/3));
            alert ('Tu puntuación final es de '+usuario.puntuacionFinal+' puntos');
            
             ranking.sort(function(a, b) {return b.puntuacionFinal-a.puntuacionFinal});

            alert ('El ranking actual es el siguiente:\n TOP 1: '+ranking[0].nombre+', con una puntuación de: '+ranking[0].puntuacionFinal+
            ' puntos \n TOP 2: '+ranking[1].nombre+', con una puntuación de: '+ranking[1].puntuacionFinal+' puntos \n TOP 3: '+ranking[2].nombre+
            ', con una puntuación de: '+ranking[2].puntuacionFinal+' puntos \n TOP 4: '+ranking[3].nombre+
            ', con una puntuación de: '+ranking[3].puntuacionFinal+' puntos \n');

            var volverJugar = confirm('¿Quieres jugar una nueva partida?');
            if (volverJugar === false) {
                finJuego(); 
             }else{
              bingo()
             };
        };


       //cantar LINEAS     
       if (contadorLinea1===5 && lineaCantada1 === false) {
            alert('Enhorabuena! Has conseguido LINEA!');
            lineaCantada1 = true;
        } else if (contadorLinea2===5 && lineaCantada2 === false ){
            alert('Enhorabuena! Has conseguido LINEA!');
            lineaCantada2 = true;
        } else if (contadorLinea3===5 && lineaCantada3 === false ){
            alert('Enhorabuena! Has conseguido LINEA!');
            lineaCantada3 = true;
        };

        
       //cantar BINGO 

       if (lineaCantada1 ===true && lineaCantada2 ===true && lineaCantada3 ===true ){ 
        alert('Enhorabuena! Has conseguido BINGO!');
        alert('Has conseguido BINGO en '+contadorTurnos+' turnos.')
        puntuacion()
       }else{ confirmarTurno()
       }

    };

};

var ranking = [
    {nombre: "Jugador Bueno", puntuacionFinal: 80},
    {nombre: "Jugador Medio", puntuacionFinal: 50},
    {nombre: "Jugador Aceptable", puntuacionFinal: 20},
    {nombre: "Jugador Malo", puntuacionFinal: 0},
];

var usuario = {nombre: '', puntuacionFinal: 0}


function nombreUsuario (){ 
    name=prompt('Por favor, introduzca su nombre:'); 
    
    if (name.length===0){
        alert ('No has introducido un nombre.');
        nombreUsuario();
    };

    alert ('Bienvenido '+name+' a nuestro BINGO de Skylab! Las normas de este bingo son como cualquier otro: tienes un cartón de 5x3 con unos números al azar. \n'+
    'A cada turno, irá aparecíendo el número al azar de la bola del bombo y se irán tachando los números con los que haya acoincidencia. En cuantos menos turnos haga BINGO, más puntos recibirá.\n'+
    'La máxima puntuación 100 corresponderá a 15 turnos (hay 15 números en el cartón), y 0 la mínima, que corresponderá a si acabas cuando se acaben todas las bolas de nuestro bombo.');

    usuario.nombre=name;
    ranking.push(usuario);
    alert ('El ranking actual es el siguiente:\n TOP 1: '+ranking[0].nombre+', con una puntuación de: '+ranking[0].puntuacionFinal+
    ' puntos \n TOP 2: '+ranking[1].nombre+', con una puntuación de: '+ranking[1].puntuacionFinal+' puntos \n TOP 3: '+ranking[2].nombre+
    ', con una puntuación de: '+ranking[2].puntuacionFinal+' puntos \n TOP 4: '+ranking[3].nombre+
    ', con una puntuación de: '+ranking[3].puntuacionFinal+' puntos \n')
};


nombreUsuario()
   
        

bingo()