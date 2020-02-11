describe('shift', function() {
    it('should remove the first element from an array and returns that removed element. This method changes the length of the original array', function () {
        (function() {
            var a = [1,2,3,4,5];
            var test = shift(a);
            assert(test === 1,'it should return the first element of the former array');
            assert(a.length === 4,'original array must be modified');
            assert(a[0] === 2,'the removed element was the first one, meaning that element on index 0 should be 2');
            
            var b = [[1,2,3],4,5,6];
            var test2 = shift(b);
            assert(test2.__proto__.constructor.name === "Array",'shifted element type should be an array');
            assert(b.length === 3,'original arrays length should be modified and now should be 3');

        })();
    });

    it("should fail if the first argument is not an array, giving a TypeError", function () {
        (function() {
            var __error;
            try {
                shift('a');
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "a is not an array.", 'error message should be "a is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
        
        (function() {
            var __error;
            try {
                shift(-1);
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "-1 is not an array.", 'error message should be "-1 is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;
            try {
                shift(true);
            } catch(error) {
                __error = error;
            }
            assert(__error.message === "true is not an array.", 'error message should be "true is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
    })
})


