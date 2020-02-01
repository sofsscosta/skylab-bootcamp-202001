'use strict';

function Results(props) {
    Component.call(this, list);
    var list = document.createElement('ul');
    list.classList.add('results');

    props.results.forEach(function (element) {
        var item = new Item(element, props.onClick);

        list.append(item.container);
    });

}

Results.prototype = Object.create(Component.prototype);
Results.prototype.constructor = Results;