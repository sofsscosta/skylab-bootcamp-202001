describe('filter', function () {
    it('should return even values on even-numbers fliter applied, on provided array', function () {
        var array = [1, 2, 3, 4, 5, 6, 7];

        var result = filter(array, function (value) {
            return value % 2 === 0;
        });

        assert(result instanceof Array, 'should result be an array, but got ' + result.constructor.name);
        assert(result.length === 3, 'should array length be 4, but got ' + result.length);

        for (var i = 0; i < result.length; i++) {
            assert(result[i] === array[i * 2 + 1], 'should value at ' + i + 'be ' + array[i * 2 + 1] + ', but got ' + result[i]);
        }
    });

    it('should return all instances of "lisandro" or "Lisandro" from the names array', function () {
        var names = ['lisandro', 'Jose', 'Lisandro', 'raul'];

        var result = filter(names, function (name) {
            if (name.toLowerCase() === 'lisandro') return name;
        });

        assert(result[0] === 'lisandro', 'should name be lisandro, but got ' + result[0]);
        assert(result[1] === 'Lisandro', 'should name be Lisandro, but got ' + result[1]);
    });

    it('should fail if first parameter is not of type Array', function () {
        (function () {
            var _error;
            try {
                filter(undefined, function () { });
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === 'undefined is not of type Array', 'should fail with message "undefined is not of type Array", but got ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();

        (function () {
            var _error;
            try {
                filter(1, function () { });
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === '1 is not of type Array', 'should fail with message "1 is not of type Array", but got ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();

        (function () {
            var _error;
            try {
                filter(true, function () { });
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === 'true is not of type Array', 'should fail with message "true is not of type Array", but got ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();

    });

    it('should fail if second parameter is not a function', function () {
        (function () {
            var _error;
            try {
                filter([1, 2], undefined);
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === 'undefined is not a function', 'should fail with message "undefined is not a function", but got ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();

        (function () {
            var _error;
            try {
                filter([1, 2], 1);
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === '1 is not a function', 'should fail with message "1 is not a function", but got ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();

        (function () {
            var _error;
            try {
                filter([1, 2], true);
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === 'true is not a function', 'should fail with message "true is a function", but got ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();

    });
});