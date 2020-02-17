describe('Murray.prototype.unshift', function () {
    it('should have return [0,1,2,3] of array [1,2,3]', function () {
        var murray = new Murray(1,2,3);
        var unshifted = murray.unshift(0);

        expect(unshifted.length).toBe(4);
        expect(unshifted[0]).toBe(0);
    });
});