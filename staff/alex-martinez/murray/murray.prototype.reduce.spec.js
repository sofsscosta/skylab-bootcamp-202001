if(typeof require !== 'undefined'){
    var Murray = require('./murray')
}

describe('Murray.reduce',function(){
    it('should reduce all elements of the murray and return the value',function(){
        var murray = new Murray(1,2,3,4);
        var response = murray.reduce();

        expect(response).toBe(10);
    });
});