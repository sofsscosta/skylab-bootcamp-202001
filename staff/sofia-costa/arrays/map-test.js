describe('map', function() {

    //Happy Path :)

    it('should all elements be equivalent to their value multiplied by 10', function() {
        
        var array = [1, 2, 3, 4]
        var result = map([1, 2, 3, 4], function(element) {return element * 10} )

        for (var i = 0; i<result.length; i++) {
            assert(result[i] === array[i] * 10, 'the resulted element should be equivalent to its value multiplied by 10, but it is ' + result[i])
        };

    });

    it('should the returned array\'s length be equal to the original array\'s length', function() {
        
        var array = [1, 2, 3, 4]
        var result = map(array, function(element) {return element * 10})
        assert(result.length === array.length, 'the returned array\'s length should be 4, but instead it is ' + result.length)
    });


    // Sad Path :(

    it('should fail if the first argument passed is not an array', function() {
        (function() {
            var _error;
            try {
                map(1, function(element){return element * 10})
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
                map('hola', function(element){return element * 10})
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === 'hola is not an Array', 'should fail with message "hola is not an Array"');
            }
        })();

        (function () {
            var _error
            try {
                map(true, function(element){return element * 10})
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === 'true is not an Array', 'should fail with message "true is not an Array"');
            }
        })();
    });

    it('should fail if the second argument passed is not a function', function() {

        (function () {
            var _error
            try {
                map([1, 2, 3, 4])
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === 'undefined is not a function', 'should fail with message "undefined is not a function"');
            }
        })();

        (function () {
            var _error
            try {
                map([1, 2, 3, 4], 'heyo')
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === 'heyo is not a function', 'should fail with message "heyo is not a function"');
            }
        })();

        (function () {
            var _error
            try {
                map([1, 2, 3, 4], true)
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === 'true is not a function', 'should fail with message "true is not a function"');
            }
        })();

    })

});



