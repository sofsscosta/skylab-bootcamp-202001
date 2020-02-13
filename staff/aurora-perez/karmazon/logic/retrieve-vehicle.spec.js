'use strict';

describe('retrieveVehicle', function () {
    it('should succeed on matching id', function (done) {
        retrieveVehicle('FYF63', function (details) {
            expect(details).toBeDefined();
            expect(typeof details.id).toBe('string');
            expect(typeof details.name).toBe('string');
            expect(typeof details.image).toBe('string');
            expect(typeof details.maker).toBe('string');
            expect(typeof details.color).toBe('string');
            expect(typeof details.style).toBe('string');
            expect(typeof details.year).toBe('number');
            expect(typeof details.description).toBe('string');
            expect(typeof details.collection).toBe('string');
            expect(typeof details.price).toBe('number');
            
            done();
        });
    });

    it('should succeed on non-matching id returning an empty object', function (done) {
        retrieveVehicle('hahahahahhahahahhahahaha', function (details) {
            expect(details).toBeDefined();
          

            done();
        });
    });

    it('should fail on non-string id', function () {
        expect(function () {
            retrieveVehicle(undefined, function () { });
        }).toThrowError(TypeError, 'undefined is not a string');

        expect(function () {
            retrieveVehicle(2, function () { });
        }).toThrowError(TypeError, '2 is not a string');

        expect(function () {
            retrieveVehicle(false, function () { });
        }).toThrowError(TypeError, 'false is not a string');

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