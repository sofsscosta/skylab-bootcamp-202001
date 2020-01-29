"use strict";

function call(url, callback) {
  if(url instanceof Array) throw new TypeError(query.constructor.name + " is not a string")
  if(typeof url !== 'string') throw new TypeError(query + " is not a string")

  if(callback instanceof Array) throw new TypeError(callback.constructor.name + " is not a function")
  if(!(typeof callback === 'function')) throw new TypeError(callback + " is not a function")

  
  var xhr = new XMLHttpRequest
  xhr.open('GET', url)

  xhr.onreadystatechange = function() {
    if (this.readyState === 4) {

      callback({
        content: this.responseText,
        status: this.status
      })

    }
  }
  
  xhr.send()
}