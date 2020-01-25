var operation = "";
var numbers=[];
var resultado = 0;

function displayNumber(n){
    document.getElementById("barraOperaciones").innerHTML += n.toString();
}
function decideOperation(o){
    if (document.getElementById("barraOperaciones").innerHTML == "" & o == "-"){
        document.getElementById("barraOperaciones").innerHTML += o;
    }
    else{
        if (numbers.length = 2){
            showResult();
        }
        operation = o;
        numbers.push(parseFloat(document.getElementById("barraOperaciones").innerHTML));
        document.getElementById("barraOperaciones").innerHTML = "";
        console.log(numbers);
    }
}
function showResult(){
    numbers.push(parseFloat(document.getElementById("barraOperaciones").innerHTML));
    if (operation == "+"){
        sum(numbers);
    }
    else if (operation == "-"){
        substraction(numbers);
    }
    else if (operation == "x"){
        multiplication(numbers);
    }
    else if (operation == "1"){
        division(numbers);
    }
    document.getElementById("barraOperaciones").innerHTML = resultado.toString();
    operation = "";
    numbers=[];
}
function sum(array){
    resultado = array[0] + array[1];
}
function substraction(array){
    resultado = array[0] - array[1];
}
function multiplication(array){
    resultado = array[0] * array[1];
}
function division(array){
    resultado = array[0] / array[1];
}
function clean(){
    document.getElementById("barraOperaciones").innerHTML = "";
    numbers = [];
}
function back(){
    document.getElementById("barraOperaciones").innerHTML = document.getElementById("barraOperaciones").innerHTML.slice(0,(document.getElementById("barraOperaciones").innerHTML).length-1);
}