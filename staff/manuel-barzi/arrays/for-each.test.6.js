describe('forEach', function () {
    it('should array [1, 2, 3] be modified adding 10 to each value', function () {
        //a = 10
        var array = [1, 2, 3];

        forEach(array, function (value, index) { array[index] = value + 10 }); // HAPPY path :)

        array.forEach(function (value, index) {
            //assert(value === index + 1 + 10, 'should value at index ' + index + ' be ' + (index + 1 + 10) + ' but got ' + value);

            lisandro(value, index + 1 + 10);
        })
    });

    function lisandro(actual, expected) {
        assert(actual === expected, 'expected ' + expected + ' but got ' + actual);
    }

    it('should each value of array [1, 2, 3] be added 10 and stored in results array', function () {
        var array = [1, 2, 3];
        var results = [];

        forEach(array, function (value, index) { results[index] = value + 10 });

        results.forEach(function (result, index) {
            //assert(result === array[index] + 10, 'should value at index ' + index + ' be ' + (array[index] + 10));
            lisandro(result, array[index] + 10)
        });
    });

    function victori(test, errorType, message) { // extends dario
        (function () {
            var fail;

            try {
                test();
            } catch (error) {
                fail = error;
            }

            assert(fail instanceof errorType, 'should error be of type ' + errorType.name + ' but got ' + fail.constructor.name);
            assert(fail.message === message, 'should fail with message "' + message + '", but got "' + fail.message +'"');
        })();
    }

    it('should fail on non-function expression', function () {
        /*(function () {
            var fail;
 
            try {
                forEach([1, 2, 3]);
            } catch (error) {
                fail = error;
            } finally {
                // assert(fail instanceof  TypeError, 'should error be of type TypeError');
                // assert(fail.message === 'undefined is not a function', 'should fail with message "undefined is not a function"');
            }
 
            assert(fail instanceof TypeError, 'should error be of type TypeError but got ' + fail.constructor.name);
            assert(fail.message === 'undefined is not a function', 'should fail with message "undefined is not a function"');
        })();*/

        /*dario(function () {
            forEach([1, 2, 3]); // UNHAPPY path :(
        }, function (error) {
            assert(error instanceof TypeError, 'should error be of type TypeError but got ' + error.constructor.name);
            assert(error.message === 'undefined is not a function', 'should fail with message "undefined is not a function"');
        });*/

        victori(function () {
            forEach([1, 2, 3]); // UNHAPPY path :(
        }, TypeError, 'undefined is not a function');

        (function () {
            var fail;

            try {
                forEach([1, 2, 3], true);
            } catch (error) {
                fail = error;
            }

            assert(fail instanceof TypeError, 'should error be of type TypeError but got ' + fail.constructor.name);
            assert(fail.message === 'true is not a function', 'should fail with message "true is not a function"');
        })();

        (function () {
            var fail;

            try {
                forEach([1, 2, 3], 1);
            } catch (error) {
                fail = error;
            }

            assert(fail instanceof TypeError, 'should error be of type TypeError but got ' + fail.constructor.name);
            assert(fail.message === '1 is not a function', 'should fail with message "1 is not a function"');
        })();
    });

    it('should fail on non-array as first argument', function () {
        (function () {
            var fail;

            try {
                forEach(undefined, function () { });
            } catch (error) {
                fail = error;
            }

            assert(fail instanceof TypeError, 'should error be of type TypeError but got ' + fail.constructor.name);
            assert(fail.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array"');
        })();

        (function () {
            var fail;

            try {
                forEach(true, function () { });
            } catch (error) {
                fail = error;
            }

            assert(fail instanceof TypeError, 'should error be of type TypeError but got ' + fail.constructor.name);
            assert(fail.message === 'true is not an Array', 'should fail with message "true is not an Array"');
        })();

        (function () {
            var fail;

            try {
                forEach(1, function () { });
            } catch (error) {
                fail = error;
            }

            assert(fail instanceof TypeError, 'should error be of type TypeError but got ' + fail.constructor.name);
            assert(fail.message === '1 is not an Array', 'should fail with message "1 is not an Array"');
        })();
    });
});