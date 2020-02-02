'use strict';

function Results(props) {
    var list = document.createElement('ul');
    list.classList.add('results');

    props.results.forEach(function (result) {
        var item = new Item(result)

        list.append(item.container);
    });

    return list;
}