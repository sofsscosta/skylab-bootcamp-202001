describe ('every', function() {

    // Happy path :)

    it('should return true if all the elements satisfy the expression', function() {
        
        var result = every([1, 2, 3, 4], function (element) {return element > 0})

        assert(result === true, 'the returned value should be true, but it is false')
   })

   it ('should return a boolean value', function() {
        var result = every([1, 2, 3, 4], function (element) {return element > 0})

        assert(result === true || result === false, 'the returned value should be a boolean, but it is a ' + result.constructor.name)
   })


   // Sad path :'(

   it ('should fail if the second parameter is not a function', function () {

        (function() {
            var _error
            try{
                every([1, 2, 3, 4])
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === 'undefined is not a function', 'should fail with message "undefined is not a function"');
            }
        })();

        (function() {
            var _error
            try{
                every([1, 2, 3, 4], 1)
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === '1 is not a function', 'should fail with message "1 is not a function"');
            }
        })();

        (function() {
            var _error
            try{
                every([1, 2, 3, 4], 'olá')
            } catch (error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === 'olá is not a function', 'should fail with message "olá is not a function"');
            }
        })();

   })

})