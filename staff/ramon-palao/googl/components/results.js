"use strict"

function createResults(selector, results) {
    var list = document.querySelector(selector);

    list.innerHTML = '';

    results.forEach(function (result) {
        var item = document.createElement('li');

        var title = document.createElement('h3');
        title.innerText = result.title;

        var link = document.createElement('a');
        link.target = '_blank';
        link.href = result.link;

        link.append(title);

        item.append(link);

        if (result.rating) {
            var rating = document.createElement('span');
            rating.innerText = result.rating;

            item.append(rating);
        }

        var description = document.createElement('p');
        description.innerText = result.description;

        item.append(description);

        list.append(item);
    });
}