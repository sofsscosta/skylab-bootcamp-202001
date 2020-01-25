//Variables vacías para que number1 y number2 cojan los valores de add() y operator de las funciones operator...().
var number1='';
var number2='';
var operator='';

//Función para captar el number1 y number2 para operar.
function add(){
    if(number1===undefined || number1===''){  
        number1=document.getElementById("txtresultado2").value;
    }
    else{
        numbers = document.getElementById("txtresultado2").value.split(operator);
        number2 = numbers[numbers.length-1];
    }
};

//Funciones para realizar las operaciones sumar, restar, multiplicar y dividir.
//En el caso de division y multiplicación, si el resultado es un número decimal, se limitan a 3 dígitos los decimales.
function sumar(){
    var suma=(parseFloat(number1)+parseFloat(number2));
    document.getElementById("txtresultado").value=suma;
    number1=suma;
};  

function restar(){
    var resta=(parseFloat(number1)-parseFloat(number2));
    document.getElementById("txtresultado").value=resta;
    number1=resta;
};  

function multiplicar(){
    var multiplicacion=(parseFloat(number1)*parseFloat(number2));
    if (Number.isInteger(multiplicacion)){
        document.getElementById("txtresultado").value=multiplicacion;
    }else{
        document.getElementById("txtresultado").value=multiplicacion.toFixed(3);
    }
    number1=multiplicacion;
};

function dividir(){
    var division=(parseFloat(number1)/parseFloat(number2));
    if (Number.isInteger(division)){
        document.getElementById("txtresultado").value=division;
    }else{
        document.getElementById("txtresultado").value=division.toFixed(3);
    }
    number1=division;
};

//Funciones para captar el operador, en base al boton de la calculadora que se presione.
function operatorSumar(){
    operator='+';    
};

function operatorRestar(){
    operator='-';
};

function operatorDividir(){
    operator='/';
};
function operatorMultiplicar(){
    operator='x';
};
function operatorIgual(){
    operator='=';
};

//Función que engloba el resultado de las operaciones, según el operador, se ejecuta la función en base al operador.
function result(){
    if(operator==='+'){
        sumar();
    }else if(operator==='-'){
        restar();
    }else if(operator==='x'){
        multiplicar();
    }else if(operator==='/'){
        dividir();
    }
    number1=document.getElementById("txtresultado").value;
};

//Función para ponerlo todo a cero cuando clickemos AC.
function restaurar(){
    number1 = '';
    number2 = '';
    operator= '';
    document.getElementById("txtresultado").innerHTML='';
};

//Función para que no se puedan poner dos operadores seguidos, sino que si pongo otro se reemplace por el existente y que enlace una operación con otra.
function addValue(valor){
    if (number2!=''){
        var resultadoTxt= document.getElementById('txtresultado');
        switch(operator){
            case '+':
                sumar();
                number2='';
                number1=resultadoTxt.value;
                break;
            case '-':
                restar();
                number2='';
                number1=resultadoTxt.value;
                break;
            case 'x':
                multiplicar();
                number2='';
                number1=resultadoTxt.value;
                break;
            case '/':
                dividir();
                number2='';
                number1=resultadoTxt.value;
                break;
            case '=':
                add();
                number2='';
                number1=resultadoTxt.value;
        }
    }
    let container=document.getElementById("txtresultado2");
    let op = container.value.charAt(container.value.length-1);
    if (isNaN(op)){
        var newValue = container.value.replace(op,valor);
        container.value=newValue;
    }
    else{
        container.value+=valor;
    }
};

