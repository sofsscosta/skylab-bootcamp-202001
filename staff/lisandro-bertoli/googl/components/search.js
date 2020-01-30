'use strict';

function Search(props) {
    var search = document.createElement('form');
    search.classList.add('search');

    search.innerHTML = '<h2>' + props.title + '</h2>'
        .concat(' <input class="search__input" type="text" name="query">')
        .concat('<button class="button" type="submit">Search</button>')
        .concat('<button class="button button__logout button--danger">Logout</button>');

    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        props.onSubmit(query);

    });

    var logoutButton = search.querySelector('.button.button__logout');

    logoutButton.addEventListener('click', function (event) {
        event.preventDefault();

        props.onLogout();
    });

    return search;
}