'use strict';

describe('Murray.prototype.fill', function(){

    it('The original length of array should not be modifyed',function(){
        var murray = new Murray(1,2,3);
        murray.fill(0);

        expect(murray.length).toBe(3);
    });

    it('if you just put one value should fill all the indexs with them', function(){
        var murray = new Murray(1,2,3);
        murray.fill(0);

        expect(murray[0]).toBe(0);
        expect(murray[1]).toBe(0);
        expect(murray[2]).toBe(0);
    });

    it('the second value should indicate the index to start filling', function(){
        var murray = new Murray(1,2,3);
        murray.fill(0,1);

        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(0);
        expect(murray[2]).toBe(0);
    });

    it('the third value should indicate de index to stop filling (not includes that index)',function(){
        var murray = new Murray(1,2,3);
        murray.fill(0,1,2);

        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(0);
        expect(murray[2]).toBe(3);
    });

    it('if the second value is not n number shpuld be 0 for the function',function(){
        var murray = new Murray(1,2,3);
        murray.fill(0,"homer");

        expect(murray[0]).toBe(0);
        expect(murray[1]).toBe(0);
        expect(murray[2]).toBe(0);

    });

    it('if the second value is not a number should be 0 for the function',function(){
        var murray = new Murray(1,2,3);
        murray.fill(0,1,"homer");

        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(0);
        expect(murray[2]).toBe(0);
    });
})