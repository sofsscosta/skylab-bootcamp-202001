'use strict';

function Detail(props) {
    var detail = document.createElement('li');

    Component.call(this, detail);

    var name = document.createElement('h3');
    name.innerText = props.vehicle.name + ' (' + props.vehicle.year + ')';
    detail.append(name);

    var image = document.createElement('img');
    image.src = props.vehicle.image;
    detail.append(image);

    var price = document.createElement('span');
    price.innerText = props.vehicle.price + ' €';
    detail.append(price);

    var color = document.createElement('p');
    color.innerText = props.vehicle.color;
    detail.append(color);

    var maker = document.createElement('p');
    maker.innerText = props.vehicle.maker;
    detail.append(maker);

    var collection = document.createElement('p');
    collection.innerText = props.vehicle.collection;
    detail.append(collection);

    var style = document.createElement('p');
    var link = document.createElement('a');
    link.innerText = props.style.name;
    link.href = props.style.url;
    style.append(link);
    var image = document.createElement('img');
    image.src = props.style.image;
    style.append(image);
    detail.append(style);

    var description = document.createElement('p');
    description.innerText = props.vehicle.description;
    detail.append(description);

    var link = document.createElement('a');
    link.innerText = props.vehicle.url;
    link.href = props.vehicle.url;
    detail.append(link);
}

Detail.extend(Component);