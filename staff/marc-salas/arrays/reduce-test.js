'use strict'

describe('REDUCE TEST', function(){

    it('should return thr correct value passimng for all the values of the array', function(){

        var a = [1,2,3,4]
        function add(acum,currentValue){
            return acum + currentValue;
        }
            assert(reduce(a,add) === 10, "result shuld be 10 not " + reduce(a,add) );

    });

    it('should start the acum from the input value', function(){

        var a = [1,2,3,4]
        function add(acum,currentValue){
            return acum + currentValue;
        }
        assert(reduce(a,add,3) === 13, "result shuld be 10 not " + reduce(a,add,3) );

    });

    it('Should show an error if the first element is not an Array',function(){
        var _error;
        
        function errorTest(){ console.log("hola") }

        try {
            
            reduce( 1, errorTest);
    
        } catch (error) {
            
            _error = error;

        } finally {
            
            assert(_error instanceof TypeError, 'should error be of type TypeError');
            assert(_error.message === '1 is not an Array', 'wrong message');
        };
    });

    it('Should show an error if the second element is not a function',function(){
        var _error;
        
        try {
            reduce( [],1, 1);
    
        } catch (error) {
            
            _error = error;

        } finally {
            
            assert(_error instanceof TypeError, 'should error be of type TypeError');
            assert(_error.message === '1 in not a Function', 'wrong message');
        };
    });

});
