describe('Murray.prototype.join', function () {
    it('should return an empty string if murray length is 0', function () {
        var murray = new Murray();
        var returnValue = murray.join();

        expect(returnValue).toBe('');
    });

    it('should return a string with the murray elements joined, separeted by commas', function () {
        var murray = new Murray(1, 2, 3);
        var returnValue = murray.join();

        expect(returnValue).toBe('1,2,3');
    });

    it('should return a string with the murray elements joined, wihtout separator if empty string is given', function () {
        var murray = new Murray(1, 2, 3);
        var returnValue = murray.join('');

        expect(returnValue).toBe('1,2,3');
    });

    it('should the joined elements be separeted by the given parameter', function () {
        var murray = new Murray(1, 2, 3);
        var returnValue = murray.join('-separator-');

        expect(returnValue).toBe('1-separator-2-separator-3');
    });

    it('should the joined elements without separator if empty string is given', function () {
        var murray = new Murray(1, 2, 3);
        var returnValue = murray.join('-separator-');

        expect(returnValue).toBe('1-separator-2-separator-3');
    });

    it('should convert the separator to string if necesary', function () {
        var murray = new Murray(1, 2, 3);
        debugger
        var returnValue = murray.join(true);

        expect(returnValue).toBe('1true2true3');
    });

    it('should original murray not be modified', function () {
        var murray = new Murray(1, 2, 3);
        murray.join();

        expect(murray.length).toBe(3);

        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(2);
        expect(murray[2]).toBe(3);

    });

});