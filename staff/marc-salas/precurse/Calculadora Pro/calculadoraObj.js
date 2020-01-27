var acumSum = 0;
var acumRest = 0;
var acumMult = 1;
var acumDiv = 1;
var value = 0;
var restSum = 0;
var restRest = 0;
var restMult = 0;
var restDiv = 0;
// object that saves the for kind of operations
var Operators = function(n,acum) {
    this.sum = acum + n;
    this.rest = acum - n;
    this.mult = acum * n;
    this.div = n / acum;
}


// ask for numbers
function ask(){
    value = (prompt('Inserti un nombre o deixi-ho en blanc per veure el resultat',''));
    if (value == null || isNaN( value ) ){ 
        alert('El nombre no és valid');
        ask();
    }else if (value.trim() ===""){
        result();
        return 0;
    }else{
        operations();
        acum();
        ask();
    }
}

// acumulation of all the operation we're making
function acum(){
    acumSum = restSum.sum;
    acumRest = restRest.rest;
    acumMult = restMult.mult;
    acumDiv = restDiv.div;
}

// display the result
function result(){
    console.log('suma: ' + acumSum + ' resta: ' + acumRest + ' multiplicació: ' + acumMult + ' divisió: ' + acumDiv);
}

// do the operations
function operations(){
    restSum = new Operators(Number(value),acumSum);
    restRest = new Operators(Number(value),acumRest);
    restMult = new Operators(Number(value),acumMult);
    restDiv = new Operators(Number(value),acumDiv);
}
ask();