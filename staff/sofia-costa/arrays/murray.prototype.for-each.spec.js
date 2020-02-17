describe('Murray.prototype.forEach', function () {
    it('should murray [1, 2, 3] be modified adding 10 to each value', function () {
        //a = 10
        var murray = new Murray(1, 2, 3);

        murray.forEach(function (value, index) {
            murray[index] = value + 10;
        }); // HAPPY path :)

        expect(murray.length).toBe(3);

        for (var i = 0; i < murray.length; i++)
            expect(murray[i]).toBe(i + 1 + 10);
    });

    it('should each value of murray [1, 2, 3] be added 10 and stored in results murray', function () {
        var murray = new Murray(1, 2, 3);
        var results = [];

        murray.forEach(function (value, index) { results[index] = value + 10 });

        expect(murray.length).toBe(3);

        for (var i = 0; i < murray.length; i++)
            expect(murray[i]).toBe(i + 1);

        results.forEach(function (result, index) {
            expect(result).toBe(murray[index] + 10);
        });
    });

    it('should fail on non-function expression', function () {
        expect(function () {
            new Murray(1, 2, 3).forEach(); // UNHAPPY path :(
        }).toThrowError(TypeError, 'undefined is not a function');

        expect(function () {
            new Murray(1, 2, 3).forEach(true);
        }).toThrowError(TypeError, 'true is not a function');

        // TODO refactor following unhappy cases to expect

        expect(function () {
            new Murray(1, 2, 3).forEach(1);
        }).toThrowError(TypeError, '1 is not a function');
    });

    it('should fail if no array is passed to activate method', function() {
        expect(function () {
            (3).forEach(function (value, index) { results[index] = value + 10 }); 
        }).toThrowError(TypeError, '3.forEach is not a function');

        expect(function () {
            'adaaefrf'.forEach(function (value, index) { results[index] = value + 10 }); 
        }).toThrowError(TypeError, '"adaaefrf".forEach is not a function');

        expect(function () {
            true.forEach(function (value, index) { results[index] = value + 10 }); 
        }).toThrowError(TypeError, 'true.forEach is not a function');

        expect(function () {
            var fun = function(){}
            fun.forEach(function (value, index) { results[index] = value + 10 }); 
        }).toThrowError(TypeError, 'fun.forEach is not a function');

        expect(function () {
            forEach(function (value, index) { results[index] = value + 10 }); 
        }).toThrowError(ReferenceError, 'forEach is not defined');

    })

});