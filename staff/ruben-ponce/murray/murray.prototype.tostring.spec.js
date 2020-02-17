describe('Murray.prototype.tostring', function () {
    it('should have return 123 of array [1,2,3]', function () {
        var murray = new Murray(1,2,3);
        var stringer = murray.tostring(murray);
        
        expect(stringer.length).toBe(3);
        expect(stringer[0]).toBe("1");
    });
});