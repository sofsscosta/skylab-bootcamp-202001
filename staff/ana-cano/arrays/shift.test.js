describe("shift", function() {
    it("It should return the first element of the original array", function() {
        var array = [1, 2, 5, 4, 2];
        var results = shift(array);
        assert(results === 1, "The result should be 1");
    });

})

it("The parameter should be an array", function() {
    (function() {
        var _error;
        try {
            var a = undefined;
            a.shift()
        } catch (error) {
            _error = error
        }
        assert(_error instanceof TypeError, "The error should be undefined");
        assert(_error.message === a + 'undefined is not array', "It should work with undefined")


    })();
})