describe('Murray.prototype.reverse', function() {
    it('should have return [3,2,1] of array [1,2,3]', function () {
        var murray = new Murray(1, 2, 3);
        var reversed = murray.reverse(murray);
        expect(reversed.length).toBe(3);
        expect(reversed[0]).toBe(3);
        expect(reversed[1]).toBe(2);
        expect(reversed[2]).toBe(1);
    });
});