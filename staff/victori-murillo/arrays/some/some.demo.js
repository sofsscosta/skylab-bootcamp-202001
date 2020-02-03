"use strict"

var a = [1, 2]
console.log("it", a);
console.log('should at least one number equal to 1 ==> true');
console.log(some(a, function(number) { return (number === 1) }))

var a = [1, 2, 3]
console.log("it", a);
console.log('should at least one number more than 4 ==> false');
console.log(some(a, function(number) { return (number > 4) }))

var a = ["code", "js", "array"]
console.log("it", a);
console.log('should at least one string equal to "array" ==> true');
console.log(some(a, function(string) { return (string === "code") }))