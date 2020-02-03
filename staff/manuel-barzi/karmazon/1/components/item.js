'use strict';

function Item(props) {
    var item = document.createElement('li');

    Component.call(this, item);

    item.addEventListener('click', function() {
        props.onClick(props.item.id);
    });

    var name = document.createElement('h3');
    name.innerText = props.item.name;
    item.append(name);

    var image = document.createElement('img');
    image.src = props.item.thumbnail;
    item.append(image);

    var price = document.createElement('span');
    price.innerText = props.item.price;
    item.append(price);
}

Item.extend(Component);