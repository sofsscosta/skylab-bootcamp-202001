describe('Murray.prototype.flat', function() {
    it('should return a murray without arrays if there are no nested arrays inside of values', function() {
        var murray = new Murray(1, 2, [3, 4], 5, [6, 7], 8)
        var result = murray.flat()

        expect(result.length).toBe(8)
        for (var i = 0; i<result.length; i++)
            expect(typeof result[i]).not.toBe('Array')
    })

    it('should return a murray without nested arrays, obeying to depth parameter', function() {
        var murray = new Murray(1, 2, [3, [4]], 5, [6, 7], 8)
        var result = murray.flat(2)

        expect(result.length).toBe(8)
        for (var i = 0; i<result.length; i++)
            expect(typeof result[i]).not.toBe('Array')
        
        var murray = new Murray(1, 2, [3, [4, [5]]], [6, 7], 8)
        var result = murray.flat(3)

        expect(result.length).toBe(8)
        for (var i = 0; i<result.length; i++)
            expect(typeof result[i]).not.toBe('Array')
    })

    it('should not change the original array', function() {
        var murray = new Murray(1, 2, [3], 4, 5, 6, [7], 8)
        murray.flat()

        expect(murray[2][0]).toBe(3)
        expect(murray[6][0]).toBe(7)
    })

    it('should return the original array if depth is neither a number nor true', function() {
        var murray = new Murray(1, 2, [3], 4, 5, 6, [7], 8)
        var result = murray.flat('a')

        expect(result).toBe(murray)

        var murray = new Murray(1, 2, [3], 4, 5, 6, [7], 8)
        var result = murray.flat(function() {})

        expect(result).toBe(murray)
    })

    it('should assume depth === 1 in case depth === true', function () {
        var murray = new Murray(1, 2, [3], 4, 5, 6, [7], 8)
        var result = murray.flat(true)

        expect(result.length).toBe(8)
        for (var i = 0; i<result.length; i++)
            expect(typeof result[i]).not.toBe('Array')
    })

    it('should return the original array if depth is a negative number or false', function() {
        var murray = new Murray(1, 2, [3], 4, 5, 6, [7], 8)
        var result = murray.flat(false)

        expect(result).toBe(murray)

        var murray = new Murray(1, 2, [3], 4, 5, 6, [7], 8)
        var result = murray.flat(-3)

        expect(result).toBe(murray)
    })

    it('should return a murray equal to the original one in case a non integer number is passed', function() {
        var murray = new Murray(1, 2, [3, [4, [5]]], [6, 7], 8)
        var result = murray.flat(2.4)

        expect(result).toBe(murray)
    })

    it('should assume depth === 1 in case depth === undefined', function() {
        var murray = new Murray(1, 2, [3, 4], 5, [6, 7], 8)
        var result = murray.flat(undefined)

        expect(result.length).toBe(8)
        for (var i = 0; i<result.length; i++)
            expect(typeof result[i]).not.toBe('Array')
    })

    it('should fail unless a murray is passed', function() {
       expect(function() {
        true.flat()
       }).toThrowError(TypeError, 'true.flat is not a function')

       expect(function() {
        'fawef'.flat()
       }).toThrowError(TypeError, '"fawef".flat is not a function')

       expect(function() {
        var fun = function() {}
        fun.flat()
       }).toThrowError(TypeError, 'fun.flat is not a function')

       expect(function() {
        (1).flat()
       }).toThrowError(TypeError, '1.flat is not a function')
    })

})