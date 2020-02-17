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


Murray.prototype.map = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    var result = [];
    for(var i=0; i<this.length; i++){
        result[i] = callback(this[i]);
    }
    return result;
}

Murray.prototype.pop = function () {
    if(!(this instanceof Murray))throw new TypeError (this + ' is not Array');
    var lastPosition;
    if (this.length===0)return undefined;
        else lastPosition = this[this.length-1];
    
    delete this[this.length-1];
    this.length = this.length-1;
    return lastPosition;
}

Murray.prototype.shift = function(){
    if(!(this instanceof Murray))throw new TypeError (this + ' is not Array');
    var firstPosition = this[0];
    for(var i=1; i<this.length; i++){
        this[i-1] = this[i];
    }
    this.length = this.length-1; 
    delete this[this.length];  
    return firstPosition;
}

Murray.prototype.unshift = function(){
    this.length = this.length + arguments.length;
    for(var i=this.length-1 - arguments.length; i>=0; i--){
        this[i+arguments.length] = this[i];
    }
    for(var j=0; j<arguments.length; j++){
        this[j] = arguments[j];
    }
    return this.length;
};

Murray.prototype.every = function(callback){
    for(var i=0; i<this.length; i++){
        if(callback(this[i])){
            return true;
        }
    }
    return false;
}

Murray.prototype.filter = function(callback){
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    var newArray = [];
    for(var i=0; i<this.length; i++){
        if(callback(this[i])){
            newArray[newArray.length] = this[i];
        }
    }
    return newArray;
}

Murray.prototype.slice = function(initialIndex,lastIndex){
    if((typeof initialIndex !== 'number')) throw new TypeError(initialIndex + ' is not a number');
    if((typeof lastIndex !== 'number' && typeof lastIndex !== 'undefined')) throw new TypeError(lastIndex + ' is not a number');
    var newArray = [];
    if(!lastIndex){
        lastIndex = this.length;
    }
    if(initialIndex <= 0){
        initialIndex += this.length;
    }

    if(lastIndex <= 0){
        lastIndex += this.length;
    }

    for(var i = initialIndex; i<lastIndex; i++){
        newArray[newArray.length] = this[i];
    }
    return newArray;
}

Murray.prototype.lastIndexOf = function(value){
    var index;
    for(var i=this.length-1; i>0; i--){
        if(this[i]===value){
            return i;
        }
    }
}

Murray.prototype.find = function(callback){
    
    for(var i=0; i<this.length; i++){
        if(callback(this[i])){
            return this[i];
        }
    }
    return 'undefined'; 
    
}

Murray.prototype.concat = function(){
    var result = new Murray ();
    for(var i=0; i<this.length; i++){
        result[i]=this[i];
        ++result.length;
    }
    for(var i =0; i<arguments.length; i++){
        for(var j = 0 ; j < arguments[i].length;j++){
            result[result.length]=arguments[i][j];
            ++result.length;  
        }        
    }
    return result; 
}

Murray.prototype.findIndex = function(callback){
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    for(var i=0; i<this.length; i++){
        if(this[i] === callback(this[i])){
            return i;
        }
    }
}

Murray.prototype.reduce = function(callback,initialValue){
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    var accumulator = initialValue || 0;
    for(var i=0; i<this.length; i++){
        accumulator = callback(accumulator,this[i], i);
    }
    
    return accumulator;


    function callback(accumulator, currenValue, index){
        return accumulator + currenValue;
    }
}
