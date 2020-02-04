describe('concat', function() {
    it('should return a new array (without modifying the arguments) with all added arrays concated', function() {
        (function() {
            var a =['a', 'b', 'c'];
            var a2= ['d','e','f'];
            var resultA= concat(a, a2);

            assert(resultA.length === 6, 'length should be 6 but you got ' + resultA.length);
            assert(resultA[3] === 'd', 'it should return a d, but instead you got ' + resultA[3]);


            var b = [1, 2, 3];
            var b1 = ['a', 'b', 'c'];
            var b2 = [4, 5, 6];
            var resultB = concat(b, b1, b2);

            assert(resultB.length === 9, 'length should be 9 but you got ' + resultB.length);
            assert(resultB[6] === 4, 'it should be a 4 but instead you got ' + resultB[6]);


            var c = ['a', 'b', 'c'];
            var c1 = [1, 2, 3];
            var c2 = [4,5,6,7,'Edu'];
            var c3 = [{name: 'Alex'}]
            var resultC = concat(c, c1, c2, c3);

            assert(resultC.length === 12, 'length should be 12 but you got ' + resultC.length);
            assert(resultC[resultC.length-1].constructor.name === 'Object', 'is should be the object but instead you got ' + resultC[resultC.length-1].constructor.name);
        })();
    })
    it('should fail when the first argument is not an array, giving a TypeError', function() {
        (function(){
            var _error;

            try {
                concat(undefined);
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
                concat(1);
            } catch (error){
                _error=error;
            } finally {
                assert(_error instanceof TypeError, 'should error be of TypeError');
                assert(_error.message === '1 is not an Array', 'should fail with message "1 is not an Array"');
            };
        })();
        (function() {
            var _error;
            
            try {
                concat('hola');
            } catch (error){
                _error=error;
            } finally {
                assert(_error instanceof TypeError, 'should error be of TypeError');
                assert(_error.message === 'hola is not an Array', 'should fail with message "hola is not an Array"');
            };
        })();
    })
})