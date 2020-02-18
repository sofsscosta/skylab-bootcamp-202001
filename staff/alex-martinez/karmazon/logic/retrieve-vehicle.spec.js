// 'use strict';

// describe('retrieveVehicle', function () {
//     var id
//     beforeEach(function() {
//         var someIds = [
//             'FYD40',
//             'FXB13',
//             'FYG85',
//             'FYF85',
//             'FYF03',
//             'FYF05',
//             'FRR85',
//             'FRR84',
//             'DMM13',
//             'DJM19'
//         ]

//         id = someIds[Math.floor(Math.random()*10)]
//     })


//     it('should succeed on matching query', function (done) {
//         retrieveVehicle(id, function (details) {
//             expect(details).toBeDefined();
//             expect(details).not.toBeInstanceOf(Error);

//                 expect(typeof details.id).toBe('string');
//                 expect(typeof details.name).toBe('string');
//                 expect(typeof details.collection).toBe('string');
//                 expect(typeof details.color).toBe('string');
//                 expect(typeof details.description).toBe('string');
//                 expect(typeof details.image).toBe('string');
//                 expect(typeof details.maker).toBe('string');
//                 expect(typeof details.style).toBe('string');
//                 expect(typeof details.url).toBe('string');
//                 expect(typeof details.price).toBe('number');

//             done();
//         });
//     });

// });





describe('retrieveVehicle', () => {
    it('should succeed on matching vehicle id', done => { debugger
        const ids = ['FYF46', 'FYF93', 'FYD43', 'FYD16', 'FYC00', 'FYC05', 'FYF75', 'FYB99', 'FYC82', 'FYD62', 'FYD19', 'FYC38', 'FYC55', 'FYD18', 'FJW82', 'FYG57', 'FYD55', 'FYD65', 'FJY64', 'FJY65']

        const id = ids.random()

        retrieveVehicle(id, vehicle => {
            expect(vehicle).not.toBeInstanceOf(Error)

            expect(vehicle.id).toBe(id)
            expect(typeof vehicle.name).toBe('string')
            expect(typeof vehicle.year).toBe('number')
            // TODO ...

            done()
        })
    })

    it('should return null on non-matching vehicle id', done => {
        const id = 'non-valid-id'

        retrieveVehicle(id, vehicle => {
            expect(vehicle).not.toBeInstanceOf(Error)

            expect(vehicle).toBeNull()

            done()
        })
    })
})