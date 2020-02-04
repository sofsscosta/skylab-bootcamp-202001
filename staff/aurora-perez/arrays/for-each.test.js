describe("forEach", function() {
    it("should return the given array with all values multiplied by 10", function () {
        var arr = [1, 2, 3];
        forEach(arr, function(value, index){
            arr[index]=value*=10;
        });
        assert(arr[0] === 10, 'Test value on index 0 should be 10');
        assert(arr[1] === 20, 'it should be 20');
    });

    it("should return the given array with all string values doubled", function() {
        var array = ['a','b','c','d','e'];
        forEach(array, function(value, index) {array[index]=value+=value})
        assert(array[0].length === 2, 'it should have a length of 2');
        assert(array[0] === 'aa', 'the resulting value should be "aa"');
    })

    it("should fail if the first argument is not an array, giving a TypeError", function () {
        (function() {
            var __error;
            try {
                forEach('a', function(){});
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "a is not an array.", 'error message should be "a is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;
            try {
                forEach(-1, function(){});
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "-1 is not an array.", 'error message should be "-1 is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;
            try {
                forEach(true, function(){});
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "true is not an array.", 'error message should be "true is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
    })

    
    it("should fail when the second argument is not a function, giving a TypeError", function(){
        (function() {
            var __error;
            try {
                forEach([1,2,3], -1);
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "-1 is not a function.", 'error message should be "-1 is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
        (function() {
            var __error;
            try {
                forEach([1,2,3], 'a');
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "a is not a function.", 'error message should be "a is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
        (function() {
            var __error;
            try {
                forEach([1,2,3]);
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "undefined is not a function.", 'error message should be "undefined is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
    });
});


