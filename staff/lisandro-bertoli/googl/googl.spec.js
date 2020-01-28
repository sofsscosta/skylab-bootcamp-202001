describe('Googl', function () {
    it('should a results array be created', function (done) {
        googl('pepito', function (results) {
            expect(results instanceof Array).toBe(true);
            expect(results.length).toBe(11);
            done();
        });

    });

    it('should a result object be created for each result of the query', function (done) {
        googl('pepito', function (results) {
            results.forEach(function (result) {
                expect(result instanceof Object).toBe(true);
            });
            done();
        });
    });

    it('should each result have a title and description', function (done) {
        googl('pepito', function (results) {
            results.forEach(function (result) {
                expect(result.title).toBeDefined()
                expect(result.description).toBeDefined();
            });
            done();
        });
    });

    it('should fail when non-function callback is given as second parameter', function () {
        expect(function () {
            googl('pepito', 1).toThrowError(TypeError, '1 is not a function');
        });


    })
});



// googl('pepito', function (results) {
//     results.forEach(function (result) {
//         console.log(result)
//         console.assert(result, 'should the query have a result');
//         console.assert(result.title, 'should the result have a title');
//         console.assert(result.description, 'should the result have a description');

//     });
// })

// describe('google', function () {
//     it('should a results array be returned', function () {
//         googl('pepito', function (results) {
//             results.forEach(function (result) {
//                 return result
//             })
//         })
//     })
// });