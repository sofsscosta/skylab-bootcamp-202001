"use strict"

function Item(props) {
    var item = document.createElement('article');
    Component.call(this, item);
    item.classList.add('item');

    var name = document.createElement('h3');
    name.innerText = props.result.name;
    item.append(name);

    var figure = document.createElement('figure');
    var anchor = document.createElement('a');
    var image = document.createElement('img');
    image.src = props.result.thumbnail;
    anchor.append(image);
    figure.append(anchor);
    item.append(figure);

    var price = document.createElement('span');
    price.innerText += "price: " + props.result.price + "€";
    item.append(price);

    item.addEventListener("click", function(event) {
        event.preventDefault();
        
        props.onClick(props.result.id)
       
    })
    return item;
};

Item.prototype = Object.create(Component.prototype);
Item.prototype.constructor = Item;