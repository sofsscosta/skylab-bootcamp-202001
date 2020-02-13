'use strict'

function splice (array, start=array.length, deleteCount) {
    if (!(array instanceof Array)) {throw new TypeError(array + ' is not an array.')};

    if (start > array.length) {start = array.length};
    if (start < 0) {start = array.length+start};
    if (array.length+start < 0) {start = 0};
    if (deleteCount === undefined) {deleteCount = 0; arguments.length++};
    if (deleteCount <= 0) {deleteCount = 0};
    

    var spliced = [];
    var result = [];

    if (deleteCount === 0) {
        if (arguments.length <= 3) {
            var i;

            for (i = start; i < array.length; i++) {
                spliced[spliced.length] = array[i];
            }
    
            for (i = 0; i < start; i++) {
                result[result.length] = array[i];
            }

            array.length = result.length;

            for (i = 0; i < result.length; i++) {
                array[i] = result[i];
            }

        } else { debugger

            for (i = 0; i < start; i++) {
                result[i] = array[i];
            }

            var j = arguments.length-(arguments.length-3);
            for (i = start; i < (start + (arguments.length-3)); i++) {
                result[i] = arguments[j];
                j++;
            }

            for (i = result.length; i < (array.length + (arguments.length-3)); i++) {
                result[i] = array[start];
                start++;
            }

            for (i = 0; i < result.length; i++) {
                array[i] = result[i];
            }
        }

        
        return spliced;
    } 
}