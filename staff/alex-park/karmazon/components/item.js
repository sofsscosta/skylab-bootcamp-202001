'use strict';

function Item(props) {
    var item = document.createElement('div');

    Component.call(this, item);

    item.classList.add('item');

    item.innerHTML = '<h2>' + props.name + '</h2>'
        .concat('<img src="' + props.thumbnail + '">')
        .concat('<span>Price: ' + props.price + '</span>');

    item.querySelector('img').addEventListener('click', function() {
        
        retrieveVehicle(props.id, function (details) {
            var detailedCar = new Details({
                id: details.id,
                name: details.name,
                image: details.image,
                color: details.color,
                year: details.year,
                maker: details.maker,
                collection: details.collection,
                style: details.style,
                description: details.description,
                price: details.price
            });

            document.querySelector('.results').replaceWith(detailedCar.container);
        })

    })
}

Item.prototype = Object.create(Component.prototype);
Item.prototype.constructor = Item;