describe("find", function() {
  
  it("should return undefined", function() {
    var result = find([4, 5], function(element) {return element > 5});
    assert(result === undefined, "should return undefined");
  });

  it("should return the first element => 7", function() {
    assert(find([7], function(element) {return element === 7}), "should return the first element => 7");
  });

  it("should keep the same array length", function() {
    var array = ["test", "js", "code"]
    var temporal = []

    for (let i = 0; i < array.length; i++) {temporal[i] = array[i]}

    find(array, function(element) {return element === "js"})
    
    assert(array.length === temporal.length, "should keep the same array length")
  })
})

