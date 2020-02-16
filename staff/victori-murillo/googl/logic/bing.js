function bing(query, callback) {
  if(query instanceof Array) throw new TypeError(query.constructor.name + " is not a string")
  if(typeof query !== 'string') throw new TypeError(query + " is not a string")

  if(callback instanceof Array) throw new TypeError(callback.constructor.name + " is not a function")
  if(!(typeof callback === 'function')) throw new TypeError(callback + " is not a function")

  search('https://www.bing.com/search?q=' + query, 'li.b_algo', 'h2>a', 'h2>a', 'p', callback);
}