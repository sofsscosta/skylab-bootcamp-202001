describe("toString", function () {
    it("should return a string with all values of the array, separated by a comma", function() {
        (function() {
            var a = [1, 2, 3, 4];
            var resultA = toString(a);
            assert(resultA.__proto__.constructor.name==="String", 'resultA should be a string');

            var b = ['Aa', 'Bb', 'Cc'];
            var resultB = toString(b);
            assert(resultB.__proto__.constructor.name==="String", 'resultA should be a string');

            var c = [1, 'aA', 2, 'Bb', 3, 'Cc'];
            var resultC = toString(c);
            assert(resultC.__proto__.constructor.name==="String", 'resultA should be a string');
        })();
    })

    it("should fail when the first argument is not an array, giving a TypeError", function() {
        (function(){
            var __error;
            var a = 1;
            try {
                toString(a);
            } catch(error) {
                __error = error;
            }

            assert((__error instanceof TypeError), 'error should be of type TypeError, but instead you got ' + __error.constructor.name);
            assert(__error.message === "1 is not an array.",'the error message should be "1 is not an array.", but instead you got ' + __error.message);
        })();

        (function(){
            var __error;
            var a = true;
            try {
                toString(a);
            } catch(error) {
                __error = error;
            }

            assert((__error instanceof TypeError), 'error should be of type TypeError, but instead you got ' + __error.constructor.name);
            assert(__error.message === "true is not an array.",'the error message should be "true is not an array.", but instead you got ' + __error.message);
        })();

        (function(){
            var __error;
            var a = 'a';
            try {
                toString(a);
            } catch(error) {
                __error = error;
            }

            assert((__error instanceof TypeError), 'error should be of type TypeError, but instead you got ' + __error.constructor.name);
            assert(__error.message === "a is not an array.",'the error message should be "a is not an array.", but instead you got ' + __error.message);
        })();
    })
})
