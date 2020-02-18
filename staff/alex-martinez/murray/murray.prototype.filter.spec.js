if(typeof require !== 'undefined'){
    var Murray = require('./murray')
}

var murray = new Murray(1,2,3);
murray.filter(function(value){
    return value % 2 === 0;
});

describe('Murray.filter',function(){
    it('should return all even numbers in murray',function(){
        var murray = new Murray(1,2,3,4); 
        var result = murray.filter(function(value){
            return value % 2 === 0;
        });
        expect(result[0]).toBe(2);
        expect(result[1]).toBe(4);
    });
    it('should fail on non-function expression',function(){
        expect(function(){
            new Murray(1,2,3,4).filter();
        }).toThrowError(TypeError, 'undefined is not a function');
        expect(function(){
            new Murray(1,2,3).filter(true);
        }).toThrowError(TypeError, 'true is not a function');
        expect(function(){
            new Murray(1,2,3).filter(1);
        }).toThrowError(TypeError, '1 is not a function');
    });
});