'use strict'

function Murray() {
  var _arguments = arguments;

  var initializeWithLength = (function () {
    if (_arguments.length === 1 && typeof _arguments[0] === 'number') {
      if (Number.isInteger(_arguments[0]))
        return true
      else 
        throw new RangeError('Invalid murray length')
    }
  })();

  this.length = initializeWithLength ? arguments[0] : arguments.length;

  if(!initializeWithLength)
    for (var i = 0; i < arguments.length; i++) this[i] = arguments[i]
}