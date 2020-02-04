describe ('SHIFT', function(){
    it ('it removes the first element from an array and returns that removed element. This method changes the length of the array.', function(){
        var a = [1,2,3,4,5];
        var test = shift(a);
        assert(test === 1,'it should return the first element of the former array');
        assert(a.length === 4,'original array must be modified');
        assert(a[0] === 2,'the removed element was the first one, meaning that element on index 0 should be 2');

        var b = [[1,2,3],4,5,6];
        var test2 = shift(b);
        assert(test2.__proto__.constructor.name === "Array",'shifted element type should be an array');
        assert(b.length === 3,'original arrays length should be modified and now should be 3');
    })

    it("should fail when the first argument is not an array, giving a TypeError", function() {
        (function(){
            var __error;
            var a = 1;

            try {
                shift(a);
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
                shift(a);
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
                shift(a);
            } catch(error) {
                __error = error;
            }
            
            assert((__error instanceof TypeError), 'error should be of type TypeError, but instead you got ' + __error.constructor.name);
            assert(__error.message === "a is not an array.",'the error message should be "a is not an array.", but instead you got ' + __error.message);
        })();
    });
})
