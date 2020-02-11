describe('pop', function(){
    it ('it should return the same array with the last value substracted', function(){
        var a = [1, 2, 3];

        var resultA = pop(a);

        assert(resultA=== a[2], 'it should be same as '+a[2]+ ' but instead got '+resultA)
        assert(a.length===2);

        var b = [];

        var resultB=pop(b);

        assert(resultB===undefined,"it should return undefined" );

        var c = ['a', 'b', [1, 2, 3]];

        var resultC=pop(c);

        assert(c.length===2, 'c length should be 2');
        assert(c[0]==='a', 'should value at index 0 be a');
        assert(c[1]==='b', 'should value at index 1 be b');
    })
    it ('it should fail when the first argument is not an array giving a TypeError', function(){
        (function(){
            var _error;

            try {
                pop(undefined);
                
            } catch (error){
                _error=error;

            } finally {
                assert(_error instanceof TypeError, 'should error be of TypeError');
                assert(_error.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array"');
            };
        })();

        (function(){
            var _error;

            try {
                pop(1);

            } catch (error){
                _error=error;

            } finally {
                assert(_error instanceof TypeError, 'should error be of TypeError');
                assert(_error.message === '1 is not an Array', 'should fail with message "1 is not an Array"');
            };
        })();

        (function(){
            var _error;
            
            try {
                pop('hola');

            } catch (error){
                _error=error;
                
            } finally {
                assert(_error instanceof TypeError, 'should error be of TypeError');
                assert(_error.message === 'hola is not an Array', 'should fail with message "hola is not an Array"');
            };
        })();
    });
});