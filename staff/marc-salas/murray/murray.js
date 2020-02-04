'use strict';

// function Murray() {
//     var _arguments = arguments;

//     var initializeWithLength = (function () {
//         if (_arguments.length === 1 && typeof _arguments[0] === 'number')
//             if (Number.isInteger(_arguments[0]))
//                 return true;
//             else throw new RangeError('Invalid murray length')

//         return false;
//     })();

//     this.length = initializeWithLength ? arguments[0] : arguments.length;

//     if (!initializeWithLength)
//         for (var i = 0; i < arguments.length; i++) this[i] = arguments[i];
// }

function Murray() {
    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        if (Number.isInteger(arguments[0])) {
            for (var j = 0; j < arguments[0]; j++) {
                this[j] = undefined;
            }
            this.length = j;
        } else {
            throw new RangeError('Invalid murray length');
        }
    } else {
        for (var i = 0; i < arguments.length; i++) {
            this[i] = arguments[i];
        }
        this.length = arguments.length;
    }
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
    var result = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return result;
}

Murray.prototype.concat = function () {
    var result = new Murray
    for (var k = 0; k < this.length; k++) {
        result.push(this[k]);
    }
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Murray || arguments[i] instanceof Array) {
            for (var j = 0; j < arguments[i].length; j++) {
                result.push(arguments[i][j]);
            }
        } else {
            result.push(arguments[i])
        }
    }
    return result;
}

Murray.prototype.fill = function () {
    arguments[1] = arguments[1] || 0;
    arguments[2] = arguments[2] || this.length;
    if (!(typeof arguments[1] === "number")) {
        arguments[1] = 0;
    } else if (!(typeof arguments[2] === "number")) {
        arguments[2] = this.length;
    }
    for (var i = arguments[1]; i < arguments[2]; i++) {
        this[i] = arguments[0];
    }
    return this;
}

Murray.prototype.every = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
    for (var i = 0; i < this.length; i++) {
        if (expression(this[i]) === false) {
            return false;
        }
    }
    return true;
}

Murray.prototype.splice = function (startIndex, count, value) {
    var thisCopy = new Murray();
    for(var i = 0; i < this.length; i++){
        thisCopy.push(this[i]);
    }

    for(var i = 0; i < thisCopy.length; i++){
        this.pop();
    }

    var firstHalf = new Murray();
    var secondHalf = new Murray();
    
    var addCount  =  arguments.length > 2 ? arguments.length -2 : 0;
    startIndex = Number.isInteger(Math.floor(startIndex)) ?  Math.floor(startIndex)  : 0;

    if (startIndex > thisCopy.length-1) {
        startIndex = thisCopy.length
    } else if(startIndex < 0){
        if (-startIndex > thisCopy.length){
            startIndex = 0;
        }else{
            startIndex = thisCopy.length + startIndex;
        }
    } 
    
    if (count === undefined && arguments[0]) { count = thisCopy.length - startIndex };
    if (typeof count !== "number") { count = 0 };
    if (count > thisCopy.length - startIndex){count = thisCopy.length - startIndex};
    count = Math.floor(count);
    var result = new Murray();
    for (var i = 0; i < count; i++) {
        result.push(thisCopy[startIndex + i]);
    }
    for ( var i = 0; i < startIndex; i++){
        firstHalf.push(thisCopy[i]);
    }
    for (var i = 0; i < addCount; i++){
        firstHalf.push(arguments[2+i]);
    }
    for (var i = startIndex; i < thisCopy.length; i++ ){
        secondHalf.push(thisCopy[i]);
    }
    for ( var i =0; i < count; i++){
        delete secondHalf[i];
    }
    var finalBoss = firstHalf.concat(secondHalf);
  
    for( var i = 0; i < finalBoss.length; i++){
        if (finalBoss[i] !== undefined){
            this.push(finalBoss[i]);
        }
         
    }

    return result;
}

Murray.prototype.reverse = function(){
    var result = new Murray();
    for (var i = 0; i < this.length; i++){
        result.push(this[this.length-1-i]);
    }
    for (var i = 0; i < this.length; i++){
        this[i] = result[i];
    }
    return result;
}

Murray.prototype.find = function(expression){
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
    for (var i = 0; i < this.length; i++){
        if (expression(this[i])){
            return this[i];
        }
    }
    return undefined
}

Murray.prototype.includes = function(value,startIndex){
    startIndex = startIndex < 0 ? this.length + startIndex : startIndex;
    startIndex = typeof startIndex === 'number'? Math.floor(startIndex) : 0;
    for(var i = startIndex; i < this.length; i++){
        if (value === this[i]) { return true };
    }
    return false;
}
