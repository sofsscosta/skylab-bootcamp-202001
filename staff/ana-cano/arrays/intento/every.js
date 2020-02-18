'use strict';
var arrayAges = [12, 15, 85, 96]

function every(age) {
    for (var i = 0; i < arrayAges.length; i++) {
        if (arrayAges[i] < 18) {
            return console.log("There are young people in this group")
        }
    }
}