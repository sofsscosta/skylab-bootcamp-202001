//creacion de variables de cada boton y variables usadas en funciones

var result=document.getElementById("result");
var ac=document.getElementById("ac");
var borrar=document.getElementById("borrar");
var division=document.getElementById("division");
var mult=document.getElementById("mult");
var resta=document.getElementById("resta");
var suma=document.getElementById("suma");
var punto=document.getElementById("punto");
var igual=document.getElementById("igual");
var uno=document.getElementById("1");
var dos=document.getElementById("2");
var tres=document.getElementById("3");
var cuatro=document.getElementById("4");
var cinco=document.getElementById("5");
var seis=document.getElementById("6");
var siete=document.getElementById("7");
var ocho=document.getElementById("8");
var nueve=document.getElementById("9");
var cero=document.getElementById("0");

var temp=""
var num1 = "";
var num2 = "";
var operador = "";


//botones de numero, ponerlos en string a la variable temp que se muestra en pantalla

uno.addEventListener("click", function(){
    if (temp.length>=9){
        temp+=""
    }else{
        temp+="1";
        result.innerHTML=temp;
    } 
});

dos.addEventListener("click", function(){
    if (temp.length>=9){
        temp+=""
    }else{
        temp+="2";
        result.innerHTML=temp;
    }
});

tres.addEventListener("click", function(){
    if (temp.length>=9){
        temp+=""
    }else{
        temp+="3";
        result.innerHTML=temp;
    }
});

cuatro.addEventListener("click", function(){
    if (temp.length>=9){
        temp+=""
    }else{
        temp+="4";
        result.innerHTML=temp;
    }
});

cinco.addEventListener("click", function(){
    if (temp.length>=9){
        temp+=""
    }else{
        temp+="5";
        result.innerHTML=temp;
    }
});

seis.addEventListener("click", function(){
    if (temp.length>=9){
        temp+=""
    }else{
        temp+="6";
        result.innerHTML=temp;
    }
});

siete.addEventListener("click", function(){
    if (temp.length>=9){
        temp+=""
    }else{
        temp+="7";
        result.innerHTML=temp;
    }
});

ocho.addEventListener("click", function(){
    if (temp.length>=9){
        temp+=""
    }else{
        temp+="8";
        result.innerHTML=temp;
    }
});

nueve.addEventListener("click", function(){ 
    if (temp.length>=9){
        temp+=""
    }else{
        temp+="9";
        result.innerHTML=temp;
    }
});

cero.addEventListener("click", function(){
    if (temp.length>=9){
        temp+=""
    }else{
        temp+="0";
        result.innerHTML=temp;
    }
});

punto.addEventListener("click", function(){
    if (temp.length>=9 || temp.includes(".")){
        temp+=""
    }else{
        temp+=".";
        result.innerHTML=temp;
    }
});



//botones de los operadores
suma.onclick=function(){
    if(operador!==""){
        operator+=""
    }else{
        num1=temp;
        temp="";
        operador="+"
    }
}

resta.onclick=function(){
    if(operador!==""){
        operator+=""
    }else{
        num1=temp;
        temp="";
        operador="-"
    };
}

division.onclick=function(){
    if(operador!==""){
        operator+=""
    }else{
        num1=temp;
        temp="";
        operador="/"
    };
}

mult.onclick=function(){
    if(operador!==""){
        operator+=""
    }else{
        num1=temp;
        temp="";
        operador="X"
    }
}


// funcion cuando le das a =, dependiendo de que operador hayas puesto, te manda a su funcion
igual.onclick=function(){
    if(operador=="+"){
        funSumar()
    }else if(operador=="-"){
        funRestar()
    }else if(operador=="/"){
        funDividir()
    }else if(operador=="X"){
        funMultiplicar()
    };
};


//funciones de operaciones
function funSumar (){
    num2=temp;
    var resultSuma=parseFloat(num1)+parseFloat(num2);
    if (resultSuma % 1 !== 0) {
        resultSuma = (resultSuma.toFixed(2)).toString();
    };
    temp=resultSuma;
    result.innerHTML=temp;
    operador="";
};

function funRestar (){
    num2=temp;
    var resultResta=parseFloat(num1)-parseFloat(num2);
    if (resultResta % 1 !== 0) {
        resultResta = (resultResta.toFixed(2)).toString();
    };
    temp=resultResta;
    result.innerHTML=temp;
    operador="";
};

function funDividir (){
    num2=temp;
    var resultDiv=parseFloat(num1)/parseFloat(num2);
    if (resultDiv % 1 !== 0) {
        resultDiv = (resultDiv.toFixed(2)).toString();
    };
    temp=resultDiv;
    result.innerHTML=temp;
    operador="";
};

function funMultiplicar (){
    num2=temp;
    var resultMul=parseFloat(num1)*parseFloat(num2);
    if (resultMul % 1 !== 0) {
        resultMul = (resultMul.toFixed(2)).toString();
    };
    temp=resultMul;
    result.innerHTML=temp;
    operador="";
};

//funcion limpiar 
ac.onclick=function(){
    temp="";
    result.innerHTML='0';
}

//funcion borrar
borrar.onclick=function(){     
    if (temp.length===1 || result.innerHTML === '0') {
        temp="";
        result.innerHTML='0'       
    }else{
        temp=temp.slice(0,-1);
        result.innerHTML=temp;  
    };
}
