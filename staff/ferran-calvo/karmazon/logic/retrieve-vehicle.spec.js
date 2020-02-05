'use strict';

describe('retrieveVehicle', function () {
    var id
    beforeEach(function() {
        var someIds = [
            'FYD40',
            'FXB13',
            'FYG85',
            'FYF85',
            'FYF03',
            'FYF05',
            'FRR85',
            'FRR84',
            'DMM13',
            'DJM19'
        ]

        id = someIds[Math.floor(Math.random()*10)]
    })


    it('should succeed on matching query', function (done) {
        retrieveVehicle(id, function (details) {
            expect(details).toBeDefined();
            expect(details).not.toBeInstanceOf(Error);

                expect(typeof details.id).toBe('string');
                expect(typeof details.name).toBe('string');
                expect(typeof details.collection).toBe('string');
                expect(typeof details.color).toBe('string');
                expect(typeof details.description).toBe('string');
                expect(typeof details.image).toBe('string');
                expect(typeof details.maker).toBe('string');
                expect(typeof details.style).toBe('string');
                expect(typeof details.url).toBe('string');
                expect(typeof details.price).toBe('number');

            done();
        });
    });

});