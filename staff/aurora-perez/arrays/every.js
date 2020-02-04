'use strict'

function every (array, expression) {
    if (!(array instanceof Array)) {throw new TypeError (array + ' is not an array.')};
    if (typeof expression !== 'function') {throw new TypeError (expression + ' is not a function.')};

    var contador = 0;
    for (var i = 0; i < array.length; i++){
        expression(array[i])? contador++ : contador+=0;
    };
    contador===array.length ? contador=true : contador = false;
    return contador;
};