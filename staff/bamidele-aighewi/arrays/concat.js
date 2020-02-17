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
    var output = [];

    for (var i = 0; i < args.length; i++) {
        var argument = args[i];
        if (argument instanceof Array){
            for(var x = 0; x < argument.length; x++){
                output[output.length] = argument[x];       
            }
        }else{
            output[output.length] = args[i];
        }
    }

    return output;
}