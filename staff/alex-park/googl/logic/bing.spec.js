'use strict';

describe('bing through proxy', function () {
    it('should return an Array', function (done) {
        bing('pepito', function(results) {
            expect(results instanceof Array).toBe(true);

            done();
        });
    });

    it('should show objects inside the main array', function (done) {
        bing('pepito', function(results) {
            results.forEach(function(result) {
                expect(result instanceof Object).toBe(true);
            })
            
            done();
        });
    });

    it('should throw a TypeError if the callback is not defined', function (done) {
        expect(function() {
            bing('pepito');
        }).toThrowError(TypeError, 'undefined is not a function');

        done();
    })

    it('should throw a TypeError if the callback is not a function', function (done) {
        expect(function() {
            bing('pepito', 'a');
        }).toThrowError(TypeError, 'a is not a function');

        done();
    })
});
