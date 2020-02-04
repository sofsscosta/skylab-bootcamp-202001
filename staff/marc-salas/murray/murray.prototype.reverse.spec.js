describe('murray.prototype.reverse',function(){
    it('should return a Murray',function(){
        var murray = new Murray(1,2,3);
        var result = murray.reverse();

        expect(result).toBeInstanceOf(Murray);
    });

    it('should return the original array but reversed', function(){
        var murray = new Murray(1,2,3);
        var result = murray.reverse();

        expect(result[0]).toBe(3);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(1);
        expect(result.length).toBe(3);
    });
    
    it('the original array should be the same as the result, so, should be modyfied',function(){
        var murray = new Murray(1,2,3);
        murray.reverse();

        expect(murray[0]).toBe(3);
        expect(murray[1]).toBe(2);
        expect(murray[2]).toBe(1);
        expect(murray.length).toBe(3);
    });

})