'use strict';

function createSearch(selector, props) {
    var search = document.querySelector(selector);

    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        props.onSubmit(query);
    });

    search.toggle = function() {
        this.classList.toggle('search--hide');
    };

    return search;
}