describe('reverse', function() {
    it('should return the values of array in reversed order', function() {
        var array = [1, 2, 3, 4, 5]
        var result = reverse(array)
        for (var i = 0; i<array.length; i++){
            assert(result[i]===array[array.length - 1 - i], 'result\'s value of index ' + i + ' should be ' + array[array.length - i] + ' but instead it is ' + result[i])
        }
        
    })

    it ('should return an empty array in case an empty array is passed', function() {
        var result = reverse([])
        assert(result.length === 0 && result instanceof Array, 'the result should be an empty array, but instead it is ' + result)
    })

    it ('should fail in case no array is passed', function() {
        (function() {
            var _error
            try{
                reverse()
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of TypeError')
                assert(_error.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array"')
            }
        })();
    })

    it ('should fail in case undefined is passed instead of an array', function() {
        (function() {
            var _error
            try{
                reverse()
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of TypeError')
                assert(_error.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array"')
            }
        })();
    })
})