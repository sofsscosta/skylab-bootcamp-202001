describe('Murray.prototype.reduce()', function() {
    it('Should return the reduced value', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        var result = murray.reduce(function (acc, cur) { return acc + cur })
        expect(result).toBe(15)
    })
    it('Should not mutate the original murray', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        var result = murray.reduce(function (acc, cur) { return acc + cur })
        expect(murray.length).toBe(5)
        for(var i = 0; i < murray.length; i++) {
            expect(murray[i]).toBe(i + 1)
        }
    })
    it('Should accept an optional argument as initial value', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        var result = murray.reduce(function (acc, cur) { return acc + cur }, 5)
        expect(result).toBe(20)
    })
    it('Should the callback accept two optional parameters as current index and the murray is being reduced', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        var result = murray.reduce(function (acc, cur, index, murray) { return acc + cur * murray[index] }, 5)
        expect(result).toBe(60)
    })
    it('Shoud fail on non function expression as first parameter', function() {
        expect(function() {
            var murray = new Murray(1, 2, 3, 4, 5)
            var result = murray.reduce('This is not a function')
        }).toThrowError(TypeError, 'This is not a function is not a function')
    })
})