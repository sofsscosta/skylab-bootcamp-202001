describe ('FILL', function(){
    it ('it changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.', function(){
        var a = [1,2,3,4,5,6,7,8,9,10];
        var resultA = fill(a, 'x', 4, 9);

        assert(resultA[4] === 'x','it should be an x');
        assert(resultA[4] === a[4], 'original array has been modified too');
        assert(resultA[test.length-1] === 10,'last value should not be modified');


        var b = [1,2,3,4,5,6,7,8,9,10];
        var resultB = fill(b, 'x', 3);
        assert(resultB[resultB.length-1] === resultB[3], 'since no end was specified, all values from the start should be modified');

        var c = [1,2,3,4,5,6,7,8,9,10];
        var resultC = fill(c, 'oso');

        var contador = 0;
        resultC.forEach(function(value){if(value === 'oso') {contador++}});
        assert(contador === c.length, 'should be the same as length of original array since all values were modified');
    })

    it ('it should fail when the first argument is not an array fiving a TypeError', function(){
        (function(){
            var _error;
            try {
                fill(undefined);
            } catch (error){
                _error=error
            } finally {
                assert(_error instanceof TypeError, 'should error be of TypeError');
                assert(_error.message === 'undefined is not an array', 'should fail with message "undefined is not an Array"');
            };

        })();

        (function(){
            var _error;
            try {
                fill(1);
            } catch (error){
                _error=error
            } finally {
                assert(_error instanceof TypeError, 'should error be of TypeError');
                assert(_error.message === '1 is not an array', 'should fail with message "1 is not an Array"');
            };
        })();

        (function(){
            var _error;
            try {
                fill('hola');
            } catch (error){
                _error=error
            } finally {
                assert(_error instanceof TypeError, 'should error be of TypeError');
                assert(_error.message === 'hola is not an array', 'should fail with message "hola is not an Array"');
            };
        })();
    });
})