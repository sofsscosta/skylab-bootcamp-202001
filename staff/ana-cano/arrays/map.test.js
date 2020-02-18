describe("map", function() {

    it("It should return an array modified by the expression that we create", function() {
        (function() {
            var a = [5, 4, 1, 2];
            var results = map(a, function(value) {
                return value * 2
            })
            var results = [10, 8, 2, 4];
            assert(results[0] === 10, "The result of both arrays should be the same one");
            assert(results[1] === 8, "The result of both arrays should be the same one");
            assert(results[2] === 2, "The result of both arrays should be the same one");
            assert(results[3] === 4, "The result of both arrays should be the same one");

        })();
    });
    it("should return an array of length 4", function() {
        (function() {
            var a = [1, 5, 4, 5];
            var results = map(a, function(value) {
                return value * 2
            })

            assert(results.length === 4, "The result array should be 4")
        })
    });



});