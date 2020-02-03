describe('Murray.prototype.pop', function () {
    it('should decrease the murray length by 1', function () {
        var murray = new Murray(1, 2, 3);

        murray.pop();

        expect(murray.length).toBe(2);
    });

    it('should remove the last element from murray [1, 2, 3]', function () {
        var murray = new Murray(1, 2, 3);

        murray.pop();

        expect(murray[2]).toBe(undefined);
    });

    it('should return the removed element from murray [1, 2, 3]', function () {
        var murray = new Murray(1, 2, 3);

        var returnValue = murray.pop();

        expect(returnValue).toBe(3);
    });

    it('should return undefined if called on an empty murray', function () {
        var murray = new Murray();

        var returnValue = murray.pop();

        expect(returnValue).toBe(undefined);
    });

});