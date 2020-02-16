describe('push', function() {
    it("it should return the array's length with the new added value", function() {
        (function() {
            var a = [1, 2, 3];

            push(a, 4);

            assert(a.length === 4, 'should be length 4');
            assert(a[0] === 1, 'should value at index 0 be a 1, but instead got ' + a[0]);
            assert(a[1] === 2, 'should value at index 1 be a 2, but instead got ' + a[1]);
            assert(a[2] === 3, 'should value at index 2 be a 3, but instead got ' + a[2]);
            assert(a[3] === 4, 'should value at index 3 be a 4, but instead got ' + a[3]);

            var b = ['a', 'b', 'c'];

            push(b, 'd');

            assert(a.length === 4, 'should be length 4');
            assert(b[0] === 'a', 'should value at index 0 be an a, but instead got ' + b[0]);
            assert(b[1] === 'b', 'should value at index 1 be a b, but instead got ' + b[1]);
            assert(b[2] === 'c', 'should value at index 2 be a c, but instead got ' + b[2]);
            assert(b[3] === 'd', 'should value at index 3 be a d, but instead got ' + b[3]);

            var c = [];

            push(c); 

            assert(c.length === 0, 'should be length 0');
        })();
    })

    it("should fail when the first argument is not an array, giving a TypeError", function() {
        (function(){
            var __error;
            var a = 1;
            try {
                push(a, 1);
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
                push(a, 1);
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
                push(a, 1);
            } catch(error) {
                __error = error;
            }

            assert((__error instanceof TypeError), 'error should be of type TypeError, but instead you got ' + __error.constructor.name);
            assert(__error.message === "a is not an array.",'the error message should be "a is not an array.", but instead you got ' + __error.message);
        })();
    })

})






