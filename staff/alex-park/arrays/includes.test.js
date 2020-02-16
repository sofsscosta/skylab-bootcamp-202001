describe('includes', function() {
    it('should return whether an array includes a certain value among its entries, returning true or false as appropriate', function(){
        (function () {
            var array = [1,3,5,6,7,8,9];
            var test = includes(array,5, 2);
            assert( test === true, "it should return true, since the value 5 is on index 2" );
            
            var a = [1, 2, 3];
            var test2 = includes(a, 2, 1);
            assert( test2 === true, "it should return true, since the value 2 is on index 1" );
            
            var b = [10, 20, 30];
            var test3 = includes(b, 22);
            assert(test3 === false, 'it should return false since no element from b is 22');
            
            var c = [10, 20, 30];
            var test4 = includes(c, 20, -2);
            assert(test4 === true, 'it should return true since value 20 is on index -2 (or 2)');
        })();
    })

    it("should return the index if it finds the value and the position is wrongly specified", function() {
        (function(){
            var a = [1,2,3,4,5];
            var resultA= includes(a, 2, 'caca');
            assert(resultA === true, 'it should return true but instead you got ' + resultA);

        })();
        
        (function(){
            var a = [1,2,3,4,5];
            var resultA= includes(a, 2, [1,2,3]);
            assert(resultA === true, 'it should return true but instead you got ' + resultA);

        })();

        (function(){
            var a = [1,2,3,4,5];
            var resultA= includes(a, 2, function(){});
            assert(resultA === true, 'it should return true but instead you got ' + resultA);

        })();
    })

    it("should fail if the first argument is not an array, giving a TypeError", function () {
        (function() {
            var __error;
            try {
                includes('a', function(){});
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "a is not an array.", 'error message should be "a is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
        
        (function() {
            var __error;
            try {
                includes(-1, function(){});
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "-1 is not an array.", 'error message should be "-1 is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;
            try {
                includes(true, function(){});
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "true is not an array.", 'error message should be "true is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
    })

})