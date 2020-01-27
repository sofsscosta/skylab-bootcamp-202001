var counter = function(value) {
    return {
        up: function() {
            value++
        },

        value: function() {
            return value
            //return value === 3 || value === 4 || value === 14? value : 1000
        }
    }
}

// no BDD

var c = counter(0)
c.up(); c.up(); c.up()
console.assert(c.value() === 3, 'should count value be 3')

var c = counter(0)
c.up(); c.up(); c.up(); c.up()
console.assert(c.value() === 4, 'should count value be 4')

var c = counter(10)
c.up(); c.up(); c.up(); c.up()
console.assert(c.value() === 14, 'should count value be 14')

// BDD

for (var j = 0; j < 10; j++) {
    var n = Math.floor(Math.random() * 1000) + 1
    var c = counter(n);
    var increments = Math.floor(Math.random() * 100) + 1
    for (var i = 0; i < increments; i++) c.up()
    var v = c.value()
    console.log('test conditions:', 'n =', n, 'increments =', increments, 'v =', v)
    console.assert(v - n === increments, 'should have incremented by ' + increments)
}

// test conditions: n = 872 increments = 65 v = 937
// test conditions: n = 876 increments = 72 v = 948
// test conditions: n = 300 increments = 4 v = 304
// test conditions: n = 36 increments = 65 v = 101
// test conditions: n = 108 increments = 31 v = 139
// test conditions: n = 457 increments = 75 v = 532
// test conditions: n = 239 increments = 21 v = 260
// test conditions: n = 201 increments = 79 v = 280
// test conditions: n = 243 increments = 41 v = 284
// test conditions: n = 264 increments = 42 v = 306