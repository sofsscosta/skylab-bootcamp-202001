describe('Googl', function () {
    it('should always return title', function (done) {
        googl('dario', function (results) {
            results.forEach(function(result) {
                expect(typeof result.title).toBe('string');
            })
            done();
        });
    });
    it('should always return description', function (done) {
        googl('dario', function (results) {
            results.forEach(function(result) {
                expect(typeof result.description).toBe('string');
            })
            done();
        });
    });

});