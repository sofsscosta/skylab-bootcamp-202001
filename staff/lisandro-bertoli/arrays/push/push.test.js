describe('push', function () {
    it('should modified array new length be returned', function () {
        var array = [1, 2, 3, 4];
        var arrayCopy = array.map(function (element) { return element });
        var returnValue = push(arrayCopy, 1);

        assert(returnValue === array.length + 1, 'should modified array length be 5, but got ' + arrayCopy.length);
    });

    it('should element be added at the end of the array', function () {
        var array = [1, 2, 3, 4];

        push(array, 2);

        assert(array[4] === 2, 'should element at index 4 be 2, but got ' + array[4]);
    });


    it('should be able to add multiple elements', function () {
        var array = [1, 2, 3, 4];

        push(array, 'string', [false, 5], true);

        assert(array[4] === 'string', 'should element at index 4 be "string", but got ' + array[4]);
        assert(array[5] instanceof Array, 'should element at index 4 be [1, 2], but got ' + array[5]);
        assert(array[5][0] === false, 'should element at index [5][0] be false,but got ' + array[5][0]);
        assert(array[5][1] === 5, 'should element at index [5][1] be 5,but got ' + array[5][1]);
        assert(array[6] === true, 'should element at index 4 be true, but got ' + array[6]);
    });

    it('should fail if first parameter is not an Array', function () {
        (function () {
            var _error;

            try {
                push(undefined, 2);
            } catch (error) {
                _error = error;
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
                assert(_error.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array", but got ' + _error.message)
            }
        })();

        (function () {
            var _error;

            try {
                push(1, 2);
            } catch (error) {
                _error = error;
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
                assert(_error.message === '1 is not an Array', 'should fail with message "1 is not an Array", but got ' + _error.message)
            }
        })();

        (function () {
            var _error;

            try {
                push('string', 2);
            } catch (error) {
                _error = error;
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
                assert(_error.message === 'string is not an Array', 'should fail with message "string is not an Array", but got ' + _error.message)
            }
        })();

        (function () {
            var _error;

            try {
                push(true, 2);
            } catch (error) {
                _error = error;
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
                assert(_error.message === 'true is not an Array', 'should fail with message "true is not an Array", but got ' + _error.message)
            }
        })();
    });
});






