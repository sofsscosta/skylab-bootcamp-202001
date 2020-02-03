describe('Murray.prototype.forEach', function() {

  it('should murray [1, 2, 3] be modified adding 10 to each value', function() {
    var murray = new Murray(1, 2, 3)

    murray.forEach(function(element, index) {
      murray[index] = element + 10
    })

    expect(murray.length).toBe(3)

    for (let i = 0; i < murray.length; i++) {
        expect(murray[i]).toBe(1 + i + 10)
    }
  })

  it('should return undefined', function() {
      var murray = new Murray(1)
      expect(murray.forEach(function() {})).toBeUndefined()
  })

  it ('should fail on non-function expression', function() {

    expect(function() {
        new Murray(1, 2, 3).forEach();
    }).toThrowError(TypeError, "undefined is not a function")

    expect(function() {
      new Murray(1, 2, 3).forEach({});
    }).toThrowError(TypeError, "[object Object] is not a function")

    expect(function() {
      new Murray(1, 2, 3).forEach([1]);
    }).toThrowError(TypeError, "Array is not a function")

    expect(function() {
      new Murray(1, 2, 3).forEach("string");
    }).toThrowError(TypeError, "string is not a function")

    expect(function() {
        new Murray(1, 2, 3).forEach(1);
    }).toThrowError(TypeError, "1 is not a function")

    expect(function() {
      new Murray(1, 2, 3).forEach(true);
  }).toThrowError(TypeError, "true is not a function")

  })

})
