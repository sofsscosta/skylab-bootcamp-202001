describe('Murray.prototype.copyWithin', function() {
    it('should prototype.copyWithin return empty array if no params given', function() {
        var murray = new Murray;
        var response = murray.copyWithin();

        expect(response.length).toBe(0)
    });

    false && it('should prototype.concat return an array if first argument is an array', function () {
        var murray = new Murray;
        var response = murray.concat([1,2,3], "string test");

        expect(response).toBeInstanceOf(Array)
    });

    false && it('should prototype.concat return a string if first argument is string', function () {
        var murray = new Murray(1,2,4,5);
        console.log(murray)
        var response = murray.concat();

        expect(response).toBeInstanceOf(String)
    });
});