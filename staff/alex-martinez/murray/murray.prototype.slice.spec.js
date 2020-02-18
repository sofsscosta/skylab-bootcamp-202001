
if(typeof require !== 'undefined'){
    var Murray = require('./murray')
}

describe('Murray.prototype.slice',function(){
    it('should the original array be the same',function(){
        var murray = new Murray(1,2,3,4);
        var temporal = murray.map(function(value){
            return value;
        })
        murray.slice(1,3);

        for(var i=0; i<murray.length; i++){
            expect(temporal[i]).toBe(murray[i]);
        }
    });
    it('should return new array with values include in the rang initial and final, final not include',function(){
        var murray = new Murray(1,2,3,4,5);
        var response = murray.slice(1,3);

        expect(response[0]).toBe(2);
        expect(response[1]).toBe(3);
    });
    it('should accept negative values',function(){
        var murray = new Murray(1,2,3,4,5);
        var response = murray.slice(-3,-1);
        expect(response[0]).toBe(3);
        expect(response[1]).toBe(4);
    });
    it('should return all the elements from initialIndex',function(){
        var murray = new Murray(1,2,3,4);
        var response = murray.slice(3);
        expect(response[0]).toBe(4)
    });
    it('should fail in non numeric initialIndex',function(){
        expect(function(){
            new Murray(1,2,3,4).slice('a',3);
        }).toThrowError(TypeError,'a is not a number');
        expect(function(){
            new Murray(1,2,3).slice(true,2);
        }).toThrowError(TypeError,'true is not a number')
    });
    it('should fail in non numeric or non undefined lastIndex',function(){
        expect(function(){
            new Murray(1,2,3,4).slice(1,'b');
        }).toThrowError(TypeError,'b is not a number');
        expect(function(){
            new Murray(1,2,3,4).slice(2,false);
        }).toThrowError(TypeError,'false is not a number');
    });
});
