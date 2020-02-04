/*El método indexOf() retorna el primer índice en el que se puede 
encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.*/
describe('indexOf', function(){
    it('Should return the index of the first argument that matches the indicated value',function(){
         (function(){
             var a = [4,6,5,1,9];
             var result = indexOf(a, 5);
             assert(result === 2, 'The result should be 2');
             assert(typeof result === 'number', 'The result should be a number');
        })();
     }); 

     it('Should return -1 because the value is not in array',function(){
        (function(){
            var a = [4,6,5,1,9];
            var result = indexOf(a, 8);
            assert(result === -1, 'The result should be 1');
        })();
    }); 

    it('Should  failed if in arguments there is not an array', function(){
        (function(){
            var _error;
            try {
                var a ='hello';
                indexOf(a, 'hello');
            } catch (error) {
                _error = error;
            }
            assert(expression === undefinded, 'The error should be TypeError');
            assert(_error.message === 'Is necessary an array', 'Should fail with message: "Is necessary an array');
        })
    })

    it('Should  failed if in arguments there is not a value', function(){
        (function(){
            var _error;
            try {
                var a = ['bye','hello','salute'];
                indexOf(a);
            } catch (error) {
                _error = error;
            }
            assert(expression === undefinded, 'The error should be TypeError');
            assert(_error.message === 'Is necessary a value', 'Should fail with message: "Is necessary a value');
        })
    })
});
