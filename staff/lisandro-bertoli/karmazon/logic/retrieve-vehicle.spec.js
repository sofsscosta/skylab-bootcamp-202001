'use strict';

describe('retreieveVehicle', function () {
    fit('should succeed on matching id', function (done) {
        retrieveVehicle('batman', function (results) {
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
});