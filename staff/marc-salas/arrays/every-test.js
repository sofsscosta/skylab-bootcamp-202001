'use strict';

describe('EVERY TEST',function(){

    it("should compare all the array's elements and return true if all of them are bigger than 10", function(){

        var a = [19,15,16,33,11];

        function isBigEnough(value) {

            return value > 10;

        }

        assert(every(a,isBigEnough) === true, "should return true and not false" );
    });

    it("should return false cause the type of one argument is not a Number",function(){
        var a = [2, 15, "homer" ];
            
        function isNumber(value) {
    
            return typeof value === 'number';
        }

        assert(every(a,isNumber) === false, "should returne false because there is an string in the array");

    });

    it("should run for all the array missing no elements",function(){

        var testIndex0 = ['homer', 1, 2];
        var testIndex1 = [1, 'homer', 2];
        var testIndex2 = [1, 2, 'homer'];

        function isNumber(value) {
    
            return typeof value === 'number';
        
        }
        
        var a = every(testIndex0, isNumber);
        var b = every(testIndex1, isNumber);
        var c = every(testIndex2, isNumber);

        assert( (a === b && b === c), 'should return flase in all the situations');
        
    });

    it('Should show an error if the first element is not an Array',function(){
        var _error;
        
        function errorTest(){ console.log("hola") }

        try {
            
            every( 1, errorTest);
    
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
            
            every( [], 1);
    
        } catch (error) {
            
            _error = error;

        } finally {
            
            assert(_error instanceof TypeError, 'should error be of type TypeError');
            assert(_error.message === '1 in not a Function', 'wrong message');
        };
    });

});


