'use strict'

function Murray() {
    this.length = 0
    if(arguments.length === 1 && typeof arguments[0] === 'number' && Number.isInteger(arguments[0])) {
        for(var i = 0; i < arguments[0]; i++) {
            this[i] = undefined
            this.length++
        }
        for(var i = 0; i < this.length; i++) {
            delete this[i]
        }
    } else if(arguments.length === 1 && typeof arguments[0] === 'number' && !(Number.isInteger(arguments[0]))) {
        throw new RangeError('Invalid murray length')
    } else {
        for(var i = 0; i < arguments.length; i++) {
            this[i] = arguments[i]
            this.length++
        }
    }
}

Murray.prototype.push = function() {
    for(var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
        this.length++
    }
    return this.length
}

Murray.prototype.pop = function() {
    var result = this[this.length - 1]
    delete this[this.length]
    this.length--
    return result

}

Murray.prototype.concat = function() {
    var result = new Murray
    for(var i = 0; i < this.length; i++) {
        result.push(this[i])
    }
    for(var i = 0; i < arguments.length; i++) {
        if(arguments[i] instanceof Murray) {
            for(var j = 0; j < arguments[i].length; j++) {
                result.push(arguments[i][j])
            }
        } else {
            result.push(arguments[i])
        }
    }
    return result
}

Murray.prototype.splice = function() {
    var result = new Murray
    var auxiliarMurray = new Murray
    var start = arguments[0]
    var deleteIndex = arguments[1]

    //Arguments evaluation
        //start
    if(typeof start === 'number') {
        if(Number.isInteger(start)) {
            if(start >= 0) {
                start = start
            } else {
                start = this.length - (start * -1)
            }
        } else {
            start = Math.floor(start)
            if(start >= 0) {
                start = start
            } else {
                start = this.length - (start * -1)
            }
        }
    } else if(arguments.length === 0){
        return result
    } else if(typeof start !== 'boolean'){
        start = 0
    } else {
        start = Math.floor(start)
    }
        //deleteIndex
    if(typeof deleteIndex === 'number') {
        if(Number.isInteger(deleteIndex)) {
            if(deleteIndex >= 0) {
                deleteIndex = deleteIndex
            } else {
                deleteIndex = 0
            }
        } else {
            deleteIndex = Math.floor(deleteIndex)
            if(deleteIndex >= 0) {
                deleteIndex = deleteIndex
            } else {
                deleteIndex = 0
            }
        }
    }  else if(deleteIndex === undefined) {
            if(arguments.length > 1) {
                deleteIndex = 0
            } else {
                deleteIndex = this.length
            }
    } else if(typeof deleteIndex !== 'boolean') {
        deleteIndex = 0
    } else {
        deleteIndex = Math.floor(deleteIndex)
    }

    // Action
    for(var i = 0; i < start && i < this.length; i++){
        auxiliarMurray.push(this[i])
        delete this[i]
    }
    if(start < 0) {
        for(var i = 0; i < this.length; i++) {
            result.push(this[i])
            delete this[i]
        }
    } else {
        for(var i = start; i < start + deleteIndex && i < this.length; i++) {
            result.push(this[i])
            delete this[i]
        }
    }
    for(var i = 2; i < arguments.length; i++) {
        auxiliarMurray.push(arguments[i])
    }
    if(start >= 0) {
        for(var i = start + deleteIndex; i < this.length; i++) {
            auxiliarMurray.push(this[i])
            delete this[i]
        }
    }
    this.length = 0
    for(var i = 0; i < auxiliarMurray.length; i++) {
        this.push(auxiliarMurray[i])
    }
    return result
}

Murray.prototype.reduce = function() {
    if(!(arguments[0] instanceof Function)) {
        throw new TypeError(arguments[0] + ' is not a function')
    }
    var initialValue = arguments[1] || 0
    var result = initialValue
    var expression = arguments[0]
    for(var i = 0; i < this.length; i++) {
        result = expression(result, this[i], i, this)
    }
    return result
}

Murray.prototype.every = function() {
    if(!(arguments[0] instanceof Function)) {
        throw new TypeError(arguments[0] + ' is not a function')
    }
    if(this.length === 0) {
        return true
    }
    var length = this.length
    var expression = arguments[0]
    
    if(arguments.length === 2) {
        expression = expression.bind(arguments[1])
    }
    for(var i = 0; i < length && i < this.length; i++) {
        if(!(expression(this[i], i, this))) {
            return false
        }
    }
    return true
}