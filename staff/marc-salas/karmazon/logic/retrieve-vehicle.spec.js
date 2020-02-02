'use strict';

describe('retrieveVehicles', function() {
    it('should succeed on valid id#', function(done) {
        searchVehicles('batman', function(results) {
            expect(results).toBeDefined();
            expect(results.length).toBeGreaterThan(0);

            results.forEach(function(result) {
                expect(typeof result.id).toBe('string');
                expect(typeof result.name).toBe('string');
                expect(typeof result.thumbnail).toBe('string');
                expect(typeof result.price).toBe('number');
            });

            done();
        });
    });

    it('should succeed on non-matching query returning an empty array', function(done) {
        searchVehicles('asdasdfñlajsfklasldñkfjañlsjflasjflasjfñladjs', function(results) {
            expect(results).toBeDefined();
            expect(results).toHaveLength(0);

            done();
        });
    });

    it('should fail on non-string query', function() {
        expect(function() {
            searchVehicles(undefined, function() {});
        }).toThrowError(TypeError, 'undefined is not a string');

        expect(function() {
            searchVehicles(1, function() {});
        }).toThrowError(TypeError, '1 is not a string');

        expect(function() {
            searchVehicles(true, function() {});
        }).toThrowError(TypeError, 'true is not a string');

        expect(function() {
            searchVehicles({}, function() {});
        }).toThrowError(TypeError, '[object Object] is not a string');
    });

    it('should fail on non-function callback', function() {
        expect(function() {
            searchVehicles('', undefined);
        }).toThrowError(TypeError, 'undefined is not a function');

        expect(function() {
            searchVehicles('', 1);
        }).toThrowError(TypeError, '1 is not a function');

        expect(function() {
            searchVehicles('', true);
        }).toThrowError(TypeError, 'true is not a function');

        expect(function() {
            searchVehicles('', {});
        }).toThrowError(TypeError, '[object Object] is not a function');
    });
});