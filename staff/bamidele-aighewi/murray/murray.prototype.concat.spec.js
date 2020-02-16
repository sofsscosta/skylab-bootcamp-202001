describe('Murray.prototype.concat', function () {
    it('should prototype.concat return empty array if no params given', function () {
        var murray = new Murray;
        var response = murray.concat();

        expect(response.length).toBe(0)
    });

    it('should prototype.concat return an array if first argument is an array', function () {
        var murray = new Murray;
        var response = murray.concat([1, 2, 3], "string test");

        expect(response).toBeInstanceOf(Array)
    });

    it('should prototype.concat return a string if first argument is string', function () {
        var murray = new Murray("first param is string", [1, 2, 3]);
        var response = murray.concat();

        expect(typeof response === 'string').toBe(true);
    });
});