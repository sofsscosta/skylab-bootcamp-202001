'use strict'


try {
    console.log('TEST isarray()');

    var a = [1, 2, 3, 4];
    var b = isarray(a);
} catch {
    throw new TypeError('E');
} finally {
    console.assert(b === true, 'a is not Array!');
}