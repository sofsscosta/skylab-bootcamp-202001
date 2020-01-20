var a = function() { console.log('evalua a'); return 0 }
var b = function() { console.log('evalua b'); return 1 }

var c = a() || b();
// var c = a() && b();

console.log(c);