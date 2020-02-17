describe('Murray.prototype.shift', function () {
    it('should have return value substracted 1 of array [1,2,3,4] and her new length is 3', function () {
        var murray = new Murray(1,2,3,4);
        var result = murray.shift();

        expect(result).toBe(1);
        expect(murray.length).toBe(3);
    });
});