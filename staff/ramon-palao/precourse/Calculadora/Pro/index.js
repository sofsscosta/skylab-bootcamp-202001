var results = [];

function suma(){
    var acc = 0;
    //var numbers = [];
    for(num in arguments){
        acc+= arguments[num];
        //numbers.push(arguments[num]);
    }
    if(Number.isInteger(acc) === false){
        /*
        for (var i = 0; i < numbers.length; i++){
            results.push(numbers[i]+= 0).toFixed(3);
        }
        */
        //acc.toFixed(3);
        results.push(acc).toFixed(3);
        return results;
    } else {
        /*
        for (var i = 0; i < numbers.length; i++){
            results.push(acc)
        }
        */
        results.push(acc);
        return results;
    }
    //return results;
};
console.log(suma(3, 6.59909088, 2));

function resta(){
    var acc = arguments[0]; //ARREGLAR
    //var numbers = [];
    for(num in arguments){
        acc-= arguments[num];
        //numbers.push(arguments[num]);
    }
    if(Number.isInteger(acc) === false){
        /*
        for (var i = 0; i < numbers.length; i++){
            results.push(numbers[i]).toFixed(3);
        }
        */
        results.push(acc).toFixed(3);
    } else {
        /*
        for (var i = 0; i < numbers.length; i++){
            results.push(acc);
        }
        */
        results.push(acc);
    }
    return results;
};
//console.log(resta(10, 5, 3, 1));

function multiplicar(){
    var acc = 1;
    var numbers = [];
    for(num in arguments){
        acc*= arguments[num];
        numbers.push(arguments[num]);
    }
    if(Number.isInteger(acc) === false){
        for (var i = 0; i < numbers.length; i++){
            results.push(numbers[i]);
        }
        return results.join(" x ") + " = " + acc.toFixed(3);
    } else {
        for (var i = 0; i < numbers.length; i++){
            results.push(numbers[i]);
        }
        //results.join(" x ") + " = " + acc;
    }
    return results.join(" x ") + " = " + acc;
};
//console.log(multiplicar(2, 3, 3, 10));
var calculadoraPro = function(arguments){
    suma(arguments);
    resta(arguments);
    multiplicar(arguments);
    console.log(results);
};

//suma(3, 3, 9);
