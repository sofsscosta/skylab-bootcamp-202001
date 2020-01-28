'use strict';

describe('googl', function()  {
    it ('Should return an array with objects', function(done){
        googl('pepito', function(results){
            expect(results instanceof Array).toBe(true);
            results.forEach(result => {
                expect(result instanceof Object).toBe(true);
            });

            done();
        })
    })
});