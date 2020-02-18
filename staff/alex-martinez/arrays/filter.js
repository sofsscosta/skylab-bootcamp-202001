'use strict'

//Crea un nuevo array con los elementos ques cumplen el filtro

//array con las posiciones de las palabras con un tamaño mayor a 6

function filter(arr,funcFilter){
    var result = [];
    for(var i=0; i<arr.length; i++){ 
        if (funcFilter(arr[i])===true){
                result[result.length] = arr[i];
            }
    }
    return result;
}




