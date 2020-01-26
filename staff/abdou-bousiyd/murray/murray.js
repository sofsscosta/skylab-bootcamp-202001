'use strict';

function Murray() {
    var _arguments = arguments;

    var initializeWithLength = (function () {
        if (_arguments.length === 1 && typeof _arguments[0] === 'number')
            if (Number.isInteger(_arguments[0]))
                return true;
            else throw new RangeError('Invalid murray length')

        return false;
    })();

    this.length = initializeWithLength ? arguments[0] : arguments.length;

    if (!initializeWithLength)
        for (var i = 0; i < arguments.length; i++) this[i] = arguments[i];
}

Murray.prototype.push = function (value) {
    this[this.length] = value;

    return ++this.length;
};

Murray.prototype.forEach = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');

    for (var i = 0; i < this.length; i++) expression(this[i], i, this);
};

Murray.prototype.find = function (callback) {
    if(typeof callback !== 'function') throw new TypeError(callback + ' first argument must be a function')

    for (var i = 0; i < this.length; i++) {
        if(callback(this[i])) return this[i]
    }
    return undefined
 }

 Murray.prototype.findIndex = function (callback) {
    if(!arguments.length) throw new TypeError('function must contain arguments')

    for(var i = 0; i < this.length; i++) {
        if (callback(this[i])) return i;
    }
    return -1
}

Murray.prototype.includes = function (element, position = 0) {

    if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');    
    // if(!arguments.length) throw new TypeError(arguments + 'function must contain arguments')
    // if (!array.length) throw new TypeError(array + ' array cannot be empty'); 

    for(var i = position; i < this.length; i++) {
        if(this[i] === element) return true
    }
    return false
}

