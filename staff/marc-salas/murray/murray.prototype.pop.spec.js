describe('Murray.prototype.pop',function(){

    it('should return the deleted value',function(){
        var murray = new Murray(1,2,3);
        var result = murray.pop();

        expect(result).toBe(3);
    });

    it('should rest one the length of Murray object', function(){
        var murray = new Murray(1,2,3);
        murray.pop();
        
        expect(murray.length).toBe(2);
    });

    it('should delete the last value of the object murray',function(){
        var murray = new Murray(1,2,3);
        murray.pop();

        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(2);
        expect(murray[2]).toBe(undefined);
        
    })

})