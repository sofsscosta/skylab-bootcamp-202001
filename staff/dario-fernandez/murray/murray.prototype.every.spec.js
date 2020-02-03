describe('Murray.prototype.every()', function() {
    it('Should return true if every item in a murray satisfies the callback condition', function() {
        var murray = new Murray(1, 1, 1, 1, 1)
        var result = murray.every(function(element) { return element === 1 })
        expect(result).toBe(true)
    })
    it('Should return false if at least one of the items in a murray does not satisfy the callbalck condition', function() {
        var murray = new Murray(1, 1, 2, 1, 1)
        var result = murray.every(function(element) { return element === 1 })
        expect(result).toBe(false)
    })
    it('Should the callback accept 2 optional parameters: index and murray', function() {
        var murray = new Murray(1, 1, 1, 1, 1)
        var result = murray.every(function(element, index, murray) { return element = murray[index] + 1 })
        expect(result).toBe(true)
    })
    it('Should accept an optional parameter as the \'this\' within the callback', function() {
        var murray = new Murray(1, 1, 1, 1, 1)
        var object = {
            testing: 1
        }
        var result = murray.every(function(element) { return element === this.testing }, object)
        expect(result).toBe(true)
    })
    it('Should not mutate the original murray', function() {
        var murray = new Murray(1, 1, 1, 1, 1)
        var result = murray.every(function(element) { return element === 1 })
        expect(murray.length).toBe(5)
        for(var i = 0; i < murray.length; i++) {
            expect(murray[i]).toBe(1)
        }
    })
    it('Should not iterate over elements that are appended to the murray after the method is called', function() {
        var murray = new Murray(1, 1, 1, 1, 1)
        var result = murray.every(function(element, index, murray) { if(index === 0) { murray.push(2) } return element === 1 })
        expect(result).toBe(true)
    })
    it('Should evaluate the items with the value they have when are iterated', function() {
        var murray = new Murray(1, 1, 1, 1, 1)
        var result = murray.every(function(element, index, murray) { if(index === 0) { murray[3] = 2 } return element === 1 })
        expect(result).toBe(false)
    })
    it('Should not evaluate deleted items', function() {
        var murray = new Murray(1, 1, 1, 1, 2)
        var result = murray.every(function(element, index, murray) { if(index === 0) { murray.pop() } return element === 1 })
        expect(result).toBe(true)
    })
    it('Should return true for an empty murray', function() {
        var murray = new Murray
        var result = murray.every(function() {  })
        expect(result).toBe(true)
    })
    it('Should not continue iterating the murray if one of the elements does not satisfy the callback condition', function() {
        var murray = new Murray(1, 1, 2, 1, 1)
        var iterator
        murray.every(function(element, index) { iterator = index; return element === 1 })
        expect(iterator).toBe(2)

    })
    it('Should fail on non function expression', function() {
        expect(function() {
        var murray = new Murray (1, 2, 3, 4, 5)
        var result = murray.every('non-function expression')
        }).toThrowError(TypeError, 'non-function expression is not a function')
    })
})