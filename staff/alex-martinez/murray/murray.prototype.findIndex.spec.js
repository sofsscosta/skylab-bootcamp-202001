describe('Murray.findIndex',function(){
    it('method returns the index of the first element in the array that satisfies the provided testing function',function(){
        var murray = new Murray(1,2,3,4);
        var response = murray.findIndex(function(value){
            return value = 2;
        });

        expect(response).toBe(1);
    });
    it('should fail if non function callback',function(){
        expect(function(){
            new Murray(1,2,3,4).findIndex();
        }).toThrowError(TypeError, 'undefined is not a function');
        expect(function(){
            new Murray(1,2,3).findIndex(true)
        }).toThrowError(TypeError, 'true is not a function');
        expect(function(){
            new Murray(1,2,3).findIndex(0)
        }).toThrowError(TypeError, '0 is not a function');
    });
});