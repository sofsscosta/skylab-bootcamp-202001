describe("map", function () {
    it('should return a new array with specified changes on the expression', function() {
        (function () {
            var a = [1,2,3];
            var resultA=map(a, function(value) {return value * 10});
            assert(resultA[0]===10, 'The value of index 0 should be 10');
            assert(resultA[1]===20, 'The value of index 1 should be 20');
            assert(resultA[2]===30, 'The value of index 2 should be 30');
            assert(resultA.length===3, 'length should be the same because this method do not modified the original array');
        })();

        (function () {
            var b= ['a', 'b', 'c'];
            var resultB = map(b, function(value) {return value += '-hello'});
            assert(resultB[0]==='a-hello', 'The value of index 0 should be a-hello');
            assert(resultB[1]==='b-hello','The value of index 1 should be b-hello');
            assert(resultB[2]==='c-hello','The value of index 2 should be c-hello');
            var c = ['Alex', 'Aurora', 'Pepito'];
        })();

        (function () {
            var c = ['Alex','Aurora','Pepito'];
            var resultC = map(c, function(value) {return `Hello, ${value}!`});
            assert(resultC[0]==='Hello, Alex!','The value of index 0 should be Alex');
            assert(resultC[1]==='Hello, Aurora!','The value of index 1 should be Aurora');
            assert(resultC[2]==='Hello, Pepito!','The value of index 2 should be Pepito');
        })();

    });
    
    it('should fail for giving a non-function expression', function() {
        var __error;
        var a = [1,2,3];
        try {
            map(a, -1);
        } catch(error) {
            __error = error;
        } finally {
            assert(__error.message === "-1 is not a function", 'message should be  "-1 is not a function"');
            assert((__error instanceof TypeError), 'the error should be of type TypeError');
        };
    });
    
    it('should fail for giving a non-array value at the beginning', function() {
        var __error;
        try {
            map('a', function(){});
        } catch(error) {
            __error = error;
        } finally {
            assert(__error.message === "a is not an array", 'the message should be "a is not an array"');
            assert((__error instanceof TypeError), 'the error should be of type TypeError');
        };
    });
});



