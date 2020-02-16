var array1 = ['me', 'gustan', 'zanahorias']


function join (array, separator) {
    var string
    if (separator != undefined) {
        for (var i = 0; i<array.length; i++) { string+= (separator + array[i]) } }
    else { 
        for (var i = 0; i<array.length; i++) { string+= array[i] } }

    console.log(string)
}

join (array1, ' ')