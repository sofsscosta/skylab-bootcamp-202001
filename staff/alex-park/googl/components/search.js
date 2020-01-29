'use strict';

function createSearch(idClass, callback) {
    var search = document.querySelector('.' + idClass);

    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        callback(query);
    });

    search.toggle = function() {
        this.classList.toggle('search--hide');
    };
    
    return search;
}