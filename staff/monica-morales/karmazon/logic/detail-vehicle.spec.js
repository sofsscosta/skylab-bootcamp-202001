'use strict';

describe('retrieveVehicle', function () {
    fit('should succeed on matching query', function (done) {
        retrieveVehicle('mario', function (results) {
            expect(results).toBeDefined();
            expect(results.length).toBeGreaterThan(0);

            results.forEach(function (result) {
                expect(typeof result.id).toBe('string');
                expect(typeof result.name).toBe('string');
                expect(typeof result.thumbnail).toBe('string');
                expect(typeof result.price).toBe('number');
            });

            done();
        });
    });

    it('should succeed on non-matching query returning an empty array', function (done) {
        retrieveVehicle('asdasdfñlajsfklasldñkfjañlsjflasjflasjfñladjs', function (results) {
            expect(results).toBeDefined();
            expect(results).toHaveLength(0);

            done();
        });
    });

    it('should fail on non-string query', function () {
        expect(function () {
            retrieveVehicle(undefined, function () { });
        }).toThrowError(TypeError, 'undefined is not a string');

        expect(function () {
            retrieveVehicle(1, function () { });
        }).toThrowError(TypeError, '1 is not a string');

        expect(function () {
            retrieveVehicle(true, function () { });
        }).toThrowError(TypeError, 'true is not a string');

        expect(function () {
            retrieveVehicle({}, function () { });
        }).toThrowError(TypeError, '[object Object] is not a string');
    });

    it('should fail on non-function callback', function () {
        expect(function () {
            retrieveVehicle('', undefined);
        }).toThrowError(TypeError, 'undefined is not a function');

        expect(function () {
            retrieveVehicle('', 1);
        }).toThrowError(TypeError, '1 is not a function');

        expect(function () {
            retrieveVehicle('', true);
        }).toThrowError(TypeError, 'true is not a function');

        expect(function () {
            retrieveVehicle('', {});
        }).toThrowError(TypeError, '[object Object] is not a function');
    });
});