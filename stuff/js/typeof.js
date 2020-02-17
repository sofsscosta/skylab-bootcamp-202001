'use strict';

if (typeof pepito === 'undefined') throw new Error('...')
//if (pepito === undefined) throw new Error('...')

// Uncaught Error: ...
//    at <anonymous>:3:42

// 2

'use strict';

//if (typeof pepito === 'undefined') throw new Error('...')
if (pepito === undefined) throw new Error('...')

// Uncaught ReferenceError: pepito is not defined
//    at <anonymous>:4:1

// 3

'use strict';

if (hello === undefined)
//if (typeof hello === 'undefined')
    (function() {
        hello = function(name) { console.log('hello, ' + name) };
    })();

hello('Pepito')

// Uncaught ReferenceError: hello is not defined
//    at <anonymous>:4:1

// 4

if (typeof hello === 'undefined')
//if (hello === undefined)
    (function() {
        hello = function(name) { console.log('hello, ' + name) };
    })();

hello('Pepito')

// hello, Pepito