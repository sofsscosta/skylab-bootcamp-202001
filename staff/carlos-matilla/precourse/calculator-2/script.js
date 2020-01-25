var pantalla =  document.getElementById('abajo');
var pantallaMemoria = document.getElementById('arriba');
var memoria = [];
var valores = [];
var resultado = 0;

function num(num){
    pantalla.innerHTML += num
    memoria.push(num)
}

function calc(signo) {
   valores.push(memoria.join(''))
   valores.push(signo)
   memoria = [];
   pantallaMemoria.innerHTML = "";
   pantalla.innerHTML = "";
   pantallaMemoria.innerHTML += valores.join(' ')
}

function igual() {
    valores.push(memoria.join(''))
    if(Number.isInteger(eval(valores.join('')))){
        resultado=eval(valores.join(''))
    }else {resultado=eval(valores.join('')).toFixed(3)}
    pantallaMemoria.innerHTML = "";
    pantalla.innerHTML = "";
    pantallaMemoria.innerHTML += valores.join(' ')
    pantalla.innerHTML = resultado;
    memoria = [];
    valores = [];
    valores[0]= resultado;
}

function reiniciar(){
    pantallaMemoria.innerHTML = "";
    pantalla.innerHTML = "";
    memoria = [];
    valores = [];
    resultado = 0;
}

function del(){
    memoria = [];
    pantalla.innerHTML = "";
}