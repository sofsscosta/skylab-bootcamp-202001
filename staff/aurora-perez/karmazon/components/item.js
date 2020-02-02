'use strict';

function Item(results, onClick) {
    var item = document.createElement('div');

    Component.call(this, item);

    item.classList.add('item');

    item.innerHTML = '<h2>' + results.name + '</h2>'
        .concat('<img src="' + results.thumbnail + '">')
        .concat('<span>Price: ' + results.price + ' pepitos </span>');

    item.querySelector('img').addEventListener('click', function() {
        var id = results.id;
        
        onClick(id)

    }); 
};

Item.prototype = Object.create(Component.prototype);
Item.prototype.constructor = Item;