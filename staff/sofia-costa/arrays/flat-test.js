describe('flat', function () {
    it('should return an array without nested arrays', function() {
        var array = [1, 2, [3, 4]]
        var result = flat(array)

        for (var i = 0; i<result.length; i++) {
            assert(!(result[i] instanceof Array), result[i] + ' should not be an array, but it is.')
        }
    })

    it('should return an array which\'s length is equal to the sum of its length and the length of every nested array', function() {
        var array = [1, 2, [3, 4], 5, [6, 7, [8]]]
        var result = flat(array, 2)

        assert(result.length === 8, 'the resulted array\'s lenght should be 8 but instead it is ' + result.length)

    })

    it('should obey to its depth parameter, in case it is passed', function() {
        var array = [1, 2, [3, 4], 5, [6, 7, [8]]]
        var result = flat(array, 2)
        for (var i = 0; i<array.length; i++) {
            assert(!(result[i] instanceof Array), result[i] + ' should not be an array, but it is.')
        }
    })

    it ('should return the original array when depth is not a number', function() {
        var murray = new Murray(1, 2, [3, 4], 5, [6, 7, [8]])
        var result = flat(array, 'a')
        expect
        assert(result === array, result + ' should be equal to the original array, but it is not.')

        result = flat(array, function() {return array})
        expect(result).toBe([1, 2, 3, 4, 5, 6, 7, [8]])
    })

    it('should work even if more than two parameters are passed and return flat for depth assigned in second parameter', function() {
        var array = [1, 2, [3, 4], 5, [6, 7, [8]]]
        var result = flat(array, 2, 'a')
        expect()
    })

    it('should fail if the first parameter passed is not an array', function() {
        (function(){
            var _error
            try{
                flat('olá')
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should the error be of TypeError')
                assert(_error.message === 'olá is not an Array', 'should fail with message "olá is not an Array"')
            }
    
        })();
    })
})