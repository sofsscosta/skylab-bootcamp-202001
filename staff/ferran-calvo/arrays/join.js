array = ["ramon", "ferran", "sofia", "monica"];
function join(a, element=","){
    if (!(a instanceof Array)) throw new TypeError(a + " should be an array");
    if (!(element instanceof String)) throw new TypeError(element + " should be a string");
    var result = "";
    for (var i=0; i<a.length; i++){
        if(i===a.length-1){
            result += a[i];
        }
        else{
            result += a[i] + element; 
        }
    }
    return result
}
//console.log(join(array, [1,2,3]));