describe('Murray.prototype.isArray', function() {
    it('should have return true of array [1,2,3]', function () {
        var murray = new Murray(1, 2, 3);
        var boolean = murray.isArray(murray);
        expect(boolean).toBe(true);
    });
});