'use strict'

describe ("filter", function(){
    //Happy path
    it("should the resultant array have a length of 2", function(){
        var ourArray = [20, 12, 6, 8];
        var result = filter(ourArray, function(value){return value > 10});

        assert(result.length === 2, "should length of array be 2, but I got " + result.length);
    });

    it("should filter all the elements bigger than 10 and store them into result array", function(){
        var ourArray = [20, 12, 6, 8];
        var result = filter(ourArray, function(value){return value > 10});

        assert(result[0] > 10, "should the first element of result be 20, but I got " + result[0]);
        assert(result[1] > 10, "should the second element of result array be 12, but I got " + result[1]);
    });

    //Error handing
    it("should fail as the method does not have a function as a parameter", function(){
        (function(){
            var ourArray = [20, 12, 6, 8];
            var _error;

            try{
                filter(ourArray)
            } catch(error){
                var _error = error;
            }
            assert(_error instanceof TypeError, "should error be of type TypeError");
            assert(_error.message === "undefined is not a function", "should fail with message 'undefined is not a function'");
        })()
    });

    it("should fail if the method does not have an array as a parameter", function(){
        (function(){
            //var ourArray = [1, 2, 3, 4];
            var _error;

            try{
                filter(function(){});
            } catch (error){
                _error = error;
            }
            assert(_error instanceof TypeError, "should error be of type TypeError");
            assert(_error.message === "function(){} is not an Array at filter", "should fail with message 'undefined is not an Array'");

        })()
    })
});




