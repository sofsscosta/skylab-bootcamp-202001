'use strict'


if(typeof require !== 'undefined'){
    var Murray = require('./murray')
}

describe('Murray.prototype.map',function(){
    it('should return a new array, the original array be the same, and the original array have values + 2',function(){
        var murray = new Murray(1,2,3,4);
        var newMurray = murray.map(function(value){
            return value + 2;
        });
        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(2);
        expect(murray[2]).toBe(3);
        expect(murray[3]).toBe(4);
        for(var i=0; i<murray.length; i++){
            expect(newMurray[i]).toBe(murray[i]+2);
        }
    });
    it('should fail on non function callback',function(){
        expect(function(){
            new Murray(1,2,3).map()
        }).toThrowError(TypeError, 'undefined is not a function');
        expect(function () {
            new Murray(1, 2, 3).map(true);
        }).toThrowError(TypeError, 'true is not a function');
    });
});

