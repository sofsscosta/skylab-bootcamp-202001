describe("Concat", function() {

    it("Verifies that contanates 2 arrays", function(){
        var array1 = [2, 6, 8];
        var array2 = [7, 9, 3, 6];

        var newArray = concat(array1, array2);

        assert(newArray.length === 7, "should the length of new array be 7, but got " + newArray.length);
    });

    it("Verifies that the first element of the second array should be the last + 1 of the first", function() {
        var array1 = [2, 6, 8];
        var array2 = [7, 9, 3, 6];

        var newArray = concat(array1, array2);

        assert(array2[0] === newArray[3], "should return 7 , but got " + newArray[3]);
    });
    
    it("Verifies each element within the new array following concatenation", function() {
        var array1 = [2, 6, 8];
        var array2 = [7, 9, 3, 6];

        var newArray = concat(array1, array2);

        assert(newArray[0] === 2, 'The value in newArray[0] should equal 2');
        assert(newArray[1] === 6, 'The value in newArray[1] should equal 6');
        assert(newArray[2] === 8, 'The value in newArray[2] should equal 8');
        assert(newArray[3] === 7, 'The value in newArray[3] should equal 7');
        assert(newArray[4] === 9, 'The value in newArray[4] should equal 9');
        assert(newArray[5] === 3, 'The value in newArray[5] should equal 3');
        assert(newArray[6] === 6, 'The value in newArray[6] should equal 6');
    });

    it('Verifies in case we have \'undefined\' instead of an array', function() {
            
        var _error;

        try {
            concat(undefined, 5);
        } catch (error) {
            _error = error;

        } finally {
            assert(_error instanceof TypeError, 'Should the error be of type TypeError, but got '+ _error.constructor.name);
            assert(_error.message === 'undefined is not an array', 'should fail with message "undefined is not an array", but got '+ _error.message);
        }
    });
});
