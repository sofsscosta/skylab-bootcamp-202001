describe('Murray.prototype.pop', function() {
    it('should return an array which\'s length === length -1', function() {
        var murray = new Murray (1, 2, 3, 4)
        expect(murray.length-1).toBe(murray.pop())
    })

    it ('should return the length of the modified array', function() {
        var murray = new Murray (1, 2, 3, 4)
        expect(murray.pop()).toBe(murray.length)
    })

    it('should not work if an array is not passed', function() {
        var string = 'auhsdba'
        var fun = function(){}
        var boolean = true

        expect(function(){
            string.pop()
        }).toThrowError(TypeError, 'string.pop is not a function')

        expect(function(){
            fun.pop()
        }).toThrowError(TypeError, 'fun.pop is not a function')

        expect(function(){
            boolean.pop()
        }).toThrowError(TypeError, 'boolean.pop is not a function')
    })
})