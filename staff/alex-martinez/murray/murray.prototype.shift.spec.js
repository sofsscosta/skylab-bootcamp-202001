
if(typeof require !== 'undefined'){
    var Murray = require('./murray')
}

describe('Murray.prototype.shift',function(){
    it('should delete and modify the original murray',function(){
        var murray = new Murray(1,2,3,4);
        murray.shift();

        for(var i=0; i<murray.length; i++){
            murray[i];
        }
        expect(murray[0]).toBe(2);
    });
    it('should return the value of delete element',function(){
        var murray = new Murray('javascript','nodejs','reactjs');
        var response = murray.shift();

        expect(response).toBe('javascript');
    });
});