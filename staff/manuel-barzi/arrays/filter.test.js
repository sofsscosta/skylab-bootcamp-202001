describe('filter', function () {
    it('should return even values on even-numbers filter applied on numbers array', function () {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var results = filter(array, function (value) {
            return value % 2 === 0;
        });

        expect(results).toBeInstanceOf(Array);
        expect(results.length).toBePrimitive(); // CUSTOM matcher
        expect(results.length).toBe(4);

        for (var i = 0; i < results.length; i++) {
            expect(results[i]).toBe(array[i * 2 + 1]);
        }
    });

    it('should return even values on even-numbers filter applied on numbers array', function () {
        var array = ['abc', 'hola', 'mundo', 'hello', 'world'];

        var results = filter(array, function (value) {
            return value.indexOf('o') > -1;
        });

        expect(results).toBeInstanceOf(Array);
        expect(results.length).toBe(4);
        expect(results[0]).toBe('hola');
        expect(results[1]).toBe('mundo');
        expect(results[2]).toBe('hello');
        expect(results[3]).toBe('world');
    });

    it('should fail on non-array first argument', function () {
        expect(function () {
            filter(undefined, function () { });
        }).toThrowError(TypeError, 'undefined is not an Array');
    });
});