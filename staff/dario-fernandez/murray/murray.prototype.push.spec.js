describe('Murray.prototype.push()', function() {
    it('should the last element of the murray be equal to the pushed value', function() {
        var murray = new Murray(1, 2, 3)
        var result = murray.push(4)
        expect(murray.length).toBe(4)
        expect(murray[3]).toBe(4)
        expect(result).toBe(4)
    })
    it('should add n values to the end of the murray', function() {
        var murray = new Murray(1, 2, 3)
        var result = murray.push(4, 5)
        expect(result).toBe(5)
        expect(murray.length).toBe(5)
        for(var i = 0; i < murray.length; i++) {
            expect(murray[i]).toBe(i + 1)
        }
    })
    it('should return the array new length', function() {
        var murray = new Murray(1, 2, 3)
        var result = murray.push(4)
        expect(result).toBe(4)
    })
})