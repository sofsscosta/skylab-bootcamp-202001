'use strict';

function Results(props) {
    var list = document.createElement('ul');
    list.classList.add('results');

    props.results.forEach(function(result) {

        var item = document.createElement('li');

        var _item = new Item({
            result: result,
            onClick: function(id) {
                props.onClick(id);
            }
        });
        item.append(_item)
        list.append(item);
    });
    return list;
}