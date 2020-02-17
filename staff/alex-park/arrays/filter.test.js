describe('filter', function () {
    it('should return even values on even-numbers filter applied on numbers array', function () {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var results = filter(array, function (value) {
            return value % 2 === 0;
        });

        assert(results instanceof Array, 'should results be an Array, but got ' + results.constructor.name);
        assert(results.length === 4, 'should results length be 4 but got ' + results.length);

        for (var i = 0; i < results.length; i++) {
            assert(results[i] === array[i * 2 + 1], 'should value be ' + array[i * 2 + 1] + ', but got ' + results[i]);
        }
    });

    it('should return an array with all the elements from a former array containing the letter o', function () {
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