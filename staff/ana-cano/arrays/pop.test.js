describe("pop", function() {

    it("Should delete last position on the array and keep the other ones", function() {
        (function() {
            var a = [4, 5, 6, "pepito"];
            pop(a);
            var result = [4, 5, 6];
            assert(a.length === 3, "The result array should be 3")
            assert(a[0] === result[0], "The result of both arrays should be the same one");
            assert(a[1] === result[1], "The result of both arrays should be the same one");
            assert(a[2] === result[2], "The result of both arrays should be the same one");
        })();
    });

    it("It should should the element of the last position of the array", function() {
        (function() {
            var a = [1, 2, 3, 4, 5];
            var result = pop(a);

            assert(5 === result, "The result should be 5")
        })();
    });

    it("It should fail if the first argument isn't an array", function() {
        (function() {
            var _error;
            try {
                pop("antonia");

            } catch (error) {
                _error = error;
            }

            assert(_error instanceof TypeError, "The error should be TypeError");
            assert(_error.message === "antoniais not an array", 'should fail with the message "antonia is not an array"')
                // si esto no se cumple te va a dar el typerror
        })();
    });
});