'use strict'
var a = [1, 2, 3, 4];

if (a.prototype.constructor.name === 'Array') return true;
else return false;