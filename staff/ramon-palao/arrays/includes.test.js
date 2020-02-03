describe("includes", function(){
    it("should return true in case the array includes all the elements", function(){
        var array = ["ramon", 32, "sofia", true];
        var result = includes(array, "ramon");
        assert(result, "should result be true but I got false");
    })

    it("should return false in case the array does not include the element", function(){
        var array = ["ramon", 32, "sofia", true];
        var result = includes(array, "dog");
        assert(!result, "should result be true but I got false");
    })

    it ("should search the designated element after the start number, if it is designed", function(){
        var array = ["ramon", 32, "sofia", true];
        var result = includes(array, true, 2);
        assert(result, "should result be true but I got false");
    })

    it ("should return false if the start parameter is bigger than the array length", function(){
        var array = ["ramon", 32, "sofia", true];
        var result = includes(array, "ramon", 8);
        assert(!result, "should result be false, but I got true");
    })

    it ("should the start index be the sum of the array length and the start if the start index is negative", function(){
        var array = ["ramon", 32, "sofia", true];
        if(start = -1){
            return start += array.length;
        }
        assert(start === array.length + start, "should the start index be 3 but I got " + start);
    })

    it("should not work if the first parameter is not an Array", function(){

        (function(){
            var _error;

            try{
                includes(32, 2);
            } catch(error){
                _error = error;
            }

            assert(_error instanceof TypeError, "should error be a type of TypeError");
            assert(_error.message === "32 is not an Array", "should fail with message '32 is not an Array'");
        })();

        (function(){
            var _error;

            try{
                includes("ramon", 2);
            } catch(error){
                _error = error;
            }

            assert(_error instanceof TypeError, "should error be a type of TypeError");
            assert(_error.message === "ramon is not an Array", "should fail with message 'ramon is not an Array'");
        })();
    })

    it("should fail if there are no parameters in the method", function(){

        (function(){
            var _error;

            try{
                includes();
            } catch(error){
                _error = error;
            }

            assert(_error instanceof TypeError, "should error be a type of TypeError");
            assert(_error.message === "undefined is not an Array", "should fail with message 'ramon is not an Array'");
        })();
    })

});