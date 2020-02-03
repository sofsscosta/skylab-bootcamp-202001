"use strict";

console.log("DEMO join");

var a = ["t", "e", "s", "t"];
console.log("it", a);
console.log('should returns a new string by concatenating all of the elements ==>', join(a));

var a = ["I", "am", "a", "software", "architecture"];
console.log("it", a);
console.log('should returns a new string by concatenating and add the separator " " ==>', join(a, " "));

var a = ["join", "demo", "js"];
console.log("it", a);
console.log('should returns a new string by concatenating and add the separator "." ==>', join(a, "."));