'use strict';

function Results(props) {
    var list = document.createElement('ul');
    list.classList.add('results');

    props.results.forEach(function (result) {
        var item = new Item({
            name: result.name,
            thumbnail: result.thumbnail,
            price: result.price,
            id: result.id
        });

        list.append(item.container);
    });

    return list;
}