console.log('should fail if callback is not a function');
var _error;
var arr = [1, 2, 3]
try {
    map(arr);
} catch (error) {
    _error = error;
} finally {
    console.assert(_error instanceof TypeError, 'should error be of type TypeError');
    console.assert(_error.message === 'undefined is not a function', 'should fail with message "undefined is not a function"');
};
var _error;
var arr = [1, 2, 3]
try {
    map(arr, 1);
} catch (error) {
    _error = error;
} finally {
    console.assert(_error instanceof TypeError, 'should error be of type TypeError');
    console.assert(_error.message === '1 is not a function', 'should fail with message "1 is not a function"');
};
var _error;
var arr = [1, 2, 3]
try {
    map(arr, true);
} catch (error) {
    _error = error;
} finally {
    console.assert(_error instanceof TypeError, 'should error be of type TypeError');
    console.assert(_error.message === 'true is not a function', 'should fail with message "true is not a function"');
};
console.log('should fail if array is not an array');
var _error;
var callback = function () { };
try {
    map(undefined, callback)
} catch (error) {
    _error = error
} finally {
    console.assert(_error instanceof TypeError, 'should error be of type TypeError');
    console.assert(_error.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array"');
};
try {
    map(1, callback)
} catch (error) {
    _error = error
} finally {
    console.assert(_error instanceof TypeError, 'should error be of type TypeError');
    console.assert(_error.message === '1 is not an Array', 'should fail with message "1 is not an Array"');
};
try {
    map(true, callback)
} catch (error) {
    _error = error
} finally {
    console.assert(_error instanceof TypeError, 'should error be of type TypeError');
    console.assert(_error.message === 'true is not an Array', 'should fail with message "true is not an Array"');
};