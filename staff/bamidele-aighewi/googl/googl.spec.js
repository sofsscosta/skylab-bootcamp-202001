'use strict';

// Test 1: 1st param as a non-primitive value

(function () {
    var query = function () { };
    var callback = function () { };

    try {
        googl(query, callback);
    } catch (error) {
        console.assert(error instanceof TypeError, 'should error be instace of TypeError. "' + error.constructor.name + '" received');
        var expectedMessage = 'Expects query to be a primitive value. ' + (typeof query) + ' given';
        console.assert(error.message === expectedMessage, 'should message be: ' + expectedMessage + ' >>> but received: "' + error.message);
    }
})();

// Test 2: 1st param as empty string
(function () {
    var query = "";
    var callback = function () { };

    try {
        googl(query, callback);
    } catch (error) {
        console.assert(error instanceof RangeError, 'should error be instace of RangeError. "' + error.constructor.name + '" received');
        var expectedMessage = 'Expects length of query value to be at least 1. None given';
        console.assert(error.message === expectedMessage, 'should message be: ' + expectedMessage + ' >>> but received: "' + error.message);
    }
})();

// Test 3: 2nd param as function
(function () {
    var query = "skylab academy";
    var callback = undefined;

    try {
        googl(query, callback);
    } catch (error) {
        console.assert(error instanceof TypeError, 'should error be instace of TypeError. "' + error.constructor.name + '" received');
        var expectedMessage = 'callback is not a function. "' + (typeof callback) + '" given';
        console.assert(error.message === expectedMessage, 'should message be: ' + expectedMessage + ' >>> but received: "' + error.message);
    }
})();