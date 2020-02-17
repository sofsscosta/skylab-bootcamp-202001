describe('Murray.prototype.fill', function () {
    it('should modify murray [1, 2, 3, 4, 5, 6] by substituting 3, 4 and 5 by 1', function () {
        var murray = new Murray(1, 2, 3, 4, 5, 6);
        murray.fill(0, 2, 5)
        
        for (var i = 2; i<5; i++)
            expect(murray[i]).toBe(1);
    });

    it('should modify murray [1, 2, 3, 4, 5, 6] by substituting all values after 4 by 2. Passing no end value.', function () {
        var murray = new Murray(1, 2, 3, 4, 5, 6);
        murray.fill(1, 2)

        for (var i = 3; i < murray.length; i++)
            expect(murray[i]).toBe(2);
    });

    it('should modify murray [1, 2, 3, 4, 5, 6] by substituting all values by 4. Passing no start nor end value.', function() {
        var murray = new Murray(1, 2, 3, 4, 5, 6);
        murray.fill(3)

        for (var i = 0; i < murray.length; i++)
            expect(murray[i]).toBe(4);
    })

    it('should modify murray [1, 2, 3, 4, 5, 6] by substituting all values by 4. Passing no parameters.', function() {
        var murray = new Murray(1, 2, 3, 4, 5, 6);
        murray.fill()

        for (var i = 0; i < murray.length; i++)
            expect(murray[i]).toBe(undefined);
    })

    it('should fail on no ', function () {
        expect(function () {
            new Murray(1, 2, 3).forEach(); 
        }).toThrowError(TypeError, 'undefined is not a function');

        expect(function () {
            new Murray(1, 2, 3).forEach(true);
        }).toThrowError(TypeError, 'true is not a function');

        expect(function () {
            new Murray(1, 2, 3).forEach(1);
        }).toThrowError(TypeError, '1 is not a function');
    });

    it('should fail if no array is passed to method', function() {
        expect(function () {
            (3).fill(1) 
        }).toThrowError(TypeError, '3.fill is not a function');

        expect(function () {
            true.fill(1) 
        }).toThrowError(TypeError, 'true.fill is not a function');

        expect(function () {
            'adsfsd'.fill(0) 
        }).toThrowError(TypeError, '"adsfsd".fill is not a function');

        expect(function () {
            var fun = function(){}
            fun.fill(function (value, index) { results[index] = value + 10 }); 
        }).toThrowError(TypeError, 'fun.fill is not a function');

        expect(function () {
            fill(0, 2, 5); 
        }).toThrowError(ReferenceError, 'fill is not defined');
    })

});