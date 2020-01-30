'use strict';

function Search(props) {
    var search = document.createElement('form');
    search.classList.add('search');

    search.innerHTML += '<h2>' + props.title + '</h2>'
        .concat('<input type="text" name="query" placeholder="Type here to search on ' + props.title + '>')
        .concat('<button type="submit">Search</button>')

    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        props.onSubmit(query);
    });
    
    return search;
}