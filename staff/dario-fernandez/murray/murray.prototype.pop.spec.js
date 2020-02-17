describe('Murray.prototype.pop()', function() {
    it('should return the last item of a murray', function() {
        var murray = new Murray(1, 2, 3, 4)
        var result = murray.pop()
        expect(result).toBe(4)
    })
    it('should remove the last item of a murray', function() {
        var murray = new Murray(1, 2, 3, 4)
        murray.pop()
        expect(murray.length).toBe(3)
        expect(murray[murray.length - 1]).toBe(3)
    })
    it('should decrease the muray length by one', function() {
        var murray = new Murray(1, 2, 3, 4)
        murray.pop()
        expect(murray.length).toBe(3)
    })
})