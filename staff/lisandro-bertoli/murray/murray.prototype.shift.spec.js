describe('Murray.prototype.shift', function () {
    it('should return the removed value', function () {
        var murray = new Murray(1, 2, 3);
        var returnValue = murray.shift();

        expect(returnValue).toBe(1);
    });

    it('should return undefined when called on empty murray', function () {
        var murray = new Murray();
        var returnValue = murray.shift();

        expect(returnValue).toBe(undefined);
    });


    it('should the murray length be modified', function () {
        var murray = new Murray(1, 2, 3);
        murray.shift();

        expect(murray.length).toBe(2);
    });

    it('should the first element be removed from original array', function () {
        var murray = new Murray(1, 2, 3);

        murray.shift();

        expect(murray[0]).toBe(2);
        expect(murray[1]).toBe(3);
    });
});