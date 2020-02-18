describe('Murray.prototype.some', function() {
    it('should return true if any elements satisfy the condition passed on the function', function() {
        var murray = new Murray (10, 172, 25, 2, 85, 230)
        var result = murray.some(function(value){return value>50})

        expect(result).toBe(true)
    })

    it('should return false in case no elements satisfy the passed condition', function() {
        var murray = new Murray (10, 172, 25, 2, 85, 230)
        var result = murray.some(function(value){return value>500})

        expect(result).toBe(false)
    })

    it('should return false in case the function passed is empty', function() {
        var murray = new Murray (10, 172, 25, 2, 85, 230)
        var result = murray.some(function(){})

        expect(result).toBe(false)
    })

    it('should not change the original murray', function() {
        var murray = new Murray (10, 11, 12, 13, 14, 15)
        var result = murray.some(function(value){return value===12})

        for (var i = 0; i<murray.length; i++) {
            expect(murray[i]).toBe(i + 10)
        }
    })

    it('should not work if no function is passed as a first argument', function() {
        expect(function() {
            new Murray(1, 2, 3, 4).some(1)
        }).toThrowError(ReferenceError, '1 is not a function')

        expect(function() {
            new Murray(1, 2, 3, 4).some(true)
        }).toThrowError(ReferenceError, 'true is not a function')

        expect(function() {
            new Murray(1, 2, 3, 4).some('a')
        }).toThrowError(ReferenceError, 'a is not a function')
    })

    it('should not work if some is not being applied to an array', function() {
        expect(function() {
            (1).some(function(value){return value>0})
        }).toThrowError(TypeError, '1.some is not a function')

        expect(function() {
            true.some(function(value){return value>0})
        }).toThrowError(TypeError, 'true.some is not a function')

        expect(function() {
            'array'.some(function(value){return value>2})
        }).toThrowError(TypeError, '"array".some is not a function')

        expect(function() {
            var fun = function(){}
            fun.some(function(value){return value})
        }).toThrowError(TypeError, 'fun.some is not a function')
    })

})