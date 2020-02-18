describe('includes', function() {

    //Happy Path :)

    it('should return true in case the array contains the indicated element', function() {
        var array = ['ramon', 32, 'sofia', true]
        var result = includes(array, 'ramon')
        assert(result, 'result should be true, but it is false')
    })

    it('should return false in the case element is undefined', function() {
        var array = ['ramon', 32, 'sofia', true]
        var result = includes(array)
        assert(!result, 'result should be false, but it is true')
    })

    it('should search the array for the designated element after the start number, in case it is defined', function() {
        var array = ['ramon', 32, 'sofia', true]
        var result = includes(array, 'ramon', 2)
        assert(!result, 'should be false, but it is true')
    })

    it('should return false in case start is bigger than the array\'s length', function() {
        var array = ['ramon', 32, 'sofia', true]
        var result = includes(array, 'ramon', 7)
        assert(!result, 'should be false, but it is true')
    })

    //Sad Path

    it('should not work in case the first parameter is not an array', function() {
        (function() {
            var _error
            try {
                includes(1)
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === '1 is not an Array', 'should fail with message "1 is not an Array"');
            }
        })();

        (function() {
            var _error
            try {
                includes('hola')
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === 'hola is not an Array', 'should fail with message "hola is not an Array"');
            }
        })();

    })

    it('should fail in case no parameters are passed', function() {
        (function() {
            var _error
            try {
                includes()
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array"');
            }
        })();
    })


})