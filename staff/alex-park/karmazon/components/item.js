'use strict';

function Item(result, onClick) {
    var item = document.createElement('div');

    Component.call(this, item);

    item.classList.add('item');

    item.innerHTML = '<h2>' + result.name + '</h2>'
        .concat('<img src="' + result.thumbnail + '">')
        .concat('<span>Price: ' + result.price + '$</span>');

    item.querySelector('img').addEventListener('click', function() {
        var id = result.id;
        
        onClick(id);

    })
}

Item.prototype = Object.create(Component.prototype);
Item.prototype.constructor = Item;