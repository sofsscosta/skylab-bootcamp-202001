describe('every()', function(){

    it('Should check if every element in an array accomplish a condition, then return true if so or false if else.', 
        function() {
            var testArray = [1, 2, 3, 4];
            var result = every(testArray, function(element) { return element > 10 });
            assert(result === false, 'Should testArray = [1, 2, 3, 4] and testExpression = function(element) { return element > 10 return false}, but got' + result);
        }
        
        ),
    it('Should the original array not be modified', 
        function() {
            var testArray = [1, 2, 3, 4];
            var controlArray = [1, 2, 3, 4];
            var result = every(testArray, function(element) { return element > 10 });
            for(var i = 0; i < testArray.length; i++){
                assert(testArray[i] === controlArray[i], 'Should the original array not be modified, but so happend');
            }
        }),
    it('Should fail on non-array argument', 
        function() {
            // debugger
            var _error
            try {
                every('a', function() {})
            } catch(error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'Should the error be a TypeError but got ' + _error.__proto__.constructor.name);
                assert(_error.message === 'a is not an array', 'Should the error say \'a is not an array\' but got ' + _error.message);
            }
        }),
    it('Should fail on non-function expression', 
        function() {
            // debugger
            var _error
            try {
                every([], 'a')
            } catch(error) {
                _error = error
            } finally {
                assert(_error instanceof TypeError, 'Should the error be a TypeError but got ' + _error.__proto__.constructor.name);
                assert(_error.message === 'a is not a function', 'Should the error say \'a is not a function\' but got ' + _error.message);
            }
        })
}
)