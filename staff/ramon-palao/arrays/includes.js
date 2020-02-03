var a = ["cat", "dog", "dolphin", "lion"];

function includes(array, value, start){
if(!(array instanceof Array)) throw new TypeError(array + " is not an Array");
if(start && typeof start !== "number") throw new TypeError(start + " is not a number");
    if(start === undefined) start = 0;
    for (var i = start; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    }
    return false;
}

//console.log(includes(a, "cat", 2));
//Expected output: false
