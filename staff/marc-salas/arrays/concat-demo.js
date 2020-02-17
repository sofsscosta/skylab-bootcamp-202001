(function () {
    'use strict';

    console.log("concat demo");

    var a = [1, 2, 3];
    var b = [4, 5, 6];

    (function () {
        var c = [];
        console.log("it", a, b, c);
        c = concat(a, b)
        console.log("should add the 2 arrays on c", c);
    })();

    (function () {
        var c = []
        console.log("it", c);
        c = concat(a, b, 5)
        console.log("should add the 2 arrays and value 5 on c", c);
    })();

    (function () {
        var c = []
        console.log("it", c);
        c = concat(a, b, 5, "Hello World")
        console.log("should add the 2 arrays, the value 5 and te string on c", c);
    })();

})();