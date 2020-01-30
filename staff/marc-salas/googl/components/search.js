'use strict'

function createSearch(props) {
    var search = document.createElement('form');

    search.classList.add('selector');

    search.innerHTML += '<h2>' + props.title + '</h2>'
    .concat('<input type="text" name="query">')
    .concat('<button type="submit"></button>');


    // search.onsubmit = function (event) {
    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        props.onSubmit(query);
        // };
    });

    return search;
}