'use strict';

describe('googl', function () {
    it('should succeed on matching query', function (done) {
        googl('pepito', function (results) {
            expect(results).toBeDefined();
            //expect(results).toHaveLength(8);
            expect(results.length).toBeGreaterThan(0);

            results.forEach(function (result) {
                expect(typeof result.title).toBe('string');
                expect(typeof result.description).toBe('string');
                expect(typeof result.link).toBe('string');

                if (result.rating)
                    expect(typeof result.rating).toBe('string');
            });

            done();
        });
    });

    it('should succeed on non-matching query returning an empty array', function (done) {
        googl('asdasdfñlajsfklasldñkfjañlsjflasjflasjfñladjs', function (results) {
            expect(results).toBeDefined();
            expect(results).toHaveLength(0);

            done();
        });
    });

    it('should fail on non-string query', function () {
        expect(function () {
            googl(undefined, function () { });
        }).toThrowError(TypeError, 'undefined is not a string');

        expect(function () {
            googl(1, function () { });
        }).toThrowError(TypeError, '1 is not a string');

        expect(function () {
            googl(true, function () { });
        }).toThrowError(TypeError, 'true is not a string');

        expect(function () {
            googl({}, function () { });
        }).toThrowError(TypeError, '[object Object] is not a string');
    });

    it('should fail on non-function callback', function () {
        expect(function () {
            googl('', undefined);
        }).toThrowError(TypeError, 'undefined is not a function');

        expect(function () {
            googl('', 1);
        }).toThrowError(TypeError, '1 is not a function');

        expect(function () {
            googl('', true);
        }).toThrowError(TypeError, 'true is not a function');

        expect(function () {
            googl('', {});
        }).toThrowError(TypeError, '[object Object] is not a function');
    });
});