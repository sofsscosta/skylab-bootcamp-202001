describe('search',function(){
    it('should the url be a string',function(){
        expect(function(){
            search(true);
        }).toThrowError(TypeError,'true is not a string');
    });
    it('should the callback be a function',function(){
        expect(function(){
            search('', null, null, null, null, null);
        }).toThrowError(TypeError,'null is not a function');
    });
    it('should the callback be a function',function(){
        expect(function(){
            search('');
        }).toThrowError(TypeError,'undefined is not a function');
    });
});