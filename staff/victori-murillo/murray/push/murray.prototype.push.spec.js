describe("Murray.prototype.push", function() {

  it('should return the new length of the array', function() {
    var murray = new Murray(1, 2)
    expect(murray.push(3)).toBe(3)
  })
  
  it('should have added 4 at the end of murray [1, 2, 3]', function() {
    var murray = new Murray(1, 2, 3)
    murray.push(4)

    expect(murray.length).toBe(4)
    expect(murray[3]).toBe(4)
  })

  it('should have added undefined at the end of murray [1, 2, 3]', function() {
    var murray = new Murray(1, 2, 3)
    murray.push(undefined)

    expect(murray.length).toBe(4)
    expect(murray[3]).toBeUndefined()
  })
})