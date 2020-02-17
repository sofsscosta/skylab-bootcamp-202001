describe('map',function(){

    it('should return an array',function(){
        var array = [1,2,3,4];

        var result = map(array,function(){
            
        });
        assert(result instanceof Array, 'should return an array');
    });
    it('should the original array be the same',function(){
        var array = [1,2,3,4];
        var temporal = array.map(function(value){
            return value;
        })
        var result = map(array,function(value){
            return value;
        });
        
        for(var i=0; i<array.length; i++){
            assert(temporal[i] === array[i], 'should the original array be the same');
        }
    });

    it('should fail if not the first argument an array', function(){

        (function(){
            var _error;
            try{
                map(1,function(){});
            }catch(error){
                _error = error;
                
            }finally{
                assert(_error instanceof TypeError,'1 is not an array');
                assert(_error.message === '1 is not an array','wrong message');
            }
        })();
    });
    it('should fail if the second argument is not a function',function(){
        (function(){
            var _error;
            try{
                map([1,2],'str');//comprobar
            }catch(error){
                _error = error;
            }finally{
                assert(_error instanceof TypeError, 'str is not a function');
                assert(_error.message === 'str is not a function','wrong message');
            }
        })();
    });

});