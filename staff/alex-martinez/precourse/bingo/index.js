//variables
var cantadoBingo = false;
var tiradas = 0;
var aciertos = 0;
var linea1 = 0;
var linea2 = 0;
var linea3 = 0;
var cantadoLinea = false;
//bombo con los numeros del 1 al 99
var bombo = [];
//
//login
var nombre;
function usuario(){
    nombre = prompt('Introduce tu nombre:');
    if(nombre ===  null || nombre === ''){
        usuario();
    }else{
        console.log('Suerte '+nombre);
        return nombre;
    }
}
//
//carton con los numeros para jugar aleatorios y sin repetir
var carton = [];
function crearCarton(){
    for(var i=0; carton.length<15; i++){
        var numero = Math.floor(Math.random()*99)+1;
        if(carton.includes(numero) === false){
            carton.push(numero);
        }
    }
    return carton;
}
//mostrar el carton
function mostrarCarton(){
    console.log(
        carton[0],carton[1],carton[2],carton[3],carton[4],carton[5],carton[6],carton[7],carton[8],carton[9],carton[10],carton[11],carton[12],carton[13],carton[14]
    );
}
//
//llenar bombo del 1 al 99
function llenarBombo(){
    for(var i=1; i<100; i++){
        bombo.push(i);
    }
    return bombo;
}
//sacar bola
var bola;
function sacarNumBombo(){
    if(bombo.length>0){
        //numero aleatorio
        var nAleatorio = Math.floor(Math.random()*99)+1;
    }
    //almacena el numero aleatorio de la posición del array
    bola = bombo[nAleatorio];
    //se elimina el numero obtenido del bombo
    bombo.splice(nAleatorio,1);
    if(bola === undefined){
        sacarNumBombo();
    }else{
        console.log('¡El: '+bola+'!');
        return bola;
    }
}
//
//comprobar la bola sacada
function comprobarBola(n){
    for(var i=0; i<carton.length; i++){
        if(carton[i]===n){
            console.log('¡Lo tienes!');
            aciertos++;
            //comprobamos la posicion del numero acertado
            //para sumar en una de las lineas
            var posicion = carton.indexOf(n)+1;
            //console.log(posicion);
            if(posicion <= 5){
                linea1++;
            }else if(posicion > 5 && posicion <= 10){
                linea2++;
            }else if(posicion > 10){
                linea3++;
            }
            //tachamos el numero si lo tenemos
            carton[i] = "X";
        }
    }
    //cantar linea
    if(!cantadoLinea){
        if(linea1 === 5 || linea2 === 5 || linea3 === 5){
            console.log('¡Linea!');
            cantadoLinea = true;
        }
    }
    //cantar Bingo
    if(aciertos === 15){
        cantadoBingo = true;
        console.log('¡BINGO!');
    }
}
//

function volverJugar(){
    var volver = confirm('¿Quieres volver a jugar?');
        if(volver){    
            console.clear();
            cantadoBingo = false;
            tiradas = 0;
            aciertos = 0;
            linea1 = 0;
            linea2 = 0;
            linea3 = 0;
            cantadoLinea = false;
            carton = [];
            bombo = [];
            iniciar();
        }else{
            console.log('¡Hasta pronto! ' + nombre);
        }
}

function iniciar(){
    usuario();
    crearCarton();
    console.log('Este es tu cartón: ');
    mostrarCarton();
    llenarBombo();
    Bingo();
}
//funcion principal
function Bingo(){    
        var pregunta = confirm('¿Deseas continuar?');
        if(cantadoBingo === false && pregunta){
            sacarNumBombo();
            comprobarBola(bola);
            mostrarCarton();
            tiradas++; 
            Bingo();
        }else{
            console.log('Gracias por jugar');
            console.log('Cantidad de tiradas: '+ tiradas);
            volverJugar();
        }
}
console.log('Inicia la partida introduciendo: iniciar()');
