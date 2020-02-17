describe('filter', function () {
    it('should fail on non-array first parametre', function () {
        filter([], function () { });
    });

    it('should fail on non-function second parametre', function () {
        filter([], function () { });
    });

    it('should return an array of [2, 4, 6, 8, 10]', function () {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var result = filter(array, function (value) {
            return value % 2 === 0;
        });

        assert(result instanceof Array, 'should return value be an "Array", "' + result.constructor.name + '" given');

        for (var x = 0; x < result.length; x++) {
            var item = result[x];
            var expectedValue = array[(x * 2) + 1];
            assert(item === expectedValue, 'should return value in position ' + x + ' be ' + expectedValue + ', got ' + item + ' instead');
        }
    });

    it('should return an empty array', function () {
        var array = ['Wayne', 'Rooney', 'Cristi@no', 'Messi'];
        var result = filter(array, function (value) {
            return value.indexOf('Cristiano') !== -1;
        });

        assert(result instanceof Array, 'should return value be an "Array", "' + result.constructor.name + '" given');
        assert(result.length === 0, 'should array length be 0, got ' + result.length + ' instead');
    });
});