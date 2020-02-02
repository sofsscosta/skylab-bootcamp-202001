'use strict';

function Item(props) {
    var item = document.createElement('li');

    Component.call(this, item);

    item.classList.add('item');

    item.innerHTML = '<a href="#">'
        .concat('<img class="item__thumbnail"src=' + props.details.thumbnail + ' alt=""></a>')
        .concat('<div class="item__info-wrapper">')
        .concat('<h3 class="item__name">' + props.details.name + '</h3>')
        .concat('<span class="item__price">' + props.details.price + '</span></div>');

    item.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(props.details.id)
        props.onToDetail(props.details.id);
    });
}

Item.prototype = Object.create(Component.prototype);
Item.prototype.constructor = Item;



