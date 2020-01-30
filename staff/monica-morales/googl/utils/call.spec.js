'use strict';

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

        call('https://skylabcoders.herokuapp.com/proxy?url=' + target.url, function(response) {
            expect(response.status).toBe(200);

            //expect(response.content.toLowerCase().includes(target.text)).toBeTruthy();
            expect(response.content.toLowerCase()).toContain(target.text);

            done();
        });
    });

    it("Should fail on invalid url,", function(){
        var url= "pepito los palotes anoche no fumo";

        expect(function(){
            call
        })
    })









});