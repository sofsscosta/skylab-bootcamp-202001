'use strict';

function Results(props) {
    var list = document.createElement('ul');
    Component.call(this, list);
    list.classList.add('results');

    props.results.forEach(function (result) {

       var _item = new Item(result, props.onClick)

        list.append(_item.container);
    });
    
}
Results.prototype = Object.create(Component.prototype);
Results.prototype.constructor = Results;


