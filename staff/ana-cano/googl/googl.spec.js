describe("googl search", function() {
    it("Should return the title of the search", function(done) {
        googl("pepito", function(results) {
            results.forEach(function(element) {
                expect(typeof element.title).toBe("string");
            })

            done()
        })

    })
    it("Should return nothing", function(done) {
        googl("", function(results) {
            results.forEach(function(element) {
                expect(element).toBe("undefined");
            })

            done()
        })

    })
    it("Should fail if you don't search an string", function() {
        expect(function() {
            googl(undefined, function() {

            })
        }).toThrowError(TypeError, "undefined is not a string")
    })
    it("Should fail if the second parameter is not a function", function() {
        expect(function() {
            googl("pepito")
        }).toThrowError(TypeError, "undefined is not a function")
    })

})