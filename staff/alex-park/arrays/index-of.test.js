describe('indexOf', function() {
    it('should return the index of the identified value, from certain position. If it is not in the array, it returns -1', function () {
        (function() {
            var a = [10,20,30,40,50,60,70];
            var test = indexOf(a, 50, -2);
            assert(test === -1, "it should return a -1");
            
            
            var b = [10,20,30,40,50,60,70];
            var test2 = indexOf(b, 30, 1);
            assert(test2 === 2, 'it should be 2');
            
            var c = [10,20,30,40,50,60,70];
            var test3 = indexOf(c, 20);
            assert(test3 === 1, "it should be 1, since 20 is the first element of c meeting the criteria");

        })();
    })

    it("should return the index if it finds the value and the position is wrongly specified", function() {
        (function(){
            var a = [1,2,3,4,5];
            var resultA= indexOf(a, 2, 'caca');
            assert(resultA === 1, 'it should return 1 but instead you got ' + resultA);

        })();
        
        (function(){
            var a = [1,2,3,4,5];
            var resultA= indexOf(a, 2, [1,2,3]);
            assert(resultA === 1, 'it should return 1 but instead you got ' + resultA);

        })();

        (function(){
            var a = [1,2,3,4,5];
            var resultA= indexOf(a, 2, function(){});
            assert(resultA === 1, 'it should return 1 but instead you got ' + resultA);

        })();
    })

    it("should fail if the first argument is not an array, giving a TypeError", function () {
        (function() {
            var __error;
            try {
                indexOf('a', function(){});
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "a is not an array.", 'error message should be "a is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
        
        (function() {
            var __error;
            try {
                indexOf(-1, function(){});
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "-1 is not an array.", 'error message should be "-1 is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;
            try {
                indexOf(true, function(){});
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "true is not an array.", 'error message should be "true is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
    })
})


