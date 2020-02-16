'use strict'

function Murray () {
    var _arguments = arguments

    var initializeWithLength = (function() {
        if (_arguments.length === 1 && typeof _arguments[0] === 'number')
            if(Number.isInteger(_arguments[0]) && Number(_arguments[0])>0)
                return true
            else throw new RangeError ('Invalid murray length')
        else return false
    })();

    this.length = initializeWithLength ? arguments[0] : arguments.length = arguments.length

    if (!initializeWithLength)
        for(var i = 0; i<arguments.length; i++) this[i] = arguments[i];
}

Murray.prototype.push = function () {
    for (var i = 0; i<arguments.length; i++) {this[this.length] = arguments[i]; ++this.length}

    return this.length;
};

Murray.prototype.forEach = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');

    for (var i = 0; i < this.length; i++) expression(this[i], i, this);
};

Murray.prototype.concat = function() {

    if (typeof this === 'function' || typeof this === 'boolean') throw new TypeError (this + 'is not an Array')

    var newArray = new Murray

    for (var i = 0; i<this.length; i++)
        {newArray[i] = this[i]
        ++newArray.length}

    for (var i = 0; i<arguments.length; i++) {
        if (typeof arguments[i] === 'string' 
        || arguments[i] instanceof Function 
        || typeof arguments[i] === 'number' 
        || typeof arguments[i] === 'boolean') {

            newArray[newArray.length] = arguments[i]; ++newArray.length

        } else {for (var j = 0; j<arguments[i].length; j++) {
            newArray[newArray.length] = arguments[i][j]
            ++newArray.length
        }
    }
    }
    return newArray
}

Murray.prototype.pop = function() {
    delete this[this.length-1]
    return --this.length
}

Murray.prototype.reverse = function() {

    var newArray = new Murray()
    for (var i = this.length-1; i>-1; i--) { newArray[newArray.length] = this[i] }
    for (var i = 0; i<newArray.length; i++) { this[i] = newArray[i] }

    return this
}

Murray.prototype.slice = function () {

    var sliced = new Murray
    if (arguments[1] !== undefined && arguments[1] < this.length) {
    for (var j = arguments[0]; j<arguments[1]; j++) {
        sliced[sliced.length]=this[j]
        ++sliced.length}
    }
    else {for (var j = arguments[0]; j<this.length; j++) {
        sliced[sliced.length]=this[j]
        ++sliced.length}
    }
    return sliced
}

Murray.prototype.map = function () {

    if (!(arguments[0] instanceof Function)) throw new TypeError (arguments[0] + ' is not a function')

    var newMurray = new Murray 
    
    for (var i=0; i<this.length; i++){
        newMurray[i] = arguments[0](this[i])
        ++newMurray.length
    }
    return newMurray
}

Murray.prototype.splice = function () {

    var newMurray = new Murray
    var spliced = new Murray

    !isNaN(arguments[0]) && !(Number.isInteger(arguments[0])) && (typeof arguments[0] !== 'boolean') ? arguments[0] = parseFloat(parseInt(arguments[0])) : ''
    !isNaN(arguments[1]) && !(Number.isInteger(arguments[1])) && (typeof arguments[1] !== 'boolean') ? arguments[1] = parseFloat(parseInt(arguments[1])) : ''

    if (arguments[0]+this.length < 0 || isNaN(arguments[0])) arguments[0] = 0
    else if(arguments[0]<0) arguments[0] = this.length + arguments[0]
    else if(arguments[0]>this.length) arguments[0] = this.length

    if(arguments[1]<0 && arguments[1] !== undefined) arguments[1] = 0
    else if (arguments[1] === undefined) arguments[1] = this.length - arguments[0]
    else if (isNaN(arguments[1])) arguments[1] = 0
    else if (arguments[1]>this.length) arguments[1] = this.length - arguments[0]

    if(this.length === 0 && arguments.length - 2 > 0) {
        for (var i = 2; i<arguments.length; i++){
            this[this.length] = arguments[i]
            ++this.length}
        return spliced
    } else if (this.length === 0 && arguments[2] === undefined) {
        return spliced
    }
    
    for (var i = 0; i<arguments[0]; i++) {
        newMurray[i]=this[i]
        ++newMurray.length}

    if(arguments[1]===undefined) arguments[1] = 0

    for (var j = arguments[0]; j<arguments[1]+arguments[0]; j++) {
        spliced[spliced.length]=this[j]
        ++spliced.length}

    for(var h = 2; h<arguments.length; h++)
        {newMurray[newMurray.length] = arguments[h]
        ++newMurray.length}

    for (var n = arguments[0] + arguments[1]; n<this.length; n++) {
        newMurray[newMurray.length]=this[n]
        ++newMurray.length}

    for (var i = 0; i < this.length; i++) {delete this[i]}

    this.length = 0

    for (var i = 0; i < newMurray.length; i++) {
        this[i] = newMurray[i]
        ++this.length}

    return spliced
}

