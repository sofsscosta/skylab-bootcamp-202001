'use strict';

describe('googl', function()  {
    it('it should return an array with objects', function(done){
        googl('pepito', function(results){
            expect(results instanceof Array).toBe(true);
            results.forEach(function(result){
                expect(result instanceof Object).toBe(true);
            })
            done();
        })
    })
    // TODO
});