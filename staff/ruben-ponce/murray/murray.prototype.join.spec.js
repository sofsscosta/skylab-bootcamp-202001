describe('Murray.prototype.join', function () {
    it('should have return from array [1,2,3,4], the result 1,2,3,4', function () {
        var murray = new Murray(1,2,3,4);
        var result = murray.join();

        expect(result).toBe("1,2,3,4");
    });
    it('should have return from array [1,2,3,4], the result 1:2:3:4', function () {
        var murray = new Murray(1,2,3,4);
        var result = murray.join(':');

        expect(result).toBe("1:2:3:4");
    });
    it('should have return from array [1,2,3,4], the result 1 2 3 4', function () {
        var murray = new Murray(1,2,3,4);
        var result = murray.join(' ');

        expect(result).toBe("1 2 3 4");
    });
});