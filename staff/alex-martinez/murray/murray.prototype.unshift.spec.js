
if(typeof require !== 'undefined'){
    var Murray = require('./murray')
}

describe('Murray.unshift',function(){
    it('method adds one or more elements to the beginning of an array and returns the new length of the array',function(){
        var murray = new Murray(1,2,3,4);
        murray.unshift(2,3);

        expect(murray.length).toBe(6);
    });
});