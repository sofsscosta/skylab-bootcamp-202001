'use strict'


const ages = [15, 48, 56, 72, 35, 45]

function findindex() {
    for (var i = 0; i < ages.length; i++) {
        if (ages[i] >= 15) {
            return i
        }
    }
}