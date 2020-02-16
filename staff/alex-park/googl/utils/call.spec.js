'use strict'

describe('call', function () {
    it('should succeed on a valid URL', function (done) {
        var targets = [
            { url: 'https://www.lavanguardia.com/', text: 'vanguardia' },
            { url: 'https://www.eldiario.es/', text: 'eldiario' },
            { url: 'https://www.elmundo.es/', text: 'mundo' },
            { url: 'https://www.expansion.com/', text: 'expansion' },
            { url: 'https://www.abc.es/', text: 'abc' }
        ];

        var target = targets.random();

        call('https://skylabcoders.herokuapp.com/proxy?url=' + target.url, function(response) {
            expect(response.status).toBe(200);
            expect(response.content.toLowerCase()).toContain(target.text);
            done();
        });
        
    });

    it('should fail on a non-valid url', function(done) {
        var url = 'asdojfnaf'

        expect(function() {
            call(url);
        }).toThrowError(SyntaxError, url + ' is not an url');

        done()
    });

    it('should fail on a valid non-existent url', function(done) {
        var url = 'https://jejejojo.url';

        call(url, function(error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Network error');

            done();
        });
       
    })
});