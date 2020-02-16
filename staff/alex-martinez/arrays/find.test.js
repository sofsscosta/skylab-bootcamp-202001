var array = ['js','nodejs','reactjs'];

console.log('TEST find');

var test = find(array,callback('nodejs'));
console.log(test);

console.log('value should be a string');
console.assert(isNaN(test), 'should be a string');

console.log('value should be inside the array');
function testInsideArray(){
    for(var i=0; i<array.length; i++){
        if(array[i]===test){
            return true;
        }
    }
    return false;
}
console.assert(testInsideArray() === true,'should be inside the array');




 console.log('should fail on non-array as first argument');
 var _error;
 try {
     find(undefined, function() {});
 } catch(error) {
     _error = error;
 } finally {
     console.assert(_error instanceof  TypeError, 'should error be of type TypeError');
     console.assert(_error.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array"');
 }

 console.log('should fail on non-function as second argument');
 var _error;
 try {
     forEach(array, 1);
 } catch(error) {
     _error = error;
 } finally {
     console.assert(_error instanceof  TypeError, 'should error be of type TypeError');
     console.assert(_error.message === '1 is not an function', 'should fail with message "undefined is not an Array"');
 }