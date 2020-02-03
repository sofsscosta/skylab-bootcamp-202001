describe("find", function(){
    it("should return the first element of the array that match the expression", function(){

        var array = [3, 4, 14, 19];
        var result = find(array, function(value){ return value > 11});
        var resultTwo = find(array, function(value){ return value < 5});

        assert(result === array[2], "should the element be 14 but I got " + result);
        assert(resultTwo === array[0], "should the result be 3 but I got " + resultTwo);

    })
    it("should return undefined if there are no elements matching the expression", function(){

        var array = [3, 4, 14, 19];
        var resultThree = find(array, function(value){ return value > 20});

        assert(resultThree === undefined, "should the result be 'undefined' but I got " + resultThree);
    })
    it("should fail if the first element is not an array", function(){

        (function(){
            var _error;
            
            try{
                find(1, function(){});
            } catch(error){
                _error = error;
            }

            assert(_error instanceof TypeError, "should error be a type of TypeError");
            assert(_error.message === '1', "should fail with the message '1'");
        })();

        (function(){
            var _error;

            try{
                find(function(){});
            } catch(error){
                _error = error;
            }

            assert(_error instanceof TypeError, "should error be a type of TypeError");
            assert(_error.message === 'function(){}', "should fail with the message 'function(){}'");
        })();
    })
})