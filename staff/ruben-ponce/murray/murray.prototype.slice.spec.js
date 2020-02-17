describe('Murray.prototype.slice', function () {
    it('should return 2,3 of array 1,2,3,4', function () {
        var murray = new Murray(1,2,3,4);
        var sliced = murray.slice(1,3);

        expect(sliced.length).toBe(2);
        expect(sliced[0]).toBe(2);
        expect(sliced[1]).toBe(3);
    });
});