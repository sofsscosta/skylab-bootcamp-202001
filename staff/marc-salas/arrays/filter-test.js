'use strict';

describe("FILTER TEST", function(){

    it("should return all the value that complies the condition", function(){

        var a = [1,15,19,10,5];
        function isBigEnough(value) {
        return value >= 10;
        }
        assert( filter(a,isBigEnough).length === 3,"should pass 3 values not " + filter(a,isBigEnough).length);        

    })

    it("sould compare all the values of the array", function(){

        var a = ["hola","hola","hola","homer"];
        function isLongEnough(value) {
            return value.length >= 5;
        }
        assert( filter(a,isLongEnough) == 'homer',"should be homer not " +  filter(a,isLongEnough));

    });

    it('Should show an error if the first element is not an Array',function(){
        var _error;
        
        function errorTest(){ console.log("hola") }

        try {
            
            filter( 1, errorTest);
    
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
            
            filter( [], 1);
    
        } catch (error) {
            
            _error = error;

        } finally {
            
            assert(_error instanceof TypeError, 'should error be of type TypeError');
            assert(_error.message === '1 in not a Function', 'wrong message');
        };
    });

})


