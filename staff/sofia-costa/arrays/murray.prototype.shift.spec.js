describe('Murray.prototype.shift', function() {
    it('should return an array which\'s length === length -1', function() {
        var murray = new Murray (1, 2, 3, 4)
        var result = function(murray){murray.shift(); return murray.length}
        expect(murray.length-1).toBe(result(murray))
    })

    it ('should return the element removed', function() {
        var murray = new Murray (1, 2, 3, 4)
        expect(murray.shift()).toBe(1)
    })

    it('should not work if an array is not passed', function() {
        var string = 'auhsdba'
        var fun = function(){}
        var boolean = true

        expect(function(){
            string.shift()
        }).toThrowError(TypeError, 'string.shift is not a function')

        expect(function(){
            fun.shift()
        }).toThrowError(TypeError, 'fun.shift is not a function')

        expect(function(){
            boolean.shift()
        }).toThrowError(TypeError, 'boolean.shift is not a function')
    })
})