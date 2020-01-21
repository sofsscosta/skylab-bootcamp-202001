'use strict'
var a = [1, 2, 3, 4];

function isarray() {
    if (a.__proto__.constructor.name === "Array") return true;
    else return false;
}