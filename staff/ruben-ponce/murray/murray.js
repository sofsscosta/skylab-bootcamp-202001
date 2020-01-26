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

Murray.prototype.pop = function () {
        var a = this[this.length-1];
        delete this[this.length-1];
        --this.length
        return a;
};

Murray.prototype.isArray = function (obj) {
    return obj.__proto__.constructor.name === 'Murray'
};

Murray.prototype.reverse = function() {
    var a = [];
    for (var i = this.length-1; i >= 0; i--) {
        a[a.length] = this[i];
    }
    return a;
}