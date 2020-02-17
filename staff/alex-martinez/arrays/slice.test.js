
describe('slice',function(){
    it('should be return an array',function(){
        var response = slice([1,2,3],1,2);
        
        assert(response instanceof Array, 'should return an array');
    });
    it('should fail if the first argument is not an array',function(){
        (function(){
            var _error;
            try{
                slice('str',1,2);
            }catch(error){
                _error = error;
            }finally{
                assert(_error instanceof TypeError,'str is not an array');
                assert(_error.message === 'str is not an array','wrong message');
            }

        })();

    });
});