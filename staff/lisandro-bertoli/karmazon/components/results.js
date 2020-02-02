'use strict';

function Results(props) {
    var list = document.createElement('ul');

    Component.call(this, list);

    list.classList.add('results');

    props.results.forEach(function (result) {
        var item = new Item({ details: result, onToItem: props.onToItem });

        list.append(item.container);
    });

}

Results.prototype = Object.create(Component.prototype);
Results.prototype.constructor = Results;