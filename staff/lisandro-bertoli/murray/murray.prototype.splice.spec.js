describe('murray.prototype.splice', function () {
    it('should return a Murray with the deleted elements', function () {
        var murray = new Murray(1, 2, 3, 4, 5);
        var result = murray.splice(3);

        expect(result[0]).toBe(4);
        expect(result[1]).toBe(5);
        expect(result).toBeInstanceOf(Murray);

    });

    it('should the original Murray be modyfied from the start index', function () {
        var murray = new Murray(1, 2, 3, 4, 5);
        murray.splice(3);

        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(2);
        expect(murray[2]).toBe(3);
        expect(murray).toBeInstanceOf(Murray);

    });

    it('should return an empty Murray if no elements are removed', function () {
        var murray = new Murray(1, 2, 3, 4, 5);
        var result = murray.splice();

        expect(result.length).toBe(0);
    });

    it('should start at index 4 if the given index is higher than Murray length', function () {
        var murray = new Murray(1, 2, 3, 4, 5);
        murray.splice(8, 0, 6);

        expect(murray[5]).toBe(6);
    });

    it('should start at Murray length -2 when -2 is given as first parameter', function () {
        var murray = new Murray(1, 2, 3, 4, 5);
        var result = murray.splice(-2);

        expect(result[0]).toBe(4);
        expect(result[1]).toBe(5);
    });

    it('should start at index 0 when Murray length - start index is less than 0', function () {
        var murray = new Murray(1, 2, 3);
        var result = murray.splice(-5);

        expect(murray[0]).toBeUndefined();
        expect(murray[1]).toBeUndefined();
        expect(murray[2]).toBeUndefined();
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result.length).toBe(3);
    });

    it('should delete 2 elements starting at given 1', function () {
        var murray = new Murray(1, 2, 3, 4, 5);
        murray.splice(1, 2);

        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(4);
        expect(murray[2]).toBe(5);
        expect(murray.length).toBe(3);
    });

    it('should delete all the elements starting at index when delete count is higher than remaining elements', function () {
        var murray = new Murray(1, 2, 3, 4, 5);
        murray.splice(1, 8);

        expect(murray[0]).toBe(1);
        expect(murray.length).toBe(1);
    });

    it('should add "Homer" at given start index (1)', function () {
        var murray = new Murray(1, 2, 3, 4, 5);
        murray.splice(1, 0, 'Homer');

        expect(murray[1]).toBe('Homer');
        expect(murray.length).toBe(6);
    });

    it('should use value 0 when no-Number start index and count are given', function () {
        var murray = new Murray(1, 2, 3);
        murray.splice("a", function () { }, 0);

        expect(murray[0]).toBe(0);
        expect(murray[1]).toBe(1);
        expect(murray[2]).toBe(2);
        expect(murray[3]).toBe(3);
    });
});

