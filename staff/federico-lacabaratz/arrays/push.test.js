describe('Push', function () {
    
    it('should have added 4 at the end of array [1, 2, 3]', function () {
        var array = [1, 2, 3];
        var results = push(array, 4);

        assert((results === 4), 'should array results length be 4, but got:'+results);
    });

    it('Verifies that the last value added is equal to 4', function () {
        var array = [1, 2, 3];
        push(array, 4);

        assert(array[array.length - 1] === 4, 'should last value be 4, but got:'+array[array.length - 1]);
    });
    
    it('Verifies each value of the array to be correct', function () {
        var array = [1, 2, 3];
        push(array, 4);

        assert(array[0] === 1, 'should value at index 0 be 1');
        assert(array[1] === 2, 'should value at index 1 be 2');
        assert(array[2] === 3, 'should value at index 2 be 3');
        assert(array[3] === 4, 'should value at index 3 be 4');
    });

    it('Verifies if the array is an array', function () {
        var _error;
        
        try {
            push('s', 1);
            
        } catch(error) {
            _error = error;
        } finally {
            assert(_error instanceof TypeError, 'Should throw a TypeError, but got:'+_error.constructor.name);
            assert(_error.message === 's is not an array', 'Error message should be "s is not an array" but got:'+_error.message);
        }
    });

    it('Verifies if the isn\'t a value argument', function () {
        var _error;
        
        try {
            push([1]);
            
        } catch(error) {
            _error = error;
        } finally {
            assert(_error instanceof TypeError, 'Should throw a TypeError, but got:'+_error.constructor.name);
            assert(_error.message === 'There is no value tu push', 'Error message should be "s is not an array" but got:'+_error.message);
        }
    });
});

