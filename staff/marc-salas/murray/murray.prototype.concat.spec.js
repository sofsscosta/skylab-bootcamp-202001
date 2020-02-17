describe('Murray.prototype.concat', function () {

    it('length of Murray result shoud be te result of two objects', function () {
        var murray = new Murray(1, 2, 3);
        var add = new Murray(4, 5, 6);
        var result = murray.concat(add);

        expect(result.length).toBe(6);
    });

    it('shuld add the values of add the values in correct order', function () {
        var murray = new Murray(1, 2, 3);
        var add = new Murray(4, 5, 6);
        var result = murray.concat(add);

        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(4);
        expect(result[4]).toBe(5);
        expect(result[5]).toBe(6);
    });

    it('should not modify the first Murray object', function () {
        var murray = new Murray(1, 2, 3);
        var add = new Murray(4, 5, 6);
        murray.concat(add);

        expect(murray.length).toBe(3);
        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(2);
        expect(murray[2]).toBe(3);

    });

    it('should not modify the second object', function () {
        var murray = new Murray(1, 2, 3);
        var add = new Murray(4, 5, 6);
        murray.concat(add);

        expect(add.length).toBe(3);
        expect(add[0]).toBe(4);
        expect(add[1]).toBe(5);
        expect(add[2]).toBe(6);

    });

    it('if the second object is an array should do the same than a murray objrct', function () {
        var murray = new Murray(1, 2, 3);
        var add = [4, 5, 6];
        var result = murray.concat(add);

        expect(result.length).toBe(6)


    });

    it('if the second object is not an array or Murray should put all thu value in one index', function () {
        (function () {
            var murray = new Murray(1, 2, 3);
            var add = 1;
            var result = murray.concat(add);

            expect(result.length).toBe(4)
        })();

        (function () {
            var murray = new Murray(1, 2, 3);
            var add = 'homer';
            var result = murray.concat(add);

            expect(result.length).toBe(4)
        })();

        (function () {
            var murray = new Murray(1, 2, 3);
            var add = { 0: 4, 1: 5, 2: 6 };
            var result = murray.concat(add);

            expect(result.length).toBe(4)
        })();

    });

    it('should return a Murray object', function () {
        var murray = new Murray(1, 2, 3);
        var add = [4, 5, 6];
        var result = murray.concat(add);

        expect(result).toBeInstanceOf(Murray);
    });

    it('should return the original Murray if the value is empty',function(){
        var murray = new Murray(1, 2);
        var result = murray.concat();
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result.length).toBe(2);



    })

})