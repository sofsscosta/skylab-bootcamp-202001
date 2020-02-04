
function unshift(array, ...arguments) { 
    array.length += arguments.length;
    var it = arguments.length;
    var newArr= [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < it; j++) {
            newArr[j] = arguments[j];
        };
    };   

   return array;
};