describe('googl aplication',function(){

    it('should all the results have a title', function(done){
        googl('pepito', function(results) { 
            results.forEach(function(result) { 
                expect(result.title.length > 0).toBe(true);
                done();
            })
        });
    })

    it('should throw an error if the second value is not a function',function(){
        try{
            googl('pepito', 1);
        } catch(error){
           var _error = error;
        }
        expect(_error).toBeInstanceOf(TypeError);
        expect(_error.message).toBe('TypeError callback should be a function');
    });    
    it('should throw an error if the first value is an empty sring',function(){
        try{
            googl('', function(){});
        } catch(error){
           var _error = error;
        }
        expect(_error).toBeInstanceOf(TypeError);
        expect(_error.message).toBe('query should have some string');
    });
    it('should throw an error if the first value is not primitive',function(){
        try{
            googl(function(){}, function(){});
        } catch(error){
           var _error = error;
        }
        expect(_error).toBeInstanceOf(TypeError);
        expect(_error.message).toBe('query should be a primitive value');
    });

});

