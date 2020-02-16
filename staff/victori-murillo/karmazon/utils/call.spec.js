describe('call', function () {
    it('should succeed on valid url', function (done) {
        var targets = [
            { url: 'https://www.lavanguardia.com/', text: 'vanguardia' },
            { url: 'https://www.eldiario.es/', text: 'eldiario' },
            { url: 'https://www.elmundo.es/', text: 'mundo' },
            { url: 'https://www.expansion.com/', text: 'expansion' },
            { url: 'https://www.abc.es/', text: 'abc' }
        ];

        var target = targets.random();

        call('https://skylabcoders.herokuapp.com/proxy?url=' + target.url, undefined, function(response) {
            expect(response.status).toBe(200);

            //expect(response.content.toLowerCase().includes(target.text)).toBeTruthy();
            expect(response.content.toLowerCase()).toContain(target.text);

            done();
        });
    });

    it('should fail on invalid url', function() {
        var url = 'invalid-url';

        expect(function() {
            call(url, undefined, function() {})
        }).toThrowError(SyntaxError, url + ' is not an url');
    });

    it('should fail on valid non-existing url', function(done) {
        var url = 'https://non-existing.url';
        
        call(url, undefined, function(error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Network error');
            done();
        });
    });

    it('should fail on non-function as third argument', function() {
        var url = 'https://www.google.com';

        expect(() => call(url, undefined)).toThrowError(TypeError, 'undefined is not a function')
        expect(() => call(url, undefined, {})).toThrowError(TypeError, '[object Object] is not a function')
        expect(() => call(url, undefined, [])).toThrowError(TypeError, 'Array is not a function')
        expect(() => call(url, undefined, "string")).toThrowError(TypeError, 'string is not a function')
        expect(() => call(url, undefined, 1)).toThrowError(TypeError, '1 is not a function')
        expect(() => call(url, undefined, true)).toThrowError(TypeError, 'true is not a function')
    });
});