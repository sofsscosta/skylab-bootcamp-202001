describe("Murray.prototype.unshift", function () {
    it('should return the new length of the murray', function () {
        var murray = new Murray(1, 2, 3);
        var returnValue = murray.unshift(0);

        expect(murray.length).toBe(4)
        expect(returnValue).toBe(murray.length);

    });

    it('should add the given value at index 0', function () {
        var murray = new Murray(1, 2, 3);
        murray.unshift(0);

        expect(murray[0]).toBe(0);
    });

    it('should add multiple values in the given order', function () {
        var murray = new Murray(2, 3, 4);
        murray.unshift(0, 'uno');

        expect(murray[0]).toBe(0);
        expect(murray[1]).toBe('uno');
    });

    it('should return the unmodified length of murray if no parameters are given', function () {
        var murray = new Murray(1, 2, 3);
        var returnValue = murray.unshift();

        expect(returnValue).toBe(3);
        expect(murray.length).toBe(3)
    });

    it('should add undefined if explicitely passed as parameter', function () {
        var murray = new Murray(1, 2, 3);
        var returnValue = murray.unshift(undefined);

        expect(murray[0]).toBeUndefined();
        expect(returnValue).toBe(murray.length);
    });
});