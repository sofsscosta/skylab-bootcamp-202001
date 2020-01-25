//guardamos la pantalla en una variable y la iniciamos limpia
var pantalla = document.getElementById('n-pantalla');
pantalla.innerHTML = '';
//eventos para pintar los numeros en pantalla mediante los botones
var cero = document.getElementById('cero').addEventListener('click',function(){
    pantalla.innerHTML += 0;
});
var uno = document.getElementById('uno').addEventListener('click',function(){
    pantalla.innerHTML += 1;    
});
var dos = document.getElementById('dos').addEventListener('click',function(){
    pantalla.innerHTML += 2;
});
var tres = document.getElementById('tres').addEventListener('click',function(){
    pantalla.innerHTML += 3;
});
var cuatro = document.getElementById('cuatro').addEventListener('click',function(){
    pantalla.innerHTML += 4;
});
var cinco = document.getElementById('cinco').addEventListener('click',function(){
    pantalla.innerHTML += 5;
});
var seis = document.getElementById('seis').addEventListener('click',function(){
    pantalla.innerHTML += 6;
});
var siete = document.getElementById('siete').addEventListener('click',function(){
    pantalla.innerHTML += 7;
});
var ocho = document.getElementById('ocho').addEventListener('click',function(){
    pantalla.innerHTML += 8;
});
var nueve = document.getElementById('nueve').addEventListener('click',function(){
    pantalla.innerHTML += 9;
});
var decimal = document.getElementById('decimal').addEventListener('click',function(){
    pantalla.innerHTML += '.';
});
//operaciones
var suma = document.getElementById('suma').addEventListener('click',function(){
    pantalla.innerHTML += '+';
});
var resta = document.getElementById('resta').addEventListener('click',function(){
    pantalla.innerHTML += '-';    
});
var multiplicar = document.getElementById('multi').addEventListener('click',function(){
    pantalla.innerHTML += '*';    
});
var dividir = document.getElementById('divi').addEventListener('click',function(){
    pantalla.innerHTML += '/';    
});
//
//evento para mostrar el resultado
var igual = document.getElementById('igual').addEventListener('click',function(){
    var stringPantalla = pantalla.textContent;
    var resultado = eval(stringPantalla);
    comprobarEntero(resultado);
});
//
//evento para resetear la calculadora
var ac = document.getElementById('ac').addEventListener('click',resetear);
function resetear(){
    pantalla.innerHTML = '';
}
//
//comprobar si el resultado es entero para mostrar o no decimales
function comprobarEntero(res){
    if(Number.isInteger(res)){
        pantalla.innerHTML = res;
    }else{
        pantalla.innerHTML = res.toFixed(6);
    }
}
