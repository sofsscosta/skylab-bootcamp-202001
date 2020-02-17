'use strict'
describe("REVERSE TEST", function(){

    it('array should keep the same length',function(){

        var a = [1,2,3];
        var b = reverse(a);
        assert(a.length === 3, 'arrays length should be 3 not ' + a.length);

    })

    it('values should be paced inverted of the original order', function(){

        var a = [3,3,1];
        var b = reverse(a);
        b.forEach(function(value,index){
        assert(value === index + 1, "values are not reverted correctly" );
        });  

    })
    it('Should show the correct errors',function(){
        
        var _error;
        
        try {           
            
            reverse (1);
    
        } catch (error) {
            
            _error = error;
        } finally {
            
            assert(_error instanceof TypeError, 'should error be of type TypeError');
            assert(_error.message === '1 is not an Array', 'wrong message');
        };
    });


})
