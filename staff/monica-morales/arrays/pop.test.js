describe('pop',function(){
        it('Should delete the last position and return the last position', function(){
            (function (){ 
                var a = [1,2,3,'juan'];
                pop(a);
                var result = [1,2,3];
                assert(a.length === 3, 'The result should be 3');
                assert(a[0] === result[0], 'Index o should be 1');
                assert(a[1] === result[1], 'Index o should be 2');
                assert(a[2] === result[2], 'Index o should be 3');
            })();
        });

        it('Should show the element of last position', function(){
            (function (){ 
                var a = [1,2,3,'juan'];
                var result=pop(a);
                assert(result === 'juan', 'The result should be "juan"');
            })();
        });
    
        it('Should failed if the first arguments is not an array', function(){
            (function (){
                var _error;
                try {
                    pop('helloWorld')
                } catch (error) {
                    _error = error;
                }
                assert(_error instanceof TypeError , 'The error should be TypeError');
                assert(_error.message ==='helloWorld is not an Array', 'Should fail with message: "helloWorld is not an Array"');
        })();
    });
});
