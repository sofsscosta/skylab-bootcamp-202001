'use strict';

describe('googl', function () {
    it('should fail on non-primitive first parameter', function () {
        var query = function () { };
        var callback = function () { };

        try {
            googl(query, callback);
        } catch (error) {
            expect(error instanceof TypeError).toBe(true);
            var expectedMessage = 'Expects query to be a primitive value. ' + (typeof query) + ' given';
            expect(error.message === expectedMessage).toBe(true);
        }
    });

    it('should fail on empty first parameter', function () {
        var query = "";
        var callback = function () { };

        try {
            googl(query, callback);
        } catch (error) {
            expect(error instanceof RangeError).toBe(true);
            var expectedMessage = 'Expects length of query value to be at least 1. None given';
            expect(error.message === expectedMessage).toBe(true)
        }
    });

    it('should fail on non-function second parameter', function () {
        var query = "skylab academy";
        var callback = undefined;

        try {
            googl(query, callback);
        } catch (error) {
            expect(error instanceof TypeError).toBe(true);
            var expectedMessage = 'callback is not a function. "' + (typeof callback) + '" given';
            expect(error.message === expectedMessage).toBe(true);
        }
    });

    it('should every item in results have title key', function (done) {
        googl('pepito', function (results) {
            for(var x = 0; x < results.length; x++) {
                var item = results[x];

                expect(item['title']).not.toBeUndefined();
                expect(item.title.length > 0).toBe(true);
            }

            done();
        })
    })
});