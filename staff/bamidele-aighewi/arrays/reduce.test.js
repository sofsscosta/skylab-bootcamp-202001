describe('reduce', function () {
    it('should return 15 after processing array [1, 2, 3, 4, 5]', function () {
        var items = [1, 2, 3, 4, 5];
        var initialValue = 0;
        var previousValues = [];

        var result = reduce(items, function (previousValue, currentValue, index) {
            var sum = previousValue + currentValue;
            previousValues.push(sum)
            return sum;
        }, initialValue);

        assert(typeof result === 'number', 'should result data type be number but got ' + (typeof result) + ' instead');
        assert(result === 15, 'should result be 15 but got ' + result + ' instead');

        previousValues.forEach(function (previousValue, index) {
            if (index === 0) {
                var expectedValue = items[index];
                assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
            } else if (index === 1) {
                var expectedValue = items[0] + items[index];
                assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
            } else if (index === 2) {
                var expectedValue = items[0] + items[1] + items[index];
                assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
            } else if (index === 3) {
                var expectedValue = items[0] + items[1] + items[2] + items[index];
                assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
            } else if (index === 4) {
                var expectedValue = items[0] + items[1] + items[2] + items[3] + items[index];
                assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
            } else if (index === 5) {
                var expectedValue = items[0] + items[1] + items[2] + items[3] + items[4] + items[index] + 1;
                assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
            }
        })
    });

    it('should fail on non-array first argument', function () {
        reduce(true, function () { })
    });

    it('should fail on non-function second argument', function () {
        reduce([1, 2, 3], 'hey')
    });

    it('should fail on non-number third argument', function () {
        reduce([1, 2, 3], function () { }, false)
    });
});