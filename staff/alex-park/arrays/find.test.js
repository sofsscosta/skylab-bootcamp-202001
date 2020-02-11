describe('find', function(){
    it('it returns the value of the first element in the provided array that satisfies the provided testing function', function(){
        var a = [1,2,3,4];
        var resultA=find(a, function(value) {return value > 2});
        assert(resultA===3, 'it should return 3 because it is the first element that satisfies the condition of the collback >2');
        assert(resultA.__proto__.constructor.name==='Number', 'it should be a number element');
        
        var b = ['a','b','c','d'];
        var resultB= find(b, function(value) {return value > 'b'});
        assert(resultB==='c', 'it should return C because it is the first element that satisfies the condition of the collback >b');
        assert(resultB.length===1, 'the length have to be 1 because it is only the first element');
        
        var c = [1, 'a', 'b', 2, 'c', 3];
        var resultC=find(c, function(value) {return value > 2});
        assert(resultC===3, 'it should return 3 because it is the first element that satisfies the condition of the collback >2');
        assert(resultC.__proto__.constructor.name==='Number', 'it should be a number element');
    })

    it("should fail if the first argument is not an array, giving a TypeError", function () {
        (function() {
            var __error;

            try {
                find('a', function(){});

            } catch(error) {
                __error = error;
            }

            assert(__error.message === "a is not an array.", 'error message should be "a is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;

            try {
                find(-1, function(){});

            } catch(error) {
                __error = error;
            }

            assert(__error.message === "-1 is not an array.", 'error message should be "-1 is not an array", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;

            try {
                find(true, function(){});

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
                find([1,2,3], -1);

            } catch(error) {
                __error = error;
            }

            assert(__error.message === "-1 is not a function.", 'error message should be "-1 is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;

            try {
                find([1,2,3], 'a');

            } catch(error) {
                __error = error;
            }

            assert(__error.message === "a is not a function.", 'error message should be "a is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();

        (function() {
            var __error;

            try {
                find([1,2,3]);

            } catch(error) {
                __error = error;
            }
            
            assert(__error.message === "undefined is not a function.", 'error message should be "undefined is not a function", but you got ' + __error.message);
            assert(__error instanceof TypeError, 'error should be of type TypeError, but instead it got ' + __error.__proto__.constructor.name);
        })();
    });
});