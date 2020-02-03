/*console.log("JOIN TEST");

var array = ["ramon", "ferran", "sofia", "monica"];
var result = join(array, " and ");

console.assert(typeof result == "string", "the type of the result should be a string");
console.log("The type of the result should be a string");

for (var i = 0; i < array.length; i++){
    console.assert(result.includes(array[i]), "the string should include all the elements from the array");
}
console.log("The string should include all the elements from the array");
*/
describe("join", function(){
    it("should result type be a string", function(){
        var array = ["cat", "dog", "dolphin"];
        var result = join(array, "+");

        assert(typeof result === "string", "should the result be type of string but I got " + typeof result);
    })

    it("should return an empty string if the array length is 0", function(){
        var array = [];
        var result = join(array);

        assert(result === "", "should return an empty string '' but I got " + result);
    })

    it("should the element returned be an empty string if it is null in the array", function(){
        var array = [1, 2, null, 4, 5];
        var result = join(array);

        assert(result === "1,2,,4,5", "should the third element be an empty string but I got " + result);
    })

    it("should the element returned be an empty string if it is undefined in the array", function(){
        var array = [1, 2, undefined, 4, 5];
        var result = join(array);

        assert(result === "1,2,,4,5", "should the third element be an empty string but I got " + result);
    })

    it("should the resultant string have a comma between the elements if the element parameter is empty within the function", function(){
        var array = [1, 2, 3, 4, 5];
        var result = join(array);

        assert(result === "1,2,3,4,5", "should all elements have a comma between them but I got " + result);

    })

    it("should fail if the first parameter is not an Array", function(){

        (function(){
            var _error;

            try{
                join("dolphin");
            }catch(error){
                _error = error;
            }

            assert(_error instanceof TypeError, "should the error be type of TypeError");
            assert(_error.message === "dolphin is not an Array", "should fail with message 'dolphin is not an Array'")
        })();
    })
})