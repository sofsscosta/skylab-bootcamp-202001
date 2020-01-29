'use strict';

function createSearch(idClass, onSubmit, onLogout) {
    var search = document.querySelector('.' + idClass);


    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        onSubmit(query);

    });

    search.toggle = function () {
        this.classList.toggle('search--hide');
    }

    var logoutButton = document.querySelector('.button.button__logout');

    logoutButton.addEventListener('click', function (event) {
        event.preventDefault();

        onLogout();
    });

    return search;
}