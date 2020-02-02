'use strict';

function Results(props) {
    var list = document.createElement('ul');
    
    Component.call (this, list);

    list.classList.add('results');

    props.results.forEach(function (results) {
        var item = new Item(results, props.onClick);
        
        list.appendChild(item.container);
    });

}

Results.prototype = Object.create(Component.prototype);
Results.prototype.constructor = Results;