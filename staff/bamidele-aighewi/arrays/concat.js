'use strict';

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

The concat() method is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array.

- return value
    A new Array instance.
*/

function concat() {
    if (!arguments.length) throw new RangeError('"concat" expects at least one parameter, none given');

    var args = arguments;
    //var output = arguments[0];
    var output = arguments[0] instanceof Array ? [] : '';
    var outputIsArray = output instanceof Array;

    var join = function(array, separator) {
        separator = typeof separator !== 'undefined' ? separator : ',';
        var result = '';

        for (var x = 0; x < array.length; x++) {
            result += array[x]
            if ((x + 1) !== array.length) {
                result += separator
            }
        }

        return result;
    }

    var toString = function (items) {
        var output = [];
        for (var x = 0; x < items.length; x++) {
            var item = items[x];
            if(item instanceof Array){
                output[output.length] = toString(item);
            }else{
                output[output.length] = item;
            }
        }

        return join(output, ',');
    }

    for (var x = 0; x < args.length; x++) {
        var item = args[x];
        if (outputIsArray) {
            //first argument is an array to let's construct an array
            output[output.length] = item;
        } else {
            //first argument is a string to let's construct a string
            output += typeof item === 'object' ? toString(item) : item;
        }
    }

    return output;
}