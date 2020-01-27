describe('Murray.prototype.sort', function () {
    it('should have return a,b,c,d of c,a,d,b', function () {
        var murray = new Murray('c','a','d','b');
        var sorted = murray.sort();

        expect(sorted.length).toBe(4);
        expect(sorted[0]).toBe('a');
        expect(sorted[3]).toBe('d');
    });
});


