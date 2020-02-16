describe('Murray.prototype.join', function() {
    it('should return a string where the murray\'s values are separated by commas', function() {
        var murray = new Murray('a', 'b', 'c', 'd')
        var result = murray.join()

        expect(result).toBe('a,b,c,d')
    })

    it('should return a string separated by value defined as separator, if it is defined', function() {
        var murray = new Murray('a', 'b', 'c', 'd')
        var result = murray.join(' ')

        expect(result).toBe('a b c d')
    })

    it('should work on nested arrays', function() {
        var murray = new Murray('a', ['b', 'c'], 'd')
        var result = murray.join()

        expect(result).toBe('a,b,c,d')
    })

    it('should fail in case no array is passed', function() {
        expect(function(){
            true.join()
        }).toThrowError(TypeError, 'true.join is not a function')

        expect(function(){
            (1).join()
        }).toThrowError(TypeError, '1.join is not a function')

        expect(function(){
            var fun = function(){}
            fun.join()
        }).toThrowError(TypeError, 'fun.join is not a function')

        expect(function(){
            'asdsd'.join()
        }).toThrowError(TypeError, '"asdsd".join is not a function')
    })
})