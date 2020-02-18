
if(typeof require !== 'undefined'){
    var Murray = require('./murray')
}


describe('Murray.lastIndexOf',function(){
    it('should return the index of the last element matches with the value',function(){
        var murray = new Murray('js','nodejs','reactjs');
        var result = murray.lastIndexOf('reactjs');

        expect(result).toBe(2);
    });
    it('should the original murray be the same',function(){
        var murray = new Murray('js','nodejs','reactjs');
        murray.lastIndexOf('reactjs');

        expect(murray[0]).toBe('js');
        expect(murray[1]).toBe('nodejs');
        expect(murray[2]).toBe('reactjs');
    });
    it('should be the same length',function(){
        var murray = new Murray('js','nodejs','reactjs');
        murray.lastIndexOf('reactjs');

        expect(murray.length).toBe(3);
    });
});