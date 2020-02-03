describe('every', function () {
    it('should iterate over all elements in the array', function () {
        var array1 = [1, 2, 'string'];
        var a = every(array1, function (element, index) {
            return typeof element === 'number';
        });

        var array2 = [1, 'string', 2];
        var b = every(array2, function (element, index) {
            return typeof element === 'number';
        });

        var array3 = ['string', 1, 2];
        var c = every(array3, function (element, index) {
            return typeof element === 'number';
        });

        assert(a === b && b === c, 'return value should be the same for all, but got a: ' + a + ' b: ' + b + ' c: ' + c);
    });

    it('should true be returned when all elements are numbers', function () {
        var arr = [1, 2, 3, 4, 5];
        var result = every(arr, function (element) {
            return typeof element === 'number'
        });

        assert(result, 'true should be returned, but got ' + result);
    });

    it('should false be returned when 1 element does not comply with the condition', function () {
        var arr = [2, 'string', 4, 4];

        var result = every(arr, function (element) { return typeof element === 'number' });

        console.assert(!result, 'false should be returned, but got ' + result);
    });



});





