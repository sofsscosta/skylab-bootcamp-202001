describe('Murray.prototype.map', function () {
    it('should a new murray instance be returned', function () {
        var murray = new Murray(1, 2, undefined);
        var returnValue = murray.map(function (element) { return element });

        expect(returnValue).toBeInstanceOf(Murray);

    });

    it('should return a murray adding 5 to every element', function () {
        var murray = new Murray(1, 2);
        var returnValue = murray.map(function (element) { return element + 5 });

        expect(returnValue[0]).toBe(6);
        expect(returnValue[1]).toBe(7);
    });

    it('should new murray be of the same length as original murray', function () {
        var murray = new Murray(1, 2);
        var returnValue = murray.map(function (element) { return element + 1 });
        var length = returnValue.length;

        expect(length).toBe(2);
    });

    it('should original murray not be modified', function () {
        var murray = new Murray(1, 2);
        var length = murray.length;

        murray.map(function (element) { return element + 1 });

        expect(length).toBe(2);

        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(2);

    });

    it('should add 1 only to index 2', function () {
        var murray = new Murray(1, 2, 3);
        var returnValue = murray.map(function (element, index) {
            return index === 2 ? element + 1 : element;
        });

        expect(returnValue[0]).toBe(1);
        expect(returnValue[2]).toBe(4);
    });

    it('should fail if non-function parameter is given', function () {

        expect(function () {
            new Murray(1, 2, 3).map();
        }).toThrowError(TypeError, 'undefined is not a function');

        expect(function () {
            new Murray(1, 2, 3).map(1);
        }).toThrowError(TypeError, '1 is not a function');

        expect(function () {
            new Murray(1, 2, 3).map('test');
        }).toThrowError(TypeError, 'test is not a function');

        expect(function () {
            new Murray(1, 2, 3).map(true);
        }).toThrowError(TypeError, 'true is not a function');
    })
});