'use strict'

describe('SPLICE TEST', function(){

    it('the result shoud have the all the cuted numbers in the correct order',function(){

        var a = [1,2,3,4,5,6];
        splice(a,1,3);
        assert(a.length === 3, "array's length should be 3, not " + a.length);

    })

    it('the result function should actue on the elements', function(){

        var a = [1,2,3,4,5,6]
        var b = splice(a,1,3);
        b.forEach(function(value, index){
        assert( value === index + 2, 
        "the value in index " + index +" should be " + (index + 2) +" and not " + value)});

    })

    it('the added value shoul be placed in the correc index of the array', function(){

        var a = [1,2,3,4,5,6]
        splice(a,1,3,99);
        assert(a[1]===99, "the value in index 1 shoud be 99 no " + a[1] );

    })
    it('Should show the correct errors',function(){
        
        var _error;
        
        try {            
            
            splice(1, 3);
    
        } catch (error) {
            
            _error = error;
        } finally {
            
            assert(_error instanceof TypeError, 'should error be of type TypeError');
            assert(_error.message === '1 is not an Array', 'wrong message');
        };
    });

})



