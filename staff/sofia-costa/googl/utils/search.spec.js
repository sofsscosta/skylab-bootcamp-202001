describe('search', function() {

    it('should fail on invalid url', function() {
        var url = 'invalid-url';

        expect(function() {
            search(url, 'sass', 'sass', 'sass', 'sass', function(){})
        }).toThrowError(SyntaxError, url + ' is not an url');

    });

    it('should fail if arguments number 2 to 5 are not strings', function () {
        var argument = 123

        expect(function() {
            search('https://www.lavanguardia.com/', argument, argument, argument, argument, function(){})
        }).toThrowError(TypeError, argument + ' is not a string');
    })

    it('should fail if callback is not a function', function () {

        expect(function() {
            search('https://www.lavanguardia.com/', 'sass', 'sass', 'sass', 'sass', 123)
        }).toThrowError(TypeError, 123 + ' is not a function');
    })
})
    

    // it('should fail on valid non-existing url', function(done) {
    //     var url = 'https://non-existing.url';
        
    //     call(url, function(error) {
    //         expect(error).toBeInstanceOf(Error);
    //         expect(error.message).toBe('Network error');

    //         done();
    //     });
    // });



        // DONT USE PLEASE

        // call('https://skylabcoders.herokuapp.com/proxy?url=' + target.url, function(response) {
        //     expect(response.status).toBe(200);

        //     //expect(response.content.toLowerCase().includes(target.text)).toBeTruthy();
        //     expect(response.content.toLowerCase()).toContain(target.text);

        //     done();
        // });
