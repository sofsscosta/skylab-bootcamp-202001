'use strict';

function Results(props) {
    var list = document.createElement('ul');
    list.classList.add('results');

    props.results.forEach(function (result) {

        var _item = new Item(result, props.onClick);

        list.append(_item);
    });

    return list;
}
