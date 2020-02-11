describe('slice', function() {
    it('should return a shallow copy of a portion of an array into a new array from begin index to end index (end not included) without modified the original array', function() {
        (function(){
            var a = [1, 2, 3, 4, 5];
            var resultA = slice(a, 2);
            console.assert(resultA[1] === 4, 'it should return 4, since result have sliced from index 2 on array a to beyond.');
            console.assert(a.length===5,'the original array should not be modified');

            var b = [1, 2, 3, 'a', 'b', 'c'];
            var resultB = slice(b, 1, -3);
            console.assert(resultB.length === undefined, 'it should have an undefined length');
            console.assert(resultB === -3, 'it should be 3, since it is the last sliced value from b');
        })();
    })

    it("should return the whole array if the first element is wrongly specified", function(){
        (function () {
            var a = [1,2,3,4,5];
            var resultA = slice(a, 'patata');
            assert(resultA.length === 5, 'it should return the whole array, but instead you got ' + resultA);
            assert(resultA[2] === 3, 'value on index 2 should be 3, but instead you got ' + resultA[2]);

        })();

        (function () {
            var a = [1,2,3,4,5];
            var resultA = slice(a, function(){});
            assert(resultA.length === 5, 'it should return the whole array, but instead you got ' + resultA);
            assert(resultA[2] === 3, 'value on index 2 should be 3, but instead you got ' + resultA[2]);

        })();

        (function () {
            var a = [1,2,3,4,5];
            var resultA = slice(a, undefined);
            assert(resultA.length === 5, 'it should return the whole array, but instead you got ' + resultA);
            assert(resultA[2] === 3, 'value on index 2 should be 3, but instead you got ' + resultA[2]);

        })();
    })

    it("should return the negative value of the end argument if a negative value is stablished", function(){
        (function(){
            var a = [1,2,3];
            var result = slice(a,0,-5);
            assert(result === -5,'it should be -5, but instead you got ' + result);
        })();
    })

    it("should fail if the first argument is not an array, giving a TypeError", function () {
        (function() {
            var __error;
            try {
                slice('a', 0);
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "a is not an array.", 'error message should be "a is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
        
        (function() {
            var __error;
            try {
                slice(-1, 0);
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "-1 is not an array.", 'error message should be "-1 is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;
            try {
                slice(true, 0);
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "true is not an array.", 'error message should be "true is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
    })

})

