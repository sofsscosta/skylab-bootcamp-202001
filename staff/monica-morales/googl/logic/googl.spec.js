'use strict';

describe('googl', function()  {
    it('Should return an array with objects', function(done){
        googl('pepito', function(results){
            expect(results instanceof Array).toBe(true);
            results.forEach(result => {
                expect(result instanceof Object).toBe(true);
            });

            done();
        });
    });
    it('Should results have a length bigger than 0', function(done){
        googl('pepito',function(results){
            expect(results.length > 0).toBe(true);
            expect(results.length<=0).toBe(false);

            done();
        });
    });
    
    it('Should typeof title, description and link be a string', function(done){
        googl('Barcelona', function(results){
            results.forEach(result=>{
                expect(typeof result.title).toBe('string');
                expect(typeof result.description).toBe('string');
                expect(typeof result.link).toBe('string');
            });
            done();
        });
    });

    it("should fail if query is not a string", function(){
        expect(function(){
            googl(3, function(){ });
        }).toThrowError(TypeError, "3 is not a string");
    });
    
});