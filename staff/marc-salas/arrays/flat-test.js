'use strict';

describe('FLAT TEST', function(){

    var a = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];

    it('should reduce the deep of the array one level', function(){

        assert(flat(a).length === 5, "The array's deep it's not the correct");

    });

    it('should reduce the deep of the array as much levels as the user indicates',function(){

        assert((flat(a,2).length === 7 && flat(a,3).length === 9 ), "The array's deep it's not the correct");

    });

    it('should reduce the deep of the array all the levels',function(){
        
        assert(flat(a,Infinity).length === 10, "The array's deep it's not the correct"); 

    });

    it('Should show the correct errors',function(){
        
        var _error;
        
        try {           
            
            fill(1, 3);
    
        } catch (error) {
            
            _error = error;
        } finally {
            
            assert(_error instanceof TypeError, 'should error be of type TypeError');
            assert(_error.message === '1 is not an Array', 'wrong message');
        };
    });


});





