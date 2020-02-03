'use strict'

function Murray() {
    this.length = arguments.length;

    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        if (!(Number.isInteger(arguments[0]))) {
            throw new RangeError('Invalid murray length')
        } else {
            this[i] = undefined;
            this.length = arguments[0];
        }
    } else {
        for (var i = 0; i < arguments.length; i++) {
            this[i] = arguments[i];
        }

    }
}

Murray.prototype.forEach = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
    for (var i = 0; i < this.length; i++) {
        expression(this[i], i);
    }
    return undefined;
}

Murray.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++
    }
    return this.length;
}

Murray.prototype.pop = function () {
    var removed = this[this.length - 1];

    delete this[this.length - 1];
    --this.length

    return removed
}

Murray.prototype.concat = function (args) {
    var result = new Murray();

    for (var i = 0; i < this.length; i++) {
        result.push(this[i])
    }

    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Murray || arguments[i] instanceof Array) {
            for (var j = 0; j < arguments[i].length; j++) {
                result[result.length] = arguments[i][j];
                result.length++;
            }
        } else {
            result[result.length] = arguments[i];
        }
    }
    return result;
}

Murray.prototype.map = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function')
    var returnValue = new Murray();

    for (var i = 0; i < this.length; i++) {
        returnValue.push(expression(this[i], i));
    }
    return returnValue;
}

Murray.prototype.indexOf = function (value, fromIndex) {

    fromIndex = parseInt(fromIndex, 10) || 0;

    var startAtIndex = fromIndex < 0 ? this.length + fromIndex : fromIndex;

    for (var i = startAtIndex; i < this.length; i++) {
        if (this[i] === value) return i;
    }
    return -1
}

Murray.prototype.filter = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');

    var returnValue = new Murray();

    this.forEach(function (element, index) {
        expression(element, index) ? returnValue.push(element) : false;
    });

    return returnValue;
}

Murray.prototype.splice = function (startIndex, count) {
    var thisCopy = new Murray();

    for (var i = 0; i < this.length; i++) {
        thisCopy.push(this[i]);
    }

    for (var i = 0; i < thisCopy.length; i++) {
        this.pop();
    }

    var firstHalf = new Murray();
    var secondHalf = new Murray();

    var addCount = arguments.length > 2 ? arguments.length - 2 : 0;
    startIndex = Number.isInteger(Math.floor(startIndex)) ? Math.floor(startIndex) : 0;

    if (startIndex > thisCopy.length - 1) {
        startIndex = thisCopy.length
    } else if (startIndex < 0) {
        if (-startIndex > thisCopy.length) {
            startIndex = 0;
        } else {
            startIndex = thisCopy.length + startIndex;
        }
    }

    if (count === undefined && arguments[0]) { count = thisCopy.length - startIndex };
    if (typeof count !== "number") { count = 0 };
    if (count > thisCopy.length - startIndex) { count = thisCopy.length - startIndex };
    count = Math.floor(count);

    var result = new Murray();

    for (var i = 0; i < count; i++) {
        result.push(thisCopy[startIndex + i]);
    }
    for (var i = 0; i < startIndex; i++) {
        firstHalf.push(thisCopy[i]);

    }
    for (var i = 0; i < addCount; i++) {
        firstHalf.push(arguments[2 + i]);
    }
    for (var i = startIndex; i < thisCopy.length; i++) {
        secondHalf.push(thisCopy[i]);
    }
    for (var i = 0; i < count; i++) {
        delete secondHalf[i];
    }
    var finalBoss = firstHalf.concat(secondHalf);

    for (var i = 0; i < finalBoss.length; i++) {
        if (finalBoss[i] !== undefined) {
            this.push(finalBoss[i]);
        }
    }
    return result;
}

Murray.prototype.shift = function () {
    var removedValue = this[0];

    delete this[0];

    for (var i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
    }

    this.pop();

    return removedValue;
}

Murray.prototype.unshift = function () {
    if (arguments.lengt === 0) return this.length;
    var args = new Murray();

    for (var i = 0; i < arguments.length; i++) args.push(arguments[i])

    args = args.concat(this);

    for (var i = 0; i < args.length; i++) {
        this[i] = args[i]
    }

    this.length = args.length;

    return this.length
}

Murray.prototype.join = function (separator) {
    if (this.length === 0) { return '' }

    separator = separator || ',';
    separator += '';
    var returnValue = this[0] + '';

    for (var i = 1; i < this.length; i++) {
        returnValue += separator + this[i]

    }

    return returnValue;
}
