describe('Murray.prototype.constructor', function() {
    it('should return a new Murray when instanced', function() {
        var murray = new Murray(1, 2, 3);
        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(3)
        expect(murray[0]).toBe(1)
        expect(murray[1]).toBe(2)
        expect(murray[2]).toBe(3)
        expect(murray[3]).toBe(undefined)
    })
    it('should create a new Murray whit n empty positions when instance with one integer as parameter', function() {
        var murray = new Murray(100)
        expect(murray.length).toBe(100)
        for(var i = 0; i < murray.length; i++) {
            expect(murray[i]).toBe(undefined)
        }
    })
    it('should create a murray within a murray', function() {
        var murray = new Murray(1, 2, new Murray(3, 4))
        expect(murray).toBeInstanceOf(Murray)
        expect(murray[2]).toBeInstanceOf(Murray)
        expect(murray[2][0]).toBe(3)
        expect(murray[2][1]).toBe(4)
        expect(murray[2].length).toBe(2)

    })
    it('should throw error hen not integer number is passed as lone argument', function() { 
        expect(function(){
            var murray = new Murray(1.1)
        }).toThrowError(RangeError, 'Invalid murray length')
    })
})