describe ('reverse', function () {
    it('it should return a new array with the reverted values', function(){
        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var resultA = reverse (a);
        var a2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

        assert( resultA[0] === a2[0], 'it should return ' + a2[0] + 'but you got '+resultA[0]);
        assert( resultA[1] === a2[1], 'it should return ' + a2[1] + 'but you got '+resultA[1]);
        assert( resultA[2] === a2[2], 'it should return ' + a2[2] + 'but you got '+resultA[2]);
        assert( resultA[3] === a2[3], 'it should return ' + a2[3] + 'but you got '+resultA[3]);
        assert( resultA[4] === a2[4], 'it should return ' + a2[4] + 'but you got '+resultA[4]);
        assert( resultA[5] === a2[5], 'it should return ' + a2[5] + 'but you got '+resultA[5]);
        assert( resultA[6] === a2[6], 'it should return ' + a2[6] + 'but you got '+resultA[6]);
        assert( resultA[7] === a2[7], 'it should return ' + a2[7] + 'but you got '+resultA[7]);
        assert( resultA[8] === a2[8], 'it should return ' + a2[8] + 'but you got '+resultA[8]);
        assert( resultA[9] === a2[9], 'it should return ' + a2[9] + 'but you got '+resultA[9]);
        assert( resultA[10] === a2[10], 'it should return ' +a2[10] + 'but you got '+resultA[10]);

        var c = [[1, 2, 3], ['a', 'b', 'c'], [7, 8, 9]];
        resultC = reverse (c);
        resultC.forEach(function(value, index){ assert(value === c[c.length-index-1], 'error, numbers dont match') });
    })

    it("should fail when the first argument is not an array, giving a TypeError", function() {
        (function(){
            var __error;

            try {
                reverse(1);

            } catch(error) {
                __error = error;
            }

            assert((__error instanceof TypeError), 'error should be of type TypeError, but instead you got ' + __error.constructor.name);
            assert(__error.message === "1 is not an array.",'the error message should be "1 is not an array.", but instead you got ' + __error.message);
        })();

        (function(){
            var __error;

            try {
                reverse(true);

            } catch(error) {
                __error = error;
            }

            assert((__error instanceof TypeError), 'error should be of type TypeError, but instead you got ' + __error.constructor.name);
            assert(__error.message === "true is not an array.",'the error message should be "true is not an array.", but instead you got ' + __error.message);
        })();

        (function(){
            var __error;

            try {
                reverse('a');

            } catch(error) {
                __error = error;
            }
            
            assert((__error instanceof TypeError), 'error should be of type TypeError, but instead you got ' + __error.constructor.name);
            assert(__error.message === "a is not an array.",'the error message should be "a is not an array.", but instead you got ' + __error.message);
        })();
    });
})