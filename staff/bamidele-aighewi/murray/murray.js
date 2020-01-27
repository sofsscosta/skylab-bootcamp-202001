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

Murray.prototype.concat = function () {
    // if (!arguments.length) throw new RangeError('"concat" expects at least one parameter, none given');
    var args = this;
    
    if (!args.length)
        return [];

    var output = args[0] instanceof Array ? [] : '';
    var outputIsArray = output instanceof Array;

    var join = function (array, separator) {
        separator = typeof separator !== 'undefined' ? separator : ',';
        var result = '';

        for (var x = 0; x < array.length; x++) {
            result += array[x]
            if ((x + 1) !== array.length) {
                result += separator
            }
        }

        return result;
    }

    var toString = function (items) {
        var output = [];
        for (var x = 0; x < items.length; x++) {
            var item = items[x];
            if (item instanceof Array) {
                output[output.length] = toString(item);
            } else {
                output[output.length] = item;
            }
        }

        return join(output, ',');
    }

    for (var x = 0; x < args.length; x++) {
        var item = args[x];
        if (outputIsArray) {
            //first argument is an array to let's construct an array
            output[output.length] = item;
        } else {
            //first argument is a string to let's construct a string
            output += typeof item === 'object' ? toString(item) : item;
        }
    }

    return output;
}

Murray.prototype.copyWithin = function(index, start, end) {
    var array = this;

    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array. ' + (typeof array) + ' given');
    if (typeof index !== 'undefined' && typeof index !== 'number') throw new TypeError(index + ' is not a number. ' + (typeof index) + ' given');
    if (typeof start !== 'undefined' && typeof start !== 'number') throw new TypeError(start + ' is not a number. ' + (typeof start) + ' given');
    if (typeof end !== 'undefined' && typeof end !== 'number') throw new TypeError(end + ' is not a number. ' + (typeof end) + ' given');

    var rangeValues = [];
    start = typeof start === 'undefined' ? 0 : start;
    end = typeof end === 'undefined' ? array.length : end;
    index = typeof index === 'undefined' ? 0 : index;

    if (end > array.length) end = array.length
    if (end < start) end = start;

    for (var x = start; x < end; x++) {
        rangeValues[rangeValues.length] = array[x];
    }

    for (var x = 0; x < rangeValues.length; x++) {
        array[index] = rangeValues[x];
        index++;
    }

    return array;
}