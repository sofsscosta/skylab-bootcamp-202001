describe('Murray.prototype.pop',function(){
    it('should be new length , length-1', function(){
        var murray = new Murray(1,2,3,4);
        murray.pop();

        expect(murray.length).toBe(3);
        //console.log(murray);
    });
    it('should the new array be [1,2,3]',function(){
        var murray = new Murray(1,2,3,4);
        for(var i=0; i<murray.length; i++){
            murray[i];
        }
        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(2);
        expect(murray[2]).toBe(3);
    });
});