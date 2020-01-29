'use strict'

function createSearch(selector, callback) {
    var searchForm = document.querySelector(selector);

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        callback(query);
    });
    return searchForm;
}