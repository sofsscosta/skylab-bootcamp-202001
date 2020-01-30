'use strict'

function createSearch(prop) {
    var search = document.querySelector(selector);

    // search.onsubmit = function (event) {
    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        prop.onSubmit(query);
        // };
    });

    return search;
}