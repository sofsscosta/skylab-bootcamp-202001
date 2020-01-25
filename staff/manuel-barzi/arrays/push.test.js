describe('push', function () {
    it('should have added 4 at the end of array [1, 2, 3]', function () {
        var array = [1, 2, 3];
        var length = push(array, 4);

        expect(length).toBe(4);
        expect(array[array.length - 1]).toBe(4);

        array.forEach(function (value, index) {
            expect(value).toBe(index + 1);
        });
    });

    it('should have added 5 at the end of array [1, 2, 3, 4]', function () {
        var array = [1, 2, 3, 4];
        var length = push(array, 5);
        
        expect(length).toBe(5);
        expect(array[array.length - 1]).toBe(5);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(3);
        expect(array[3]).toBe(4);
    });
});