var array=[1,10,50,100];

function find(array, condition){
    for (var i=0; i<array.length; i++){
        if (condition(array[i])){
            return array[i];
        }
    }
}

console.log(find(array, function(value){return value>0}))