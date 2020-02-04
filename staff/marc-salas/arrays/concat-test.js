'use strict';
describe("CONCAT TEST", function(){
    var a = [1,2,3];
    var b = [4,5,6];

    it("array's length should be 6 ",function(){
        assert( concat(a,b).length === 6, "array's length should be 6 " );  
    });
    it("Should concat the array a = [1,2,3] to array b = [4,5,6] to one array [1,2,3,4,5,6] ",function(){
        concat(a,b).forEach(function (value, index){
            assert( value === index +1, "Value on index "+ index+ " should be " + (index + 1) +" but is " + value)
        }) 
    })
    it('Should show the correct errors',function(){
        var _error;
        try {
            concat(1, [1,2,3],[1,2,3]);
    
        } catch (error) {
            _error = error;
        } finally {
            assert(_error instanceof TypeError, 'should error be of type TypeError');
            assert(_error.message === '1 is not an Array', 'wrong message');
        };
    });



})


