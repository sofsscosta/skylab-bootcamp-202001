'use strict';

function Search(props) {
    var search = document.createElement('form');
    search.classList.add('search');

    search.innerHTML = ' <input type="text" name="query">'
        .concat(' <button type="submit">Search</button>')

    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        props.onSubmit(query);
    });

    return search;
}