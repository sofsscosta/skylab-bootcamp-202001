describe ('every', function(){
    it('it tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.', function(){
        var a = [1, 2, 3];
        var resultA=every(a, function(value){return value<10;});
        assert(resultA===true, 'it should return TRUE because all the arrays elements are <10');

        var b = [10, 50, 100];
        var resultB=every(b, function(value){return value < 70;});
        assert(resultB===false, 'it should return FALSE because not all elemments are <70, there is 100 in the array');
        
        var c = ['a', 'a','a','b','a'];
        var resultC=every(c, function(value){value === 'a';})
        assert(resultC===false, 'it test should return FALSE because there are other string apart from A');
    });

    it("should fail if the first argument is not an array, giving a TypeError", function () {
        (function() {
            var __error;

            try {
                every('a', function(){});

            } catch(error) {
                __error = error;

            }

            assert(__error.message === "a is not an array.", 'error message should be "a is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
        (function() {
            var __error;

            try {
                every(-1, function(){});

            } catch(error) {
                __error = error;
            }

            assert(__error.message === "-1 is not an array.", 'error message should be "-1 is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;

            try {
                every(true, function(){});

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
                every([1,2,3], -1);

            } catch(error) {
                __error = error;
            }

            assert(__error.message === "-1 is not a function.", 'error message should be "-1 is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;

            try {
                every([1,2,3], 'a');

            } catch(error) {
                __error = error;
            }

            assert(__error.message === "a is not a function.", 'error message should be "a is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;

            try {
                every([1,2,3]);

            } catch(error) {
                __error = error;
            }
            
            assert(__error.message === "undefined is not a function.", 'error message should be "undefined is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
    });
});