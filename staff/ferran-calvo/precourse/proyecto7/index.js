var numbers="";
var resultado = 0;

function displayNumber(n){
    if (document.getElementById("barraOperaciones").innerHTML === "0" & n!= "."){
        document.getElementById("barraOperaciones").innerHTML = n.toString();
    }
    else if(document.getElementById("barraOperaciones").innerHTML === "-0" & n!= "."){
        document.getElementById("barraOperaciones").innerHTML = "-" + n.toString();
    }
    else{
        document.getElementById("barraOperaciones").innerHTML += n.toString();
    }
}
function decideOperation(o){
    if (document.getElementById("barraOperaciones").innerHTML == "0" & o == "-"){
        document.getElementById("barraOperaciones").innerHTML = o + "0";
    }
    else{
        numbers += document.getElementById("barraOperaciones").innerHTML + o;
        document.getElementById("barraOperaciones").innerHTML = "0";
    }
}
function showResult(){
    numbers += document.getElementById("barraOperaciones").innerHTML;
    resultado = eval(numbers);
    document.getElementById("barraOperaciones").innerHTML = resultado.toString();
    numbers="";
}
function clean(){
    document.getElementById("barraOperaciones").innerHTML = "0";
    numbers = "";
}
function back(){
    document.getElementById("barraOperaciones").innerHTML = document.getElementById("barraOperaciones").innerHTML.slice(0,(document.getElementById("barraOperaciones").innerHTML).length-1);
    if (document.getElementById("barraOperaciones").innerHTML == ""){
        document.getElementById("barraOperaciones").innerHTML = "0";
    }
}