describe('Murray.prototype.unshift', function() {
    it('should return the length of the new murray that should be === length + number of arguments passed', function() {
        var murray = new Murray (1, 2, 3, 4)
        var result = murray.unshift(5, 6)
        expect(result).toBe(6)
    })

    it ('should return the length of the unmodified array in case nothing is passed to the method', function() {
        var murray = new Murray (1, 2, 3, 4)
        expect(murray.unshift()).toBe(4)
    })

    it('should add in as many elements as number of arguments', function() {
        var murray = new Murray (1, 2, 3, 4)
        var result = murray.unshift(-3, -2, -1, 0)
        expect(result).toBe(4 + 4)
        for (var i = 0; i<4; i++) expect(murray[i]).toBe(i-3)
    })

    it('should not work if an array is not passed', function() {
        var string = 'auhsdba'
        var fun = function(){}
        var boolean = true

        expect(function(){
            string.unshift()
        }).toThrowError(TypeError, 'string.unshift is not a function')

        expect(function(){
            fun.unshift()
        }).toThrowError(TypeError, 'fun.unshift is not a function')

        expect(function(){
            boolean.unshift()
        }).toThrowError(TypeError, 'boolean.unshift is not a function')
    })
})