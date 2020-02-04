/*'use strict';

console.log('TEST map');

console.log('It creates a new array, using the original, using a callback function');

var arr = [1,4,2,9];
var newArray = map(arr, expression);
var indexOneNum = arr[0];
var indexOneNewArray = newArray[0];

console.assert(arr.length === newArray.length, 'Array original has same length than newArray');
console.log('Array original is same length than newArray');

console.assert(indexOneNewArray % indexOneNum === 0, 'Index one of NewArray is even');
console.log('Elements of Array num are the double of NewArray');



console.log('should fail on non-array as first argument');
var arr = 'monica';
var _error;
try {
    map(arr, 1);
}catch(error){
    _error = error; 
}
    console.assert(_error instanceof TypeError, 'should error be of type TypeError');
    console.assert(_error.message === 'arr is not Array', 'should fail with message "arr is not a Array"');




var a = [1,2,3,4];
map(a);
console.log('should fail on there is an expression');
var _error;
try {
    map(a,expression);
}catch(error){
    _error = error; 
}
    console.assert(_error instanceof TypeError, 'should error be of type TypeError');
    console.assert(_error.message === 'is not expression', 'should fail with message "not exist an expression"');*/

describe('map', function(){
    it('Original array should be modified applying an expression', function(){
        (function(){
            var a = [8,25,6,78,12];
            map(a, function rest(value){
                return value -1
            });
            
            var result = [7,24,5,77,11];

            assert(result.length === 5, 'The result length should be 3' );
            assert(result[0] === 7, 'Index 0 should be 7');
            assert(result[1] === 24, 'Index 0 should be 7');
            assert(result[2] === 5, 'Index 0 should be 7');
            assert(result[3] === 77, 'Index 0 should be 7');
            assert(result[4] === 11, 'Index 0 should be 7');
        })();
    });

    it('Should failed if the first argument is not an array', function(){
        (function(){
            var _error;
            try {
                function expression(value){
                    return value*2
                }
                map('hello', expression)

            }catch(error){
                _error = error;
            }
            assert(_error instanceof Array, 'The error should be TypeError');
            assert(_error.message === 'Hello is not an Array', 'Should fail with message: "Hello is not an Array"');

        })
    })

    it('Should failed if the second argument is not an expression', function(){
        (function(){
            var_error;
            try {
                var a = [1,5,3,6];
                map(a, 'hello');

            } catch (error) {
                _error = error;
            }
            assert(expression === undefined, 'The error should be TypeError');
            assert(_error.message === 'Is necessary an expresion', 'Should fail with message: "It is necessary an expression"');
        })
    })
});
