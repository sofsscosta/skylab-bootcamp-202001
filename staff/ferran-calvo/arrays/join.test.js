console.log("JOIN TEST");

/*var array = ["ramon", "ferran", "sofia", "monica"];
var result= join(array, " and ")

console.assert(typeof result === 'string' , "Type of result should be a string." );
console.log("Type  of result is string.")

for (var i=0; i<array.length; i++){
    console.assert(result.includes(array[i]), "Result should include all the elements of the array")
}
console.log("All elements in the array are included in the result")*/

var _error;
var a= [1,2];
var b= 1

try{
    join(a, b);

}catch(error){
    _error = error;
}finally{
    console.assert(_error instanceof TypeError, "error should be TypeError");
    console.assert(_error.message === `${a} should be an array`, `should fail with message: "${a} should be an array"`)
}

