describe('Murray.prototype.push', function () {
    it('should add 4 at the end of murray [1, 2, 3]', function () {
        var murray = new Murray(1, 2, 3);
        var length = murray.push(4);

        expect(length).toBe(4);
        expect(murray[murray.length - 1]).toBe(4);

        murray.forEach(function (value, index) {
            expect(value).toBe(index + 1);
        });
    });

    it('should add 5 at the end of murray [1, 2, 3, 4]', function () {
        var murray = new Murray(1, 2, 3, 4);
        var length = murray.push(5);
        
        expect(length).toBe(5);
        expect(murray[murray.length - 1]).toBe(5);
        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(2);
        expect(murray[2]).toBe(3);
        expect(murray[3]).toBe(4);
    });

    it('should add all the elements in arguments', function() {
        var murray = new Murray(1, 2, 3, 4);
        var result = murray.push(5, 6, 7);

        for (var i = 0; i<murray.length; i++)
            expect(murray[i]).toBe(i + 1)
    })

    it('should work if a function, null or undefined are passed as values', function() {
        var murray = new Murray(1, 2, 3, 4);
        var fun = function(){}
        var result = murray.push(fun, undefined, null);

        expect(murray[4]).toBe(fun)
        expect(murray[5]).toBe(undefined)
        expect(murray[6]).toBe(null)
    })

    it('should fail if method is called upon no array', function() {
        expect(function() {
            true.push('a')
        }).toThrowError(TypeError, 'true.push is not a function')

        expect(function() {
            'a'.push('a')
        }).toThrowError(TypeError, '"a".push is not a function')

        expect(function() {
            (1).push('a')
        }).toThrowError(TypeError, '1.push is not a function')
    })

});