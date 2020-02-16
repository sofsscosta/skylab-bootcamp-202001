describe('Murray.prototype.map', function() {
    it('should return an array that changes the parameters of the original murray according to the function passed', function() {
        var murray = new Murray (1, 2, 3, 4, 5)
        var result = murray.map(function(value){return value*10})

        for (var i = 0; i<result.length; i++) {
            expect(result[i]).toBe(murray[i]*10)
        }
    })

    it('should not change the original murray', function() {
        var murray = new Murray (1, 2, 3, 4, 5)
        var result = murray.map(function(value){return value*10})
        expect(result).toBeInstanceOf(Murray)
        for (var i = 0; i<murray.length; i++) {
            expect(murray[i]).not.toBe(result[i])
        }
    })

    it('should return an array with the same length as the original', function() {
        var murray = new Murray (1, 2, 3, 4, 5)
        var result = murray.map(function(value){return value*10})

        expect(result).toBeInstanceOf(Murray)
        expect(result.length).toBe(murray.length)
    })

    it('should return an array with the same length as the original even if the function passed only applies to certain elements', function() {
        var murray = new Murray (1, 2, 3, 4, 5)
        var result = murray.map(function(value){if(value>3) return value})

        expect(result).toBeInstanceOf(Murray)
        expect(result.length).toBe(murray.length)
        for (var i = 3; i<result.length; i++)
            expect(result[i]).toBe(murray[i])
    })

    it('should return an array filled with undefined values if the function passed is empty', function() {
        var murray = new Murray (1, 2, 3, 4, 5)
        var result = murray.map(function(){})

        expect(result).toBeInstanceOf(Murray)
        expect(result.length).toBe(murray.length)
        for (var i = 0; i<result.length; i++)
            expect(result[i]).toBe(undefined)
    })

    it('should not work if no function is passed as a first argument', function() {
        expect(function() {
            new Murray(1, 2, 3, 4).map(1)
        }).toThrowError(TypeError, '1 is not a function')

        expect(function() {
            new Murray(1, 2, 3, 4).map(true)
        }).toThrowError(TypeError, 'true is not a function')

        expect(function() {
            new Murray(1, 2, 3, 4).map('a')
        }).toThrowError(TypeError, 'a is not a function')
    })

    it('should not work if map is not being applied to an array', function() {
        expect(function() {
            (1).map(function(value){return value})
        }).toThrowError(TypeError, '1.map is not a function')

        expect(function() {
            true.map(function(value){return value})
        }).toThrowError(TypeError, 'true.map is not a function')

        expect(function() {
            'array'.map(function(value){return value})
        }).toThrowError(TypeError, '"array".map is not a function')

        expect(function() {
            var fun = function(){}
            fun.map(function(value){return value})
        }).toThrowError(TypeError, 'fun.map is not a function')
    })

})