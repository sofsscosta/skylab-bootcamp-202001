describe('concat',function(){
    it('should return an array',function(){
        var response = concat([1,2,3],'value');

        assert(response instanceof Array, 'should return an array');
    });
    it('should the original array not change',function(){
        var array = [1,2,3];
        var temporal = array.map(function(value){
            return value;
        })
        var response = concat(temporal,'value');
        //console.log(response);
        //console.log(array)
        
        
        for(var i=0; i<array.length; i++){
            assert(array[i] === temporal[i],'should the original array be the same');
        }
    });
    it('should fail if the first argument is not an array',function(){
        (function(){
            var _error;
            try{
                concat(8,'value');
            }catch(error){
                _error = error;
            }finally{
                assert(_error instanceof TypeError, '8 is not an array');
                assert(_error.message === '8 is not an array', 'wrong message');
            }
        })();
    });
});