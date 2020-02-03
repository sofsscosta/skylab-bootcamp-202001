describe('Murray.prototype.indexOf', function () {
    it('should return the first index of the element in the murray', function () {
        var murray = new Murray(1, 4, 3, 4);
        var index = murray.indexOf(4);

        expect(index).toBe(1);
    });

    it('should return -1 if the value is not in murray', function () {
        var murray = new Murray(1, 2, 3);
        var index = murray.indexOf(6);

        expect(index).toBe(-1);
    });

    it('should use strict equality to find the element', function () {
        var murray = new Murray(1, 2, 3, 1);
        var index = murray.indexOf('1');

        expect(index).toBe(-1);
    });

    it('should start searching at index 2', function () {
        var murray = new Murray('test', 1, 3, 'test');
        var index = murray.indexOf('test', 2);

        expect(index).toBe(3);
    });

    it('should ignore Object type values as second parameter', function () {
        var murray = new Murray('test', 1, 3, 'test');
        var index = murray.indexOf('test', {});

        expect(index).toBe(0);
    });

    it('should convert second parameter to integer when possible', function () {
        var murray = new Murray('test', 1, 3, 'test');
        var index = murray.indexOf('test', '2');

        expect(index).toBe(3);
    });

    it('should a negative index be provided, it will take it as an offset ', function () {
        var murray = new Murray('test', 1, 3, 'test');

        var index = murray.indexOf('test', -2);

        expect(index).toBe(3);

    });

});