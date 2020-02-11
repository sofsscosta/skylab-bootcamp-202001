describe('join', function() {
    it("should returns a new string by concatenating all of the elements in an array, separated by specified separator string", function() {
        (function() {
            var a = ['a', 'b', 'c'];
            var resultA = join(a, '-');
            assert(resultA.length === 5, 'length should be 5 but instead you got ' + resultA.length);
            assert(resultA === 'a-b-c', 'the resulting string should be "a-b-c" but instead you got ' + resultA);
            
            var b = [1,2,3];
            var resultB = join(b, '**');
            assert(resultB.length === 7, 'length should be 7 but instead you got ' + resultB.length);
            assert(resultB === '1**2**3', 'the resulting string should be "1**2**3" but instead you got ' + resultB);
            
            var c = [1, 'a', 2, 'c', 5];
            var resultC = join(c, '');
            assert(resultC.length === 5, 'length should be 5 but instead you got ' + resultC.length);
            assert(resultC === '1a2c5', 'the resulting string should be "1a2c5" but instead you got ' + resultC);

        })();
    })

    it("should fail if the first argument is not an array, giving a TypeError", function () {
        (function() {
            var __error;
            try {
                join('a', 'c');
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "a is not an array.", 'error message should be "a is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
        
        (function() {
            var __error;
            try {
                join(-1, '*');
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "-1 is not an array.", 'error message should be "-1 is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;
            try {
                join(true, '-');
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "true is not an array.", 'error message should be "true is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
    })
})
