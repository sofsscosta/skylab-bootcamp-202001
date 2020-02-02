'use strict';

function Results(props) {

    var list = document.createElement('ul');
    Interactive.call(this, list)
    
    list.classList.add('results');

    props.results.forEach(function (result) {
        var _item = new Item(result, props.toggleDetails)
        list.append(_item.container);
    });
}

Results.prototype = Object.create(Interactive.prototype);
Results.prototype.constructor = Results;