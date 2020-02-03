describe('reduce', function () {
    it('should return a single value, which results from the reduction of the provided array', function () {
        var array = [1, 2, 3, 4];

        var reduced = reduce(array, function (accumulator, currentVal) {
            return accumulator + currentVal;
        });

        assert(reduced === 10, 'should the return value be equal to 10, but got ' + reduced);

    });

    it('should start accumulating from the provided intial value', function () {
        var array = [1, 2, 3, 4];

        var reduced = reduce(array, function (accumulator, currentVal) {
            return accumulator + currentVal;
        }, 5);

        assert(reduced === 15, 'should the return value be equal to 10, but got ' + reduced);
    });

    it('should fail when first parameter is not of type Array', function () {
        (function () {
            var _error;
            try {
                reduce(1, function () { });
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === '1 is not of type Array', 'should error message be "1 is not of type Array", but got ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();

        (function () {
            var _error;
            try {
                reduce('test', function () { });
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === 'test is not of type Array', 'should error message be "test is not of type Array", but got ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();

        (function () {
            var _error;
            try {
                reduce(undefined, function () { });
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === 'undefined is not of type Array', 'should error message be "undefined is not of type Array", but got ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();
    });

    it('should fail when second parameter is not a function', function () {
        (function () {
            var _error;
            var array = [1, 2];
            try {
                reduce(array, undefined);
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === 'undefined is not a function', 'should error message be "undefined is not a function", but got ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();

        (function () {
            var _error;
            var array = [1, 2];
            try {
                reduce(array, 1);
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === '1 is not a function', 'should error message be "1 is not a function ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();

        (function () {
            var _error;
            var array = [1, 2];
            try {
                reduce(array, true);
            } catch (error) {
                _error = error;
            } finally {
                assert(_error.message === 'true is not a function', 'should error message be "true is not a function", but got ' + _error.message);
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
            }
        })();
    });
});
