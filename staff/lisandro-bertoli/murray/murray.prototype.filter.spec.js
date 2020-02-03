describe('Murray.prototype.filter', function () {
    it('should a new murray be returned with elements that pass the test', function () {
        var murray = new Murray(1, 2, 3, 4);

        var returnValue = murray.filter(function (element) { return element > 2 });

        expect(returnValue[0]).toBe(3);
        expect(returnValue[1]).toBe(4);

    });

    it('should an empty Murray be returned if no element pass the test', function () {
        var murray = new Murray(1, 2, 3);
        var returnValue = murray.filter(function (element) { return element > 4 });

        expect(returnValue).toBeInstanceOf(Murray);
        expect(returnValue[0]).toBeUndefined();
    });

    it('should not modify the original array', function () {
        var murray = new Murray(1, 2, 3);
        murray.filter(function (element) { return element + 1 });

        expect(murray.length).toBe(3);
        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(2);
        expect(murray[2]).toBe(3);

    });

    it('should iterate through all elements in the Murray', function () {
        var murray = new Murray(1, 2, 3);
        var returnValue = murray.filter(function (element) { return element });

        expect(returnValue[0]).toBe(1);
        expect(returnValue[1]).toBe(2);
        expect(returnValue[2]).toBe(3);
    });

    it('should the callback accept index as second parameter', function () {
        var murray = new Murray(1, 2, 3, 4, 5);
        var returnValue = murray.filter(function (element, index) {
            return index % 2 === 0 ? true : false;
        });

        expect(returnValue[0]).toBe(1);
        expect(returnValue[1]).toBe(3);
        expect(returnValue[2]).toBe(5);
    });

    it('should fail if non-function expression is given', function () {
        expect(function () {
            new Murray(1, 2, 3).filter(1)
        }).toThrowError(TypeError, '1 is not a function');
        expect(function () {
            new Murray(1, 2, 3).filter('string')
        }).toThrowError(TypeError, 'string is not a function');
        expect(function () {
            new Murray(1, 2, 3).filter({})
        }).toThrowError(TypeError, '[object Object] is not a function');
        expect(function () {
            new Murray(1, 2, 3).filter(true)
        }).toThrowError(TypeError, 'true is not a function');
    });
});