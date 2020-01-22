(function () {
    'use strict';

    console.log('TEST push');

    (function () {
        console.log('should have added 4 at the end of array [1, 2, 3]');
        var array = [1, 2, 3];
        var length = push(array, 4);
        console.assert(length === 4, 'should array length be 4');
        console.assert(array[array.length - 1] === 4, 'should last value be 4');
        array.forEach(function (value, index) {
            console.assert(value === index + 1, 'should value at index ' + index + ' be ' + (index + 1) + ', but got ' + value);
        });
    })();

    (function () {
        console.log('should have added 5 at the end of array [1, 2, 3, 4]');
        var array = [1, 2, 3, 4];
        var length = push(array, 5);
        console.assert(length === 5, 'should array length be 5');
        console.assert(array[array.length - 1] === 5, 'should last value be 5');
        console.assert(array[0] === 1, 'should value at index 0 be 1');
        console.assert(array[1] === 2, 'should value at index 1 be 2');
        console.assert(array[2] === 3, 'should value at index 2 be 3');
        console.assert(array[3] === 4, 'should value at index 3 be 4');
    })();
})();