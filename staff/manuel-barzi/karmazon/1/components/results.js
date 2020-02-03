'use strict';

function Results(props) {
    var list = document.createElement('ul');

    Component.call(this, list);

    list.classList.add('results');

    props.results.forEach(function (item) {
        var item = new Item({ 
            item: item,
        
            onClick: props.onItemClick
        });
        
        list.append(item.container);
    });
}

Results.extend(Component);