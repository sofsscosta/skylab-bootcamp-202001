describe('findIndex', function() {
    it('should return the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1', function () {
        (function() {
            var a = [1, 5, 10, 25, 100];
            var test = findIndex(a, function(value) {return value > 5});

            assert(test === 2, 'it should return the index of value 10 in array a');


            var b = [5, 10, 15, 20, 25];
            var test2 = findIndex(b, function(value) {return value > 30});

            assert(test2 === -1, 'it should return -1 since no value from array b meets the criteria');


            var c = [ 5, 10, 15, 20, 20, 20, 20, 20];
            var test3 = findIndex(c, function(value) {return value === 20});

            assert(test3 === 3, 'it should return the index of only the first element meeting the criteria');
        })();
    })   

    it("should fail if the first argument is not an array, giving a TypeError", function () {
        (function() {
            var __error;

            try {
                findIndex('a', function(){});
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "a is not an array.", 'error message should be "a is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
       
        })();
        
        (function() {
            var __error;

            try {
                findIndex(-1, function(){});
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "-1 is not an array.", 'error message should be "-1 is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;

            try {
                findIndex(true, function(){});
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
                findIndex([1,2,3], -1);
            } catch(error) {
                __error = error;
            }

            assert(__error.message === "-1 is not a function.", 'error message should be "-1 is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;

            try {
                findIndex([1,2,3], 'a');
            } catch(error) {
                __error = error;
            }

            assert(__error.message === "a is not a function.", 'error message should be "a is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;

            try {
                findIndex([1,2,3]);
            } catch(error) {
                __error = error;
            }
            
            assert(__error.message === "undefined is not a function.", 'error message should be "undefined is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
    })
})