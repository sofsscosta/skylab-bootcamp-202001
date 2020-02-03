describe('Murray.prototype.concat()', function() {
    it('should return a new murray concatenating two existing murray', function() {
        var murray1 = new Murray(1, 2, 3)
        var murray2 = new Murray(4, 5, 6)
        var result = murray1.concat(murray2)
        expect(result.length).toBe(6)
        for(var i = 0; i < result.length; i++) {
            expect(result[i]).toBe(i + 1)
        }
    })
    it('should concatenate n murrays', function() {
        var murray1 = new Murray(1, 2, 3)
        var murray2 = new Murray(4, 5, 6)
        var murray3 = new Murray(7, 8, 9)
        var murray4 = new Murray(10, 11, 12)
        var result = murray1.concat(murray2, murray3, murray4)
        expect(result.length).toBe(12)
        for(var i = 0; i < result.length; i++) {
            expect(result[i]).toBe(i + 1)
        }
    })
    it('should the original murray not mutate', function() {
        var murray1 = new Murray(1, 2, 3)
        var murray2 = new Murray(4, 5, 6)
        var result = murray1.concat(murray2)
        expect(murray1[0]).toBe(1)
        expect(murray2[0]).toBe(4)
        expect(murray1.length).toBe(3)
        expect(murray2.length).toBe(3)
    })
    it('should return a new murray equal to the original with all parameters pushed when passed n non-murrays as parameters', function() {
        var murray = new Murray(1, 2, 3)
        var results = murray.concat('a', 5, true, undefined, null, { a: 12, b: 21 })
        expect(results[3]).toBe('a')
        expect(results[4]).toBe(5)
        expect(results[5]).toBe(true)
        expect(results[6]).toBe(undefined)
        expect(results[7]).toBe(null)
        expect(results[8]).toBeInstanceOf(Object)
    })
})