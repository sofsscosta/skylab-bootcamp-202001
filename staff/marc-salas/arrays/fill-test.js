'use strict'
describe('FILL TEST', function () {

    it('array will conserve the same length as before', function () {
        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        assert(fill(a, 0).length === 9, "array's length should be 9, not " + fill(a, 0).length);
    });

    it('should remplace all the values of the array with the new value', function () {
        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        fill(a, 0).forEach(function (value) {
            assert(value === 0, "all values should be 0");
        });
    });

    it('all the values on a determinate marge should be remplaced', function () {
        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var b = [1, 2, 0, 0, 5, 6, 7, 8, 9];
        assert(
            (fill(a, 0, 2, 4)[2] === 0 && fill(a, 0, 2, 4)[3] === 0), "array should be " + b + " not " + fill(a, 0, 2, 4));
    });

    it('Should show the correct errors',function(){
        var _error;
        try {
            var a = {};
            fill(1, 3);
    
        } catch (error) {
            _error = error;
        } finally {
            assert(_error instanceof TypeError, 'should error be of type TypeError');
            assert(_error.message === '1 is not an Array', 'wrong message');
        };
    });

});


