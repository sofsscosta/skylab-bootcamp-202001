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

Murray.prototype.splice = function (start, deleteCount, value) {
    // TODO validate inputs

    if (!deleteCount) {
        for (var i = this.length; i > start; i--) this[i] = this[i - 1];

        this[start] = value;

        this.length++;
    } else if (deleteCount === 1) {
        this[start] = value;
    } else if (deleteCount > 1) {
        for (var i = start + 1; i < this.length; i++)
            delete this[i];

        this.length -= deleteCount - (arguments.length - 2);

        for (var i = 2; i < arguments.length; i++)
            this[start + i - 2] = arguments[i];
    }
};

Murray.prototype.toString = function () {
    // Murray({ 0: 'Jan', 1: 'March', 2: 'Feb', 3: 'Oct', length: 4 })

    return Murray.name + ' { ' + (function () {
        var string = '';

        for (var i = 0; i < this.length; i++)
            string += i + ': ' + this[i] + (i < this.length - 1? ', ' : '');

        return string;
    }.bind(this))() + ' }';
};