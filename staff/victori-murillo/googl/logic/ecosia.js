function ecosia(query, callback) {
  if(query instanceof Array) throw new TypeError(query.constructor.name + " is not a string")
  if(typeof query !== 'string') throw new TypeError(query + " is not a string")

  if(callback instanceof Array) throw new TypeError(callback.constructor.name + " is not a function")
  if(!(typeof callback === 'function')) throw new TypeError(callback + " is not a function")

  search('https://www.ecosia.org/search?q=' + query, 'div.result.js-result', '.result-title', '.result-title', '.result-snippet', callback);
}