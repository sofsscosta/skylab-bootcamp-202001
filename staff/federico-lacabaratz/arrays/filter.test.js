describe('Filter', function () {
    it('Verifies that all numbers within the array are > than 18', function () {
        var array = [10, 13, 56, 34, 57, 22, 5, 72, 33, 1];

        var results = filter(array, function (value) {
            return value > 18;
        });

        assert(results instanceof Array, 'should results be an Array, but got ' + results.constructor.name);
        assert(results.length === 6, 'should results length be 6 but got ' + results.length);

        for (var i = 0; i < results.length; i++) {
            assert(results[i] > 18, 'theres is an item in the result array that is not > 18');
        }
    });

    it('Verifies all the words with the letter "o" that exists within array', function () {
        var array = ['abc', 'hola', 'mundo', 'hello', 'world'];

        var results = filter(array, function (value) {
            return value.indexOf('o') > -1;
        });

        assert(results instanceof Array, 'should results be an Array, but got ' + results.constructor.name);
        assert(results.length === 4, 'should results length be 4 but got ' + results.length);
        assert(results[0] === 'hola', 'should value be "hola", but got ' + results[0]);
        assert(results[1] === 'mundo', 'should value be "mundo", but got ' + results[1]);
        assert(results[2] === 'hello', 'should value be "hello", but got ' + results[2]);
        assert(results[3] === 'world', 'should value be "world", but got ' + results[3]);
    });

    it('should fail on non-array first argument', function () {
        (function () {
            var _error;
            try {
                filter(undefined, function () { });
            } catch (error) {
                _error = error;
            }
            assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error);
            assert(_error.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array"');
        })();
    });
});