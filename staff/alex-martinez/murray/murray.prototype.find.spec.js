if(typeof require !== 'undefined'){
    var Murray = require('./murray')
}

describe('Murray.find',function(){
    it('should returns the value of the first element in the provided array that satisfies the provided testing function',function(){
        var murray = new Murray(1,2,3,4,5);
        var res = murray.find(function(value){
            return value > 3;
        });
    
        expect(res).toBe(4);
    });
})