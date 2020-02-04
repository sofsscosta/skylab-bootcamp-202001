var arr=[1, 2, 3];
console.log("DEMO forEach---------------------------");

forEach(arr, function(value, index){
    arr[index]=value+=10;
});

console.log("it should return the same array with added values", arr)