var m = new Murray(1,2,3);
m.every(function(value){
    return value > 0;
});

describe('Murray.every',function(){
    it('should return true if every elements pass the condition',function(){
        var murray = new Murray(4,2,6,8);
        var response = murray.every(function(value){
            return value > 0;
        });
        expect(response).toBe(true);
    });
});