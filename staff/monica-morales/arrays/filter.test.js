describe('filter', function(){
    it('Should return values bigger than 5', function(){
        (function(){
        var array = [8,2,9,1,6];
        function expres(value){
            return value > 5;
        }
        var result = filter(array,expres);
           
        assert(result.length === 3, 'Result should be 3');
    })();

    it('Should failed if the first arguments is not an array', function(){
        (function(){
            var _error;
            try {
                filter('hello');
            } catch (error){
                _error = error;
            }
            assert(_error instanceof TypeError, 'The error should be TypeError');
            assert(_error.message === 'hello is not an Array', 'Should fail with message: "hello is not an Array"');
        })();
    });
    });
});











