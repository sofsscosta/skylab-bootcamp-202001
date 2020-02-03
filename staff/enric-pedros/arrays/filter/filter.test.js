describe('filter', function(){

    it('should return the elements lesser than 7', function(){
        (function(){

            
            var a = [8,7,6,5,5,4,4];
            function filtered (element){
                return element < 7
            };

            var result = filter(a,filtered);
            assert(result[0]=== 6,'it should be 6');
            assert(result[1]=== 5,'it should be 5');
            assert(result[2]=== 5,'it should be 5');
            assert(result[3]=== 4,'it should be 4');
            assert(result[4]=== 4,'it should be 4');

        })();

    });

    it('the result should be wrong for typeError',function(){
        (function(){
           var _error;
            try {
               filter(1,function(){}) 
            } catch (error) {
               _error = error; 
            }
            assert(_error instanceof TypeError,'the error should be TypeError')
            assert(_error.message === '1is not Array', 'should fail with message should be hello! is not Array')
        })();
    });

    it('it should be wrong for typeError of function', function(){
        (function(){
            var _error;
            try {
               filter([],1) 
            } catch (error) {
               _error = error; 
            }
            assert(_error instanceof TypeError,'the error should be TypeError')
            assert(_error.message === '1is not a function', 'should fail with message should be hello! is not Array')
  
        })();

    });

})