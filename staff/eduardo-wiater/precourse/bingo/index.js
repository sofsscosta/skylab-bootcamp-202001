"use strict" 
function bingo(){
   
  var jugadorActivo = {}  
  var bombo = [];
  var counterMatch = 0 , contador = 0 , puntos = 100 , estadoLinea = false;
  var usadosBombo = [];
  var carton = [
    {id:0 , numero: 0 , match : false },
    {id:1 , numero: 0 , match : false },
    {id:2 , numero: 0 , match : false },
    {id:3 , numero: 0 , match : false },
    {id:4 , numero: 0 , match : false },
    {id:5 , numero: 0 , match : false },
    {id:6 , numero: 0 , match : false },
    {id:7 , numero: 0 , match : false },
    {id:8 , numero: 0 , match : false },
    {id:9 , numero: 0 , match : false },
    {id:10 , numero: 0 , match : false },
    {id:11 , numero: 0 , match : false },
    {id:12 , numero: 0 , match : false },
    {id:13 , numero: 0 , match : false },
    {id:14 , numero: 0 , match : false },
  ];
  var jugadores = [
    { id: 0 , nombre:'Admin' , status: false , puntos: 0},
    { id: 1 , nombre:'Ambrosio' , status: false , puntos: 76},
    { id: 2 , nombre:'Pepita' , status: false , puntos: 105},
    { id: 3 , nombre:'Bernabé' , status: false , puntos: 83},
    { id: 4 , nombre:'Asumpta' , status: false , puntos: 68},
  ]; 
  // Bienvenida - Chequeo si hay jugador activo , en caso negativo , pido crear perfil
  function welcome(){

    var activo = jugadores.find(function(x){ return x.status === true; })
    
    jugadorActivo = activo;

    if( activo ){     
      return setUp();
    }else{             
      return creaJugador();          
    }
  }
  // Creo jugador
  function creaJugador(){
    var nombre = prompt('Ingrese su nombre');
      
      if( nombre === null || nombre === '' ){
        alert('Error! Ingrese un nombre por favor');
        return creaJugador()
      };

    var jugador = {
    id: 0,
    nombre:'',
    status: false,
    puntos:0
    }

   function nuevaId(){
     var max = 0;
      for( var i = 0 ; i<jugadores.length ; i++ ){
        if( max < jugadores[i].id){
          max = jugadores[i].id;
        }
      }
     return max + 1;
   }

   var nuevoJugador = Object.create(jugador);
    nuevoJugador.id = nuevaId();
    nuevoJugador.nombre = nombre;
    nuevoJugador.status = true;
    nuevoJugador.puntos = 0;

    jugadores.push(nuevoJugador);

   return welcome()
  } 
  // Se prepara la partida
  function setUp(){
    // creamos carton
    function generaNumerosCarton(){
     var usados = []; 
     for( var i = 0 ; i<carton.length ; i++){
       var num = Math.round(Math.random()*99);  
       if( usados.includes( num ) === true || num === 0 || num === undefined ){
         return generaNumerosCarton();
       } 
       carton[i].numero = num;
       usados.push(num);
     }   
    }
    function aceptaCarton(){
      var respuesta = confirm('Te gusta este cartón? o prefieres otro ? Acepta para jugar o Cancela para obtener otro cartón..');
      switch(respuesta){
        case true:
          partida();
          break;
        case false:
          setUp();
          break;
      }
    }
    function creaNumBombo(){  // Crea los números del bombo
      while( bombo.length < 98 ){
        var num = Math.ceil( Math.random()*99 );
          if( bombo.indexOf(num) === -1 && num !== 0 ){
          bombo.push(num);
          }
      }
      bombo.sort(function(a,b){ return a - b});
    };

    creaNumBombo();
    generaNumerosCarton()
    
    console.log(' ...........................................................................' );
    console.log('Carton :')
    console.log( carton[0].numero+' | '+carton[1].numero+' | '+carton[2].numero+' | '+carton[3].numero+' | '+carton[4].numero );
    console.log( carton[5].numero+' | '+carton[6].numero+' | '+carton[7].numero+' | '+carton[8].numero+' | '+carton[9].numero  );
    console.log( carton[10].numero+' | '+carton[11].numero+' | '+carton[12].numero+' | '+carton[13].numero+' | '+carton[14].numero  );
    console.log(' ===========================================================================' );
    
    setTimeout(function (){ aceptaCarton();}, 2000)
  }
  //Comienza la partida
  function partida(){
    alert(' Reglas Skylab Bingo :\n \nPor cada turno pierdes 1 punto ,\npor cada match ganas 3 puntos ,\npor línea ganas 5 puntos ,\ny por bingo 15 puntos . \n\nSuerte! :)')
    // Números del bombo
    function numerosBombo( ){
      var num = Math.round(Math.random()*bombo.length);
      if( usadosBombo.includes( num ) === true || num === 0 || num === undefined ){
        return numerosBombo()
      } 
     usadosBombo.push(num);
     console.log('El número que ha salido es :'+ num);
     puntos--;
     contador++;
     checkNumero(num);
    }
    // Busco si hay match
    function checkNumero(val){

      for( var i = 0 ; i<carton.length; i++ ){
        if(carton[i].numero === val){
          carton[i].match = true;
          carton[i].numero = 'X';
          puntos+=3;
          counterMatch++;
        }
      }

      if( estadoLinea === false && carton[0].match === true && carton[1].match === true && carton[2].match === true && carton[3].match === true && carton[4].match === true ){
        estadoLinea = true;
        puntos+=5;
        alert('*** Linea!! ***');
      }
      if( estadoLinea === false && carton[5].match === true && carton[6].match === true && carton[7].match === true && carton[8].match === true && carton[9].match === true ){
        estadoLinea = true;
        puntos+=5;
        alert('*** Linea!! ***');
      }
      if( estadoLinea === false && carton[10].match === true && carton[11].match === true && carton[12].match === true && carton[13].match === true && carton[14].match === true ){
        estadoLinea = true;
        puntos+=5;
        alert('*** Linea!! ***');
      }
      if( counterMatch === 15 ){
        puntos+=15;
        return resumen();
      }
    mostrarDatos()
    }
    // Muestro por consola
    function mostrarDatos(){
    console.log(' ...........................................................................' );
    console.log('Carton :')
    console.log( carton[0].numero+' | '+carton[1].numero+' | '+carton[2].numero+' | '+carton[3].numero+' | '+carton[4].numero );
    console.log( carton[5].numero+' | '+carton[6].numero+' | '+carton[7].numero+' | '+carton[8].numero+' | '+carton[9].numero  );
    console.log( carton[10].numero+' | '+carton[11].numero+' | '+carton[12].numero+' | '+carton[13].numero+' | '+carton[14].numero  ); 
    console.log('Jugador: '+jugadorActivo.nombre+' Puntos :'+puntos+' Turnos: '+contador)
    console.log(' ***************************************************************************' );
    setTimeout(function (){ repetimos();}, 2000)
    }
    // Tiramos otra bola?
    function repetimos(){
      var respuesta = confirm('Tiramos otra bola?')
      switch(respuesta){
        case true:
          numerosBombo();
          break;
        case false:
          console.log('Hasta la próxima ! Gracias por jugar'); 
          break;
      }
    }
    function resumen(){
      var activo = jugadores.find(function(x){ return x.id === jugadorActivo.id; });

      function actualizaPuntos(){
        for(var i in jugadores){
          if(jugadores[i].id === jugadorActivo.id){
            jugadores[i].puntos = puntos;
          }
        }
      }
      actualizaPuntos()
      
      console.log(' ***************************************************************************' );
      console.log('Carton :')
      console.log( carton[0].numero+' | '+carton[1].numero+' | '+carton[2].numero+' | '+carton[3].numero+' | '+carton[4].numero );
      console.log( carton[5].numero+' | '+carton[6].numero+' | '+carton[7].numero+' | '+carton[8].numero+' | '+carton[9].numero  );
      console.log( carton[10].numero+' | '+carton[11].numero+' | '+carton[12].numero+' | '+carton[13].numero+' | '+carton[14].numero  );
      console.log('Jugador: '+jugadorActivo.nombre+' Puntos :'+puntos+' Turnos: '+contador);
      console.log(' ***************************************************************************' );

     alert('***************  Bingo!!  ***************\n Felicidades has ganado');
      
     var players = jugadores.sort(function(a,b){ return b.puntos - a.puntos});       
     
     console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' ); 
     console.log('Top 5 HighScore Skylab Bingo: ');
     console.log('1 - '+players[0].nombre+' : '+players[0].puntos+' puntos.');
     console.log('2 - '+players[1].nombre+' : '+players[1].puntos+' puntos.');
     console.log('3 - '+players[2].nombre+' : '+players[2].puntos+' puntos.');
     console.log('4 - '+players[3].nombre+' : '+players[3].puntos+' puntos.');
     console.log('5 - '+players[4].nombre+' : '+players[4].puntos+' puntos.');
     console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' );
    
    setTimeout(function (){ repetirPartida();}, 1000);      
    }
    function repetirPartida(){
      var respuesta = confirm('Jugamos otra partida?');
      switch(respuesta){
        case true:
          reset();
          welcome();
          break;
        case false:
          console.log('Hasta la próxima ! Muchas gracias por jugar'); 
          break;
      }  
    }
    // Volvemos todas las variables al inicio para nuevo Juego
    function reset(){
      for( var i = 0; i<carton.length;i++){
        carton[i].numero = 0;
        carton[i].match = false;
      }
      bombo = []; usadosBombo = [];
      counterMatch = 0 ; contador = 0 ; puntos = 100 ; estadoLinea = false;  
    }

  numerosBombo();  
  }
  
 welcome();  
}

bingo();