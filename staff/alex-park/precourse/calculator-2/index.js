var zeroButton = document.getElementById("zero");
var oneButton = document.getElementById("one");
var twoButton = document.getElementById("two");
var threeButton = document.getElementById("three");
var fourButton = document.getElementById("four");
var fiveButton = document.getElementById("five");
var sixButton = document.getElementById("six");
var sevenButton = document.getElementById("seven");
var eightButton = document.getElementById("eight");
var nineButton = document.getElementById("nine");
var result = document.getElementById("result");
var sumButton = document.getElementById("plus");

var temp = '';
var num1 = '';
var operator = '';
var num2 = '';
var pointCounter1 = false;
var pointCounter2 = false;


//-------------------------------------------------------------------
//Funciones más generales
function restartCounter () {
    temp = '';
    num1 = '';
    operator = '';
    num2 = '';
    result.innerHTML = "-";
    pointCounter1 = false;
    pointCounter2 = false;
};

function keepCalculating () {
    num1 = '';
    operator = '';
    num2 = '';
    if (temp.indexOf(".") !== -1) {
        pointCounter1 = true;
    } else {
        pointCounter1 = false;
    };
    
    pointCounter2 = false;
    finalResult = '';
};

function seeNumber () {
    result.innerHTML=temp;
};

function tempRestarter () {
    if (operator !== "") {
        temp = "";
    };
};

function cancel () {
    temp = temp.slice(0, temp.length-1)
    result.innerHTML=temp;

    if (temp.length === 0) {
        result.innerHTML="-";
        temp='';
    }
};

//--------------------------------------------------------------------
//Funciones para proyectar números en pantalla
function point() {
    if (pointCounter1 === false && operator === "") {
        if (temp.length === 9) {
            temp+="";
        } else {
            temp+=".";
            result.innerHTML=temp;
            pointCounter1 = true;
        };

    } else if (pointCounter2 === false && operator !== "") {
        if (temp.length === 9) {
            temp+="";
        } else {
            temp+=".";
            result.innerHTML=temp;
            pointCounter2 = true;
        };
    };
};

function zero () {
    if (temp.length === 9) {
        temp+="";
    } else {
        temp+=zeroButton.innerHTML;
        result.innerHTML=temp;
    };
};

function one () {
    if (temp.length === 9) {
        temp+="";
    } else {
        temp+=oneButton.innerHTML;
        result.innerHTML=temp;
    };
};

function two () {
    if (temp.length === 9) {
        temp+="";
    } else {
        temp+=twoButton.innerHTML;
        result.innerHTML=temp;
    };
};

function three () {
    if (temp.length === 9) {
        temp+="";
    } else {
        temp+=threeButton.innerHTML;
        result.innerHTML=temp;
    };
};

function four () {
    if (temp.length === 9) {
        temp+="";
    } else {
        temp+=fourButton.innerHTML;
        result.innerHTML=temp;
    };
};

function five () {
    if (temp.length === 9) {
        temp+="";
    } else {
        temp+=fiveButton.innerHTML;
        result.innerHTML=temp;
    };
};

function six () {
    if (temp.length === 9) {
        temp+="";
    } else {
        temp+=sixButton.innerHTML;
        result.innerHTML=temp;
    };
};

function seven () {
    if (temp.length === 9) {
        temp+="";
    } else {
        temp+=sevenButton.innerHTML;
        result.innerHTML=temp;
    };
};

function eight () {
    if (temp.length === 9) {
        temp+="";
    } else {
        temp+=eightButton.innerHTML;
        result.innerHTML=temp;
    };
};

function nine () {
    if (temp.length === 9) {
        temp+="";
    } else {
        temp+=nineButton.innerHTML;
        result.innerHTML=temp;
    };
};

//-------------------------------------------------------------
//Funciones para operadores
function sumOperator () {
    if (operator !== "") {
        temp+="";
    } else if (temp.length === 9) {
        temp+="";
    } else {
        operator="+";
        temp+=operator;
        result.innerHTML=temp;
    };
};

function minusOperator () {
    if (operator !== "") {
        temp+="";
    } else if (temp.length === 9) {
        temp+="";
    } else {
        operator="-";
        temp+=operator;
        result.innerHTML=temp;
    };
};

function multOperator () {
    if (operator !== "") {
        temp+="";
    } else if (temp.length === 9) {
        temp+="";
    } else {
        operator="*";
        temp+=operator;
        result.innerHTML=temp;
    };
};

function divOperator () {
    if (operator !== "") {
        temp+="";
    } else if (temp.length === 9) {
        temp+="";
    } else {
        operator="/";
        temp+=operator;
        result.innerHTML=temp;
    };
};

//--------------------------------------------------------------
//Funciones para los cálculos
function sum(num1, num2) {

    var finalResult = (parseFloat(num1)+parseFloat(num2))
    if (finalResult % 1 !== 0) {
        finalResult = finalResult.toFixed(3);
    }
    
    temp = finalResult.toString();
    result.innerHTML= temp;
    keepCalculating();
};

function minus(num1, num2) {
    var finalResult = (parseFloat(num1)-parseFloat(num2));
    if (finalResult % 1 !== 0) {
        finalResult = finalResult.toFixed(3);
    };

    temp = finalResult.toString();
    result.innerHTML= temp;
    keepCalculating();
};

function multiply (num1, num2) {
    var finalResult = (parseFloat(num1)*parseFloat(num2));
    if (finalResult % 1 !== 0) {
        finalResult = finalResult.toFixed(3);
    };

    temp = finalResult.toString();
    result.innerHTML= temp;
    keepCalculating();
};

function divide (num1, num2) {
    if (num2 === "0") {
        var finalResult = "∞";
        result.innerHTML = finalResult;
        temp = '';
        keepCalculating();

    } else {
        var finalResult = (parseFloat(num1)/parseFloat(num2));
        if (finalResult % 1 !== 0) {
            finalResult = finalResult.toFixed(3);
        };

        temp = finalResult.toString();
        result.innerHTML= temp;
        keepCalculating();
    };
};

//--------------------------------------------------------------
//Función para la igualación
function calculator () {
    num1 = temp.slice(0, temp.indexOf(operator));
    num2 = temp.slice(temp.indexOf(operator)+1);
    
    if (operator === "+") {
        sum(num1,num2);
    } else if (operator === "-") {
        minus(num1,num2);
    } else if (operator === "*") {
        multiply(num1,num2);
    } else if (operator === "/") {
        divide(num1,num2);
    };
};
