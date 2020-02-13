describe('Concat', function(){
    it('should return an array with a and b should be joined in a new array', function(){
        (function(){
            var a = [1, 2, 3, 4];
            var b = [6, 7, 8, 9];
            var results = [1,2,3,4,6,7,8,9]
            var newArray = concat(a, b);
            assert(newArray[0] === results[0], 'no ha sumado los array')
            assert(newArray[1] === results[1], 'no ha sumado los array')
            assert(newArray[2] === results[2], 'no ha sumado los array')
            assert(newArray[3] === results[3], 'no ha sumado los array')
            assert(newArray[4] === results[4], 'no ha sumado los array')
            assert(newArray[5] === results[5], 'no ha sumado los array')
            assert(newArray[6] === results[6], 'no ha sumado los array')
            assert(newArray[7] === results[7], 'no ha sumado los array')
        })();
    });
    it('should return an array with all the arguments joined in a new array', function(){
        (function(){
            var a = [1, 2, 3, 4];
            var b = [5, 6, 7, 8];
            var c = [9, 10, 11]
            var results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            var newArray = concat(a, b, c);
            assert(newArray[0] === results[0], 'no ha sumado los array')
            assert(newArray[1] === results[1], 'no ha sumado los array')
            assert(newArray[2] === results[2], 'no ha sumado los array')
            assert(newArray[3] === results[3], 'no ha sumado los array')
            assert(newArray[4] === results[4], 'no ha sumado los array')
            assert(newArray[5] === results[5], 'no ha sumado los array')
            assert(newArray[6] === results[6], 'no ha sumado los array')
            assert(newArray[7] === results[7], 'no ha sumado los array')
            assert(newArray[8] === results[8], 'no ha sumado los array')
            assert(newArray[9] === results[9], 'no ha sumado los array')
            assert(newArray[10] === results[10], 'no ha sumado los array')
        })();
    });
    it('should fail if one argument is not an array', function(){
        (function(){
            var _error;
            try {
                concat(1, 2);
            } catch (error) {
                _error = error;
            }
            assert(_error instanceof TypeError, 'should error be of type TypeError');
            assert(_error.message === '1 is not an array', 'should fail with message "1 is not an array"');
        })();
        (function(){
            var _error;
            try {
                concat([1, 2], 'juanito');
            } catch (error) {
                _error = error;
            }
            assert(_error instanceof TypeError, 'should error be of type TypeError');
            assert(_error.message === 'juanito is not an array', 'should fail with message "juanito is not an array"');
        })();
    });
});