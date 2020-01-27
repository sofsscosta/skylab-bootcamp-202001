var valorActual = ''
function numero(id){
    var valor = id.innerHTML;
    valorActual.length <= 20 ? valorActual = valorActual + valor: null;
    document.getElementById("actual").innerHTML = valorActual;    
}
function operacio(id){
    var valor = id.innerHTML;
    valorActual.length <= 20 ? valorActual = valorActual + valor: null;
    document.getElementById("actual").innerHTML = valorActual;
}
function igual(){
    var resultado = eval(valorActual);
    valorActual = resultado.toString();
    document.getElementById("actual").innerHTML = valorActual;
    document.getElementById("resultado").innerHTML = resultado;
}
function ac(){
    valorActual = '';
    resultado = 0;
    document.getElementById("actual").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}