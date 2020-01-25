//variables
var operA = "";
var operB = "";
var existeOperacion = false;
//variable que guardara la operación a realizar
var operacion;
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
//
//evento para resetear la calculadora
var ac = document.getElementById('ac').addEventListener('click',resetear);

function resetear(){
    pantalla.innerHTML = '';
    operA = 0;
    operB = 0;
    operacion = '';
}
//
//funcion para limpiar la pantalla
//cada vez que clicamos una operación
function limpiarPantalla(){
    pantalla.innerHTML = '';
}

//operaciones
var suma = document.getElementById('suma').addEventListener('click',function(){
    operA = pantalla.textContent;
    operacion = '+';
    limpiarPantalla();
});
var resta = document.getElementById('resta').addEventListener('click',function(){
    operA = pantalla.textContent;
    operacion = '-';
    limpiarPantalla();
});
var multiplicar = document.getElementById('multi').addEventListener('click',function(){
    operA = pantalla.textContent;
    operacion = 'x';
    limpiarPantalla();
});
var dividir = document.getElementById('divi').addEventListener('click',function(){
    operA = pantalla.textContent;
    operacion = '/';
    limpiarPantalla();
});
var igual = document.getElementById('igual').addEventListener('click',()=>{
    operB = pantalla.textContent;
    limpiarPantalla();
    resultado();
});

function resultado(){
    var res = 0;

    switch(operacion){
        case '+':
            res=parseFloat(operA)+parseFloat(operB);
            break;
        case '-':
            res=parseFloat(operA)-parseFloat(operB);
            break;
        case 'x':
            res=parseFloat(operA)*parseFloat(operB);
            break;
        case '/':
            res=parseFloat(operA)/parseFloat(operB);
            break;
    }
    resetear();
    //pintamos en resultado
    //si es entero, no mostramos decimales
    //si es decimal, pintamos 6 decimales
    if(Number.isInteger(res)){
        pantalla.innerHTML = res;
    }else{
        pantalla.innerHTML = res.toFixed(6);
    }
}