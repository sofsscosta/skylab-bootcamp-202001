'use strict';

describe('googl', function()  {
    
    it('Should fail if there are no results', function(done) {
        googl('pepito', function(results) { 
            results.forEach(function(result) { 
                expect(result).not.toBe(undefined);
            });
            done();
        });
    });
    
    it('Should fail if there is no title', function (done) {
        googl('pepito', function(results) { 
            results.forEach(function(result) { 
                expect(typeof result.title).toBe('string');
            });
            done();
        });
    });
    
    it('Should fail if there is no description', function (done) {
        googl('pepito', function(results) { 
            results.forEach(function(result) { 
                expect(result.description).not.toBe(undefined);
            });
            done();
        });
    });
    
    it('Should fail on non-function exrpression', function() { 
        expect(function(){
            googl('pepito', true);
        }).toThrowError(TypeError, 'true is not a function');
    });
    
    it('Should fail on non-function exrpression', function() { 
        expect(function(){
            googl('pepito', []);
        }).toThrowError(TypeError, 'Array is not a function');
    });
});