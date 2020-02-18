'use strict';


console.log('DEMO filter');

function isOlder(element) {
    return element >= 18;
}
var filter = [12, 5, 8, 130, 44]
filter.filter(isOlder);

console.log("The filter returns the older people of 18 years old"; console.log(filter.filter(isOlder));