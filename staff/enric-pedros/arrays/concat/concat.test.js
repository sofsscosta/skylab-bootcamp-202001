
'use strict'

console.log('TESTING CONCAT ARRAY')

var a = [1,2,3,4]
var b = [5,6,7,8]
var newconcat = concat(a,b)

console.assert( newconcat.length === a.length + b.length,'The new array length should be the sum of the arguments lentgh ')

var _error; 

try {
concat()    
} catch (error) {
    _error = error
}finally {
    console.assert(_error instanceof RangeError, 'should error be of type RangeError')
    console.assert(_error.message === ' is lesser than minimum number of arrays','ERIC RULES')
}