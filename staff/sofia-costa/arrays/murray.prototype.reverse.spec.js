describe('Murray.prototype.reverse', function() {
    it('should generate an array with length equal to original length', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        murray.reverse()

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(5)
    })

    it('should generate an array which\'s elements are equal to the mirrored starting array', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        var result = murray.reverse()

        expect(murray).toBeInstanceOf(Murray)
        
        for (var i = 0; i<murray.length; i++) {
            expect(result[i]).toBe(murray[i])
        }
    })

    it('should fail in case an array is not passed to activate reverse', function() {
        expect(function() {
            true.reverse()
        }).toThrowError(TypeError, 'true.reverse is not a function')

        expect(function() {
            'a'.reverse()
        }).toThrowError(TypeError, '"a".reverse is not a function')

        expect(function() {
            (1).reverse()
        }).toThrowError(TypeError, '1.reverse is not a function')
    })

    
})