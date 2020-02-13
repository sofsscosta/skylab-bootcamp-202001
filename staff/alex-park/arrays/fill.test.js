describe ('fill', function(){
    it ('it changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.', function(){
        var a = [1,2,3,4,5,6,7,8,9,10];
        var test = fill(a, 'x', 4, 9);
        assert(test[4] === 'x','it should be an x');
        assert(test[4] === a[4], 'original array has been modified too');
        assert(test[test.length-1] === 10,'last value should not be modified');
        
        var b = [1,2,3,4,5,6,7,8,9,10];
        var test2 = fill(b, 'x', 3);
        assert(test2[test2.length-1] === test2[3], 'since no end was specified, all values from the start should be modified');
        
        var c = [1,2,3,4,5,6,7,8,9,10];
        var test3 = fill(c, 'oso');
        var contador = 0;
        test3.forEach(function(value){if(value === 'oso') {contador++}});
        assert(contador === c.length, 'should be the same as length of original array since all values were modified');
    })

    it('should fail if array is not an array', function(){
        (function(){
            var _error;
            var callback = function(){};
           
            try{
                fill(undefined, callback)
            
            }catch(error){
                _error=error
           
            } finally {
           
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array"');
            };
        })();
      
        (function(){
            var _error;
            var callback = function(){};
          
            try{
                fill(1, callback)
            }catch(error){
                _error=error
           
            } finally {
           
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === '1 is not an Array', 'should fail with message "1 is not an Array"');
            };
        })();
        
        (function(){
            var _error;
            var callback = function(){};
          
            try{
                fill(true, callback)
         
            }catch(error){
                _error=error
         
            } finally {
          
                assert(_error instanceof TypeError, 'should error be of type TypeError');
                assert(_error.message === 'true is not an Array', 'should fail with message "true is not an Array"');
            };
        })();
    })
})