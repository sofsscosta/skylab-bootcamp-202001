(function () {
    'use strict';

    console.log('TEST forEach');

    function assert(assertion, message) {
        if (!assertion) throw new Error('Assertion failed: ' + message);
    }

    try {
        (function () {
            //a = 10
            var array = [1, 2, 3];
            forEach(array, function (value, index) { array[index] = value + 10 });
            array.forEach(function (value, index) {
                assert(value === index + 1 + 10, 'should value at index ' + index + ' be ' + (index + 1 + 10));
            })
            console.log('should array [1, 2, 3] be modified adding 10 to each value');
        })();
    } catch (error) {
        console.error('should array [1, 2, 3] be modified adding 10 to each value', error);
    }

    try {
        (function () {
            var array = [1, 2, 3];
            var results = [];
            forEach(array, function (value, index) { results[index] = value + 10 });
            results.forEach(function (result, index) {
                assert(result === array[index] + 10, 'should value at index ' + index + ' be ' + (array[index] + 10));
            });
            console.log('should each value of array [1, 2, 3] be added 10 and stored in results array');
        })();
    } catch (error) {
        console.error('should each value of array [1, 2, 3] be added 10 and stored in results array', error);
    }

    console.log('should fail on non-function expression');
    (function () {
        var _error;
        try {
            forEach([1, 2, 3]);
        } catch (error) {
            _error = error;
        } finally {
            // console.assert(_error instanceof  TypeError, 'should error be of type TypeError');
            // console.assert(_error.message === 'undefined is not a function', 'should fail with message "undefined is not a function"');
        }
        console.assert(_error instanceof TypeError, 'should error be of type TypeError');
        console.assert(_error.message === 'undefined is not a function', 'should fail with message "undefined is not a function"');
    })();

    (function () {
        var _error;
        try {
            forEach([1, 2, 3], true);
        } catch (error) {
            _error = error;
        }
        console.assert(_error instanceof TypeError, 'should error be of type TypeError');
        console.assert(_error.message === 'true is not a function', 'should fail with message "true is not a function"');
    })();

    (function () {
        var _error;
        try {
            forEach([1, 2, 3], 1);
        } catch (error) {
            _error = error;
        }
        console.assert(_error instanceof TypeError, 'should error be of type TypeError');
        console.assert(_error.message === '1 is not a function', 'should fail with message "1 is not a function"');
    })();

    console.log('should fail on non-array as first argument');

    (function () {
        var _error;
        try {
            forEach(undefined, function () { });
        } catch (error) {
            _error = error;
        }
        console.assert(_error instanceof TypeError, 'should error be of type TypeError');
        console.assert(_error.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array"');
    })();

    (function () {
        var _error;
        try {
            forEach(true, function () { });
        } catch (error) {
            _error = error;
        }
        console.assert(_error instanceof TypeError, 'should error be of type TypeError');
        console.assert(_error.message === 'true is not an Array', 'should fail with message "true is not an Array"');
    })();

    (function () {
        var _error;
        try {
            forEach(1, function () { });
        } catch (error) {
            _error = error;
        }
        console.assert(_error instanceof TypeError, 'should error be of type TypeError');
        console.assert(_error.message === '1 is not an Array', 'should fail with message "1 is not an Array"');
    })();
})();