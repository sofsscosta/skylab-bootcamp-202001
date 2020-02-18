'use strict';

describe('call function', function () {
    it('should the given text be found on the provided url', function (done) {
        var urls = [
            {
                url: 'https://www.lavanguardia.com/',
                text: 'vanguardia'
            },
            {
                url: 'https://www.elpais.com/', text: 'elpais'
            },
            {
                url: 'https://www.expansion.com/', text: 'expansion'
            },
            {
                url: 'https://www.marca.com/',
                text: 'marca'
            }
        ];


        var target = urls.random();


        call('https://skylabcoders.herokuapp.com/proxy?url=' + target.url, function (response) {

            expect(response.status).toBe(200);
            expect(response.content.toLowerCase()).toContain(target.text);

            done();
        });

    });
});