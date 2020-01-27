describe('forEach', function () {
    it('should array [1, 2, 3] be modified adding 10 to each value', function () {
        //a = 10
        var array = [1, 2, 3];

        forEach(array, function (value, index) { array[index] = value + 10 }); // HAPPY path :)

        array.forEach(function (value, index) {
            expect(value).toBe(index + 1 + 10);
        });
    });

    it('should each value of array [1, 2, 3] be added 10 and stored in results array', function () {
        var array = [1, 2, 3];
        var results = [];

        forEach(array, function (value, index) { results[index] = value + 10 });

        results.forEach(function (result, index) {
            expect(result).toBe(array[index] + 10);
        });
    });

    it('should fail on non-function expression', function () {
        expect(function () {
            forEach([1, 2, 3]); // UNHAPPY path :(
        }).toThrowError(TypeError, 'undefined is not a function');

        expect(function () {
            forEach([1, 2, 3], true);
        }).toThrowError(TypeError, 'true is not a function');

        // TODO refactor following unhappy cases to expect

        expect(function () {
                forEach([1, 2, 3], 1);
         }).toThrowError(TypeError, '1 is not a function');
    });

    false && it('should fail on non-array as first argument', function () {
        (function () {
            var fail;

            try {
                forEach(undefined, function () { });
            } catch (error) {
                fail = error;
            }

            assert(fail instanceof TypeError, 'should error be of type TypeError but got ' + fail.constructor.name);
            assert(fail.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array"');
        })();

        (function () {
            var fail;

            try {
                forEach(true, function () { });
            } catch (error) {
                fail = error;
            }

            assert(fail instanceof TypeError, 'should error be of type TypeError but got ' + fail.constructor.name);
            assert(fail.message === 'true is not an Array', 'should fail with message "true is not an Array"');
        })();

        (function () {
            var fail;

            try {
                forEach(1, function () { });
            } catch (error) {
                fail = error;
            }

            assert(fail instanceof TypeError, 'should error be of type TypeError but got ' + fail.constructor.name);
            assert(fail.message === '1 is not an Array', 'should fail with message "1 is not an Array"');
        })();
    });
});