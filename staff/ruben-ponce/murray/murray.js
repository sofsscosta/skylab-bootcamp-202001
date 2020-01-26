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
};

Murray.prototype.concat = function () {
    var concated = this;
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
                concated[concated.length] = arguments[i][j];
                ++concated.length;
        }
    }
    return concated;
};

Murray.prototype.join = function (value) {
    var separator = '';
    if (value) {
        separator = value
    } else {
        separator = ","
    }
    var result = "";
    for (var i = 0; i < this.length; i++) {
        if (i < this.length-1) result += this[i] + separator;
        else result += this[i];
    }
    return result;
};

Murray.prototype.shift = function () {
    var substracted = this[0];
    delete this[0];
    --this.length
    return substracted;
};

Murray.prototype.unshift = function () {
    var newArray = [];
    for (var i = 0; i < arguments.length; i++) {
        newArray[i] = arguments[i];
    }
    for (var j = 0; j < this.length; j++) {
        newArray[j+i] = this[j];
    }
    for (var k = 0; k < this.length+i; k++) {
        this[k] = newArray[k]; 
    }
    this.length = this.length+i;
    return newArray;
};

Murray.prototype.tostring = function (value) {
    debugger
    var string = "";
    for (var i = 0; i < value.length; i++) {
        string += value[i];
    }
    return string;
};

