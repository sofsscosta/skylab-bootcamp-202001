'use strict';

function Search(props) {
    var search = document.createElement('form');
    search.classList.add('search');

    Interactive.call(this, search)

    search.innerHTML += '<h2>' + props.title + '</h2>'
        .concat('<input class="input" type="text" name="query" placeholder="criteria">')
        .concat('<button class="submit" type="submit">Search</button>')

    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        props.onSubmit(query);
    });

    return search;
}

Search.prototype = Object.create(Interactive)
Search.prototype.constructor = Search

Search.prototype.__locateFeedbackInContainer__ = function (feedback) {
    this.container.append(feedback.container);
};