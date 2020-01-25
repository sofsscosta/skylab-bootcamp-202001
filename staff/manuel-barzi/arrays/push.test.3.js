describe('push', function () {
    it('should have added 4 at the end of array [1, 2, 3]', function () {
        var array = [1, 2, 3];
        var length = push(array, 4);

        assert(length === 4, 'should array length be 4, but got ' + length);
        assert(array[array.length - 1] === 4, 'should last value be 4');

        array.forEach(function (value, index) {
            assert(value === index + 1, 'should value at index ' + index + ' be ' + (index + 1) + ', but got ' + value);
        });
    });

    it('should have added 5 at the end of array [1, 2, 3, 4]', function () {
        var array = [1, 2, 3, 4];
        var length = push(array, 5);
        
        assert(length === 5, 'should array length be 5, but got ' + length);
        assert(array[array.length - 1] === 5, 'should last value be 5');
        assert(array[0] === 1, 'should value at index 0 be 1');
        assert(array[1] === 2, 'should value at index 1 be 2');
        assert(array[2] === 3, 'should value at index 2 be 3');
        assert(array[3] === 4, 'should value at index 3 be 4');
    });
});