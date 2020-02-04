'use strict'
describe('PUSH TEST', function(){

    it("should add the value inside the array", function(){
        (function(){
        var a = [1, 2, 3, 4];
        
        push(a, 5);

        assert(a.length === 5, "the value was not correctly added in the array" );
        })()
    })

    it("should add more than one valune in the array", function(){
        (function(){
            var a = [1, 2, 3, 4];
            push(a, 5, 6);
            assert(a.length === 6, "the value was not correctly added in the array");
        })()
    })

    it("sould add the values at the end of the array respecting the original order", function(){
        (function(){
            var a = [1, 2, 3, 4];
            push(a, 5, 6);
            a.forEach(function (value, index) {
            assert(value === index + 1, "the value in index " + index + " should be " + (index + 1) + " and not " + value)
});
        })()
    })

    it('Should show the correct errors', function(){
        (function(){
            var _error;
            try {
                var a = 1;
                push(a, 3);

            } catch (error) {
                _error = error;
            } finally {
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === '1 is not an Array', 'wrong message');
            }
        })()
    })
})