Murray.prototype.shift = function () {
    var firstElement = this[0]
    for (var i = 0; i < this.length-1; i++) {this[i]= this[i+1]}
    delete this[this.length-1]
    --this.length
    return firstElement
}

Murray.prototype.unshift = function() {
    var newMurray = new Murray
    var inserted = new Murray

    for (var i = 0; i<arguments.length; i++) {
        newMurray[i]=arguments[i]
        ++newMurray.length
        inserted[i]=arguments[i]
        ++inserted.length }

    for (var i = 0; i<this.length; i++) {
        newMurray[newMurray.length]=this[i]
        ++newMurray.length}

    for (var i = 0; i<this.length; i++) delete this[i]

    this.length = 0
        
    for (var i = 0; i<newMurray.length; i++){
        this[i] = newMurray[i]
        ++this.length }

    return this.length
}

Murray.prototype.some = function() {
    if(!(arguments[0] instanceof Function)) throw new ReferenceError(arguments[0] + ' is not a function')

    for (var i = 0; i<this.length; i++){   
        if (arguments[0](this[i])) return true
    }
    return false
}

Murray.prototype.fill = function(value, start, end) {
    if (start === undefined) start = 0
    if (end === undefined) end = this.length
    if (end !== undefined) { for (var i = start; i<end; i++) { this[i]=this[value] } }
    return this
}

Murray.prototype.join = function (separator) {
    var string
    if (separator != undefined) {
        for (var i = 0; i<this.length; i++) { 
            i===0 ? string = this[i] : string += (separator + this[i]) } }
    else {
        for (var i = 0; i<this.length; i++) { 
            i===0 ? string = this[i] : string += ',' + this[i] } }

    return string
}

Murray.prototype.flat = function(depth) {
    
    var newMurray = new Murray;
    if (depth === undefined) depth = 1
    if (isNaN(depth) || depth < 0 || depth === false || !Number.isInteger(depth)) return this

    function getValues (element, depth) {

        for (var i = 0; i<element.length; i++){
            
            if (element[i] instanceof Array && depth > -1) {
                
                getValues(element[i], depth-1)}
            
            else {newMurray[newMurray.length] = element[i] ; ++newMurray.length}
        }
    }
    getValues(this, depth)
    return newMurray
}

// Murray.prototype.copyWithin = function(target, element, endElement) {

//     var newMurray = new Murray

//     for (var j = element; j<endElement; j++) {
//         newMurray[newMurray.length] = this[j]
//         ++newMurray.length
    
//     }
// // Por estes fors ao contrário!

// for (var i = target; i<endElement - element + 1; i++){
//     for (var k = 0; k<newMurray.length; k++) {
//         var a = newMurray[k]
//     }
//     this[i] = a
// }

//     // for (var k = 0; k<newMurray.length; k++) {
//     //     for (var i = target; i<endElement - element + 1; i++){
//     //         this[i] = newMurray[k]
//     //     }
//     // }
    

    
//     return this


//     // if(endElement === undefined) endElement = this.length
//     // for (var i = target; i<endElement-element+1; i++) 
//     //     for (var j = element; j<endElement; j++)
//     //         this[i] = this[j]

//     // return this
// }