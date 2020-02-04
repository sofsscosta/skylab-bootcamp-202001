'use strict';

describe('detailVehicle', function () {
    it('should succeed on matching query', function (done) {
        searchVehicles('batman', function (results) {
            expect(results).toBeDefined();
            expect(results.length).toBeGreaterThan(0);

            results.forEach(function (result) {
                expect(typeof result.id).toBe('string');
                expect(typeof result.name).toBe('string');
                expect(typeof result.thumbnail).toBe('string');
                expect(typeof result.price).toBe('number');
                expect(typeof results.image).toBe('string');
                expect(typeof results.year).toBe('number');
                expect(typeof results.color).toBe('string');
                expect(typeof results.maker).toBe('string');
                expect(typeof results.collection).toBe('string');
            });

            done();
        });
    });
});