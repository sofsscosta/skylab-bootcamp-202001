//crear tablero de juego
function crearTablero(){
// Obtenemos la referencia del elemento contenedor del contenido
var tablero = document.querySelector('.container');
// Creamos un elemento <table> tabla
var tabla = document.createElement("table");   
//y un elemento tbody cuerpo de la tabla
var tblBody = document.createElement("tbody");
// Creamos las celdas
for (var i = 0; i < 6; i++) {
  // Creamos las hileras de la tabla
  var fila = document.createElement("tr");

  for (var j = 0; j < 7; j++) {
    // Crea un elemento <td> columnas de la tabla
    var celda = document.createElement("td");
    celda.style.width = 90 + 'px';
    celda.style.height = 90 + 'px';
    celda.setAttribute('class', 'casilla');
    //añadimos las celdas a las filas
    fila.appendChild(celda);
  }
// agregamos la hilera al final de la tabla (al final del elemento tblbody)
tblBody.appendChild(fila);
}
// posicionamos el <tbody> debajo del elemento <table>
tabla.appendChild(tblBody);

// añade la tabla dentro del div conetendor 
tablero.appendChild(tabla);

}
//llamada a la función para crear el tablero.
crearTablero();

//+++++++++++++++++++++++++++++++++++++++++//
var tablaFila = document.getElementsByTagName('tr');
var tablaCeldas = document.getElementsByTagName('td');
var tablaCasilla = document.querySelector('.casilla');
var player = document.getElementById('player');
var reset = document.querySelector('.btn-reset');

var tiradas = 0;

//ubicamos las casillas

for(var i=0; i<tablaCeldas.length; i++){
  tablaCeldas[i].addEventListener('click',function(e){
    //marcar casilla indicando los dos ejes
    console.log(e.target.parentElement.rowIndex, e.target.cellIndex);
  });
}


//Jugadores
while(!player1){
  var player1 = prompt('Jugador rojo, Introduce tu nombre...');
}
player1Color = 'red';

while(!player2){
  var player2 = prompt('Jugador azul, Introduce tu nombre...');
}
player2Color = 'blue';

var jugadorActual = 1;
player.textContent = 'Turno para:' + " " + player1;
//

//VISTO EN UN TUTORIAL PERO NO ACABO DE ENTENDERLO

Array.prototype.forEach.call(tablaCeldas,function(celda){
  console.log(celda);
  celda.addEventListener('click', cambiarColor);
  celda.style.backgroundColor = "white";
});

for(var i=0; i<tablaCeldas.length; i++){
  //evento click para cada una de las casillas td
  tablaCeldas[i].addEventListener('click', cambiarColor);
  //color de fondo blanco a todas las casillas
  tablaCeldas[i].style.backgroundColor = "white";
}


function cambiarColor(e){
  var columna = e.target.cellIndex;
  var fila = [];
  
  for(var i = 5; i > -1; i--){
    if(tablaFila[i].children[columna].style.backgroundColor == 'white'){
      fila.push(tablaFila[i].children[columna]);
      if(jugadorActual === 1){
        fila[0].style.backgroundColor = player1Color;
        tiradas++;
        //comprobar si hay ganador rojo
        if(horizontal() || vertical() || diagonalIzquierda() || diagonalDerecha()){
          player.textContent = 'Ganador:' + ' ' + player1;
          player.style.color = 'Green';
          return (alert('Has ganado' + ' ' + player1));
        }else if(empate()){
          return(alert('Empate'));
        }
        

        player.textContent = 'Turno para:' + " " + player2;
        
        return jugadorActual = 2;
      
      }else{
        fila[0].style.backgroundColor = player2Color;
        tiradas++;
        //comprobar si hay ganador azul
        if(horizontal() || vertical() || diagonalIzquierda() || diagonalDerecha()){
          player.textContent = 'Ganador:' + ' ' + player2;
          player.style.color = 'Green';
          return (alert('Has ganado' + ' ' + player2));
        }else if(empate()){
          return(alert('Empate'))
        }
        player.textContent = 'Turno para:' + " " + player1;

        return jugadorActual = 1;
      }
    }
  }
}
//+++++++++++++++++++++++++++++++++++++++++//
function comprobarColores(uno,dos,tres,cuatro){
  return (uno == dos && uno === tres && uno === cuatro && uno !== 'white');
}
//comprobar ganador horizontal
function horizontal(){
  for(var fila = 0; fila < tablaFila.length; fila++){
    for(var col = 0; col < 4; col++){
      if(comprobarColores(tablaFila[fila].children[col].style.backgroundColor,tablaFila[fila].children[col+1].style.backgroundColor,tablaFila[fila].children[col+2].style.backgroundColor,tablaFila[fila].children[col+3].style.backgroundColor)){
        
        return true;

      }
    }
  }
}
//comprobar ganador vertical
function vertical(){
  for(var col = 0; col < 7; col++){
    for(var fila = 0; fila < 3; fila++){
      if(comprobarColores(tablaFila[fila].children[col].style.backgroundColor,tablaFila[fila+1].children[col].style.backgroundColor,tablaFila[fila+2].children[col].style.backgroundColor,tablaFila[fila+3].children[col].style.backgroundColor)){
        return true;
      }
    }
  }
}
//comprobar ganador primera diagonal
function diagonalIzquierda(){
  for(var col = 0; col < 4; col++){
    for(var fila = 0; fila < 3; fila++){
      if(comprobarColores(tablaFila[fila].children[col].style.backgroundColor,tablaFila[fila+1].children[col+1].style.backgroundColor,tablaFila[fila+2].children[col+2].style.backgroundColor,tablaFila[fila+3].children[col+3].style.backgroundColor)){
        return true;  
        
      }
    }
  }
}

//comprobar ganador primera diagonal
function diagonalDerecha(){
  for(var col = 0; col < 4; col++){
    for(var fila = 5; fila > 2; fila--){
      if(comprobarColores(tablaFila[fila].children[col].style.backgroundColor,tablaFila[fila-1].children[col+1].style.backgroundColor,tablaFila[fila-2].children[col+2].style.backgroundColor,tablaFila[fila-3].children[col+3].style.backgroundColor)){
        return true;  
        
      }
    }
  }
}

function empate(){
  if(tiradas === 42){
    return true;
  }
}

reset.addEventListener('click',function(){
  location.reload();
});
