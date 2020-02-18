describe('Murray.prototype.slice', function() {
    it('should return the sliced elements of the array, starting from the first element passed and ending in the second, if there is any', function () {
        var murray = new Murray (1, 2, 3, 4, 5, 6)
        var result = murray.slice(2,5)
  
        expect(result).toBeInstanceOf(Murray)
        expect(result.length).toBe(3)

        expect(result[0]).toBe(3)
        expect(result[1]).toBe(4)
        expect(result[2]).toBe(5)
    })

    it('should not change the original array', function() {
        var murray = new Murray (1, 2, 3, 4, 5, 6)
        var result = murray.slice(2,5)

        expect(result).toBeInstanceOf(Murray)
        expect(result.length).toBe(3)
        expect(result).not.toBe(murray)
    })

    it('should return the original array in case you pass no parameters', function(){
        var murray = new Murray (1, 2, 3, 4, 5, 6)
        var result = murray.slice()

        expect(result).toBeInstanceOf(Murray)
        expect(result.length).toBe(0)
    })

    it('should return the sliced elements from the start parameter until the end of the array, in case no end parameter is passed', function() {
        var murray = new Murray (1, 2, 3, 4, 5, 6)
        var result = murray.slice(4)
  
        expect(result).toBeInstanceOf(Murray)
        expect(result.length).toBe(2)

        expect(result[0]).toBe(5)
        expect(result[1]).toBe(6)
    })

    it('should work if a string is passed', function(){
        var result = 'me encantan patatas'.slice(14)
  
        expect(result.length).toBe(5)

        expect(result[0]).toBe('t')
        expect(result[1]).toBe('a')
        expect(result[2]).toBe('t')
        expect(result[3]).toBe('a')
        expect(result[4]).toBe('s')

    })

    it('should work if a boolean is passed', function(){
        var result = 'me encantan patatas'.slice(true)
  
        expect(result.length).toBe(18)
        expect(result).toBe('e encantan patatas')

        var result1 = 'me encantan patatas'.slice(false)
  
        expect(result1.length).toBe(19)
        expect(result1).toBe('me encantan patatas')
    })

    it('should not work unless you pass an array or a string', function() {
        expect(function(){
            true.slice()
        }).toThrowError(TypeError, 'true.slice is not a function')

        expect(function() {
            var fun = function(value) {return value + 3}
            fun.slice()
        }).toThrowError(TypeError, 'fun.slice is not a function')
    })

})