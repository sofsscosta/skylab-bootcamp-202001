//Declaro los eventos para cada una de las teclas.
document.getElementById("reset").addEventListener("click", acFunc);
document.getElementById("borrar").addEventListener("click", borrFunc);
document.getElementById("division").addEventListener("click", divisFunc);
document.getElementById("seven").addEventListener("click", num7);
document.getElementById("eight").addEventListener("click", num8);
document.getElementById("nine").addEventListener("click", num9);
document.getElementById("multi").addEventListener("click", multiFunc);
document.getElementById("four").addEventListener("click", num4);
document.getElementById("five").addEventListener("click", num5);
document.getElementById("six").addEventListener("click", num6);
document.getElementById("menos").addEventListener("click", menosFunc);
document.getElementById("one").addEventListener("click", num1);
document.getElementById("two").addEventListener("click", num2);
document.getElementById("three").addEventListener("click", num3);
document.getElementById("mas").addEventListener("click", masFunc);
document.getElementById("zero").addEventListener("click", num0);
document.getElementById("coma").addEventListener("click", comaFunc);
document.getElementById("igual").addEventListener("click", igualFunc);

//Declaro cada una de las funciones incluidas en los eventos
//Para resetear toda la pantalla declaro la siguiente función:
function acFunc(){
    var reset = [];
    document.getElementById("pantalla").innerHTML = reset;
}

//Las siguientes funciones permiten que en la pantalla de la calculadora se muestren los signos o números que tecleemos.
function divisFunc(){
    var display = document.getElementById("pantalla").innerHTML;
    var dividir = document.getElementById("division").innerHTML;
    document.getElementById("pantalla").innerHTML = display + "" + dividir;
}
function num7(){
    var display = document.getElementById("pantalla").innerHTML;
    var siete = document.getElementById("seven").innerHTML;
    document.getElementById("pantalla").innerHTML = display + "" + siete;
}
function num8(){
    var display = document.getElementById("pantalla").innerHTML;
    var ocho = document.getElementById("eight").innerHTML;
    document.getElementById("pantalla").innerHTML = display + "" + ocho;
}
function num9(){
    var display = document.getElementById("pantalla").innerHTML;
    var nueve = parseInt(document.getElementById("nine").innerHTML);
    document.getElementById("pantalla").innerHTML = display + "" + nueve;
}
function multiFunc(){
    var display = document.getElementById("pantalla").innerHTML;
    var multiplicar = document.getElementById("multi").innerHTML;
    document.getElementById("pantalla").innerHTML = display + "" + multiplicar;
}
function num4(){
    var display = document.getElementById("pantalla").innerHTML;
    var cuatro = parseInt(document.getElementById("four").innerHTML);
    document.getElementById("pantalla").innerHTML = display + "" + cuatro;
}
function num5(){
    var display = document.getElementById("pantalla").innerHTML;
    var cinco = parseInt(document.getElementById("five").innerHTML);
    document.getElementById("pantalla").innerHTML = display + "" + cinco;
}
function num6(){
    var display = document.getElementById("pantalla").innerHTML;
    var seis = parseInt(document.getElementById("six").innerHTML);
    document.getElementById("pantalla").innerHTML = display + "" + seis;
}
function menosFunc(){
    var display = document.getElementById("pantalla").innerHTML;
    var restar = document.getElementById("menos").innerHTML;
    document.getElementById("pantalla").innerHTML = display + "" + restar;
}
function num1(){
    var display = document.getElementById("pantalla").innerHTML;
    var uno = parseInt(document.getElementById("one").innerHTML);
    document.getElementById("pantalla").innerHTML = display + "" + uno;
}
function num2(){
    var display = document.getElementById("pantalla").innerHTML;
    var dos = parseInt(document.getElementById("two").innerHTML);
    document.getElementById("pantalla").innerHTML = display + "" + dos;
}
function num3(){
    var display = document.getElementById("pantalla").innerHTML;
    var tres = parseInt(document.getElementById("three").innerHTML);
    document.getElementById("pantalla").innerHTML = display + "" + tres;
}
function masFunc(){
    var display = document.getElementById("pantalla").innerHTML;
    var sumar = document.getElementById("mas").innerHTML;
    document.getElementById("pantalla").innerHTML = display + "" + sumar;
}
function num0(){
    var display = document.getElementById("pantalla").innerHTML;
    var cero = parseInt(document.getElementById("zero").innerHTML);
    document.getElementById("pantalla").innerHTML = display + "" + cero;
}
function comaFunc(){
    var display = document.getElementById("pantalla").innerHTML;
    var coma = document.getElementById("coma").innerHTML;
    document.getElementById("pantalla").innerHTML = display + "" + coma;
}
//Con la siguiente función borraremos el último carácter que se muestre en la pantalla
//Para ello convertimos los caracteres en un array y eliminamos el último mediante splice()
function borrFunc(){
    var display = document.getElementById("pantalla").innerHTML;
    if(display.includes("")){
        var array = [];
        array.push(display);
        array = display.split("", 20);
        array.splice(array.length-1, 1);
    }
    document.getElementById("pantalla").innerHTML = array.join("");
}

//Esta función es llamada cuando apretamos la tecla igual y realiza las correspondientes operaciones matemáticas en función del signo que se muestre en la pantalla de la calculadora
function igualFunc(){
    var display = document.getElementById("pantalla").innerHTML;
    if(display.includes("+")){
        var array = [];
        array.push(display);
        array = display.split("+", 10);
        var resultadoFinal = 0;
        for(var i = 0; i < array.length; i++){
            resultadoFinal += parseFloat(array[i]);
        }
        document.getElementById("pantalla").innerHTML = resultadoFinal;
    } else if (display.includes("-")){
        var array = [];
        array.push(display);
        array = display.split("-", 10);
        for(var i = 0; i < array.length; i++){
            if(!i){
                var resultadoFinal = array[0];  
            } else {
                resultadoFinal -= parseFloat(array[i]);
            }
        }
        document.getElementById("pantalla").innerHTML = resultadoFinal;
    } else if (display.includes("x")){
        var array = [];
        array.push(display);
        array = display.split("x", 10);
        var resultadoFinal = 1;
        for(var i = 0; i < array.length; i++){
            resultadoFinal *= parseFloat(array[i]);
        }
        document.getElementById("pantalla").innerHTML = resultadoFinal;
    } else if (display.includes("÷")){
        var array = [];
        array.push(display);
        array = display.split("÷", 10);
        for(var i = 0; i < array.length; i++){
            if(!i){
                var resultadoFinal = array[0];
            } else {
                resultadoFinal /= parseFloat(array[i]);
            }
        }
        document.getElementById("pantalla").innerHTML = resultadoFinal;
    }
}
