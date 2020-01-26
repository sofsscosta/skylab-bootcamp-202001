describe('Murray.prototype.concat', function () {
    it('should be result [1,2,3,4,5,6] of arrays [1,2,3] and [4,5,6]', function () {
        var murrayA = new Murray(1,2,3);
        var murrayB = new Murray(4,5,6);
        var result = murrayA.concat(murrayB);

        expect(result.length).toBe(6);
        expect(result[0]).toBe(1);
        expect(result[3]).toBe(4);
    });
    it('should be result [1,2,3,4,5,6,7,8,9] of arrays [1,2,3], [4,5,6], [7,8,9]', function () {
        var murrayA = new Murray(1,2,3);
        var murrayB = new Murray(4,5,6);
        var murrayC = new Murray(7,8,9);
        
        var result = murrayA.concat(murrayB,murrayC);

        expect(result.length).toBe(9);
        expect(result[0]).toBe(1);
        expect(result[3]).toBe(4);
        expect(result[8]).toBe(9);
    });
    it('should be result [1,2,3,4,5,6,a,b,c] of arrays [1,2,3], [4,5,6], [a,b,c]', function () {
        var murrayA = new Murray(1,2,3);
        var murrayB = new Murray(4,5,6);
        var murrayC = new Murray('a','b','c');
        
        var result = murrayA.concat(murrayB,murrayC);

        expect(result.length).toBe(9);
        expect(result[0]).toBe(1);
        expect(result[3]).toBe(4);
        expect(result[8]).toBe('c');
    });
    it('should be result [1,2,3,4,5,6,a,b,c] of arrays [1,2,3], [4,5,6], and values [a], [b,c]', function () {
        var murrayA = new Murray(1,2,3);
        var murrayB = new Murray(4,5,6);
        
        var result = murrayA.concat(murrayB,['a'],['b','c']);

        expect(result.length).toBe(9);
        expect(result[0]).toBe(1);
        expect(result[3]).toBe(4);
        expect(result[8]).toBe('c');
    });
    it('should be result [1,2,3,4,5,6,a] of arrays [1,2,3], [4,5,6], and value a', function () {
        var murrayA = new Murray(1,2,3);
        var murrayB = new Murray(4,5,6);
        
        var result = murrayA.concat(murrayB,'a');

        expect(result.length).toBe(7);
        expect(result[0]).toBe(1);
        expect(result[3]).toBe(4);
        expect(result[6]).toBe('a');
    });
});