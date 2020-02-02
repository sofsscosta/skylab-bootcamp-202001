'use strict';

function Results(props) {
    var list = document.createElement('ul');
    list.classList.add('results');

    props.results.forEach(function (result) {
        // TODO var item = new Item(...)
        var item = document.createElement('li');

        var name = document.createElement('h3');
        name.innerText = result.name;
        item.append(name);

        var image = document.createElement('img');
        image.src = result.thumbnail;
        item.append(image);

        var price = document.createElement('span');
        price.innerText = result.price;
        item.append(price);

        list.append(item);
    });

    return list;
}