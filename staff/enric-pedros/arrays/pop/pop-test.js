describe('pop', function(){
    it('should delete the last posisition and return the last position',function(){
        (function(){
            var a = [1,2,3,4];
            var results = [1,2,3]
            newPop(a);
                assert(a.length === 3,'it should be 3')
                assert(a[0]=== results[0],'index [0]should be 1')
                assert(a[1]=== results[1],'index [0]should be 2')
                assert(a[2]=== results[2],'index [0]should be 3')
        })();
    });

    it('should delete the last posisition and return the last position',function(){
        (function(){
            var a = [1,2,3,4];
            var results=4;
            newPop(a);
            assert(results === 4,'the results should be 4');
        })();
    });



    it ("it should be fail if the argument isn't array",function(){
        (function(){
            var _error;
            try {
               newPop('hello!') 
            } catch (error) {
               _error = error; 
            }
            assert(_error instanceof TypeError,'the error should be TypeError')
            assert(_error.message === 'hello! is not Array','should fail with message should be hello! is not Array')
        })();
    });







})