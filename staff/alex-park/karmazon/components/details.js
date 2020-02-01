'use strict'

function Details (props) {
    var details = document.createElement ('div');

    Component.call(this, details);

    details.classList.add('details');

    details.innerHTML = '<h2>' +props.id+': '+props.name+'</h2>'
        .concat('<img src="' +props.image+ '">')
        .concat('<p>Year: ' + props.year + '</p>')
        .concat('<p>Color: ' + props.color + '</p>')
        .concat('<p>Maker: ' + props.maker + '</p>')
        .concat('<p>Collection: ' + props.collection + '</p>')
        .concat('<p>Style: ' + props.style + '</p>')
        .concat('<p>Description: ' + props.description + '<p>')
        .concat('<span>Price: ' + props.price + '</span>')
        .concat('<button href=\"javascript:history.go(-1)\">Back</button>');

    // details.querySelector('button').addEventListener('click', function() {
        
    // })
 //result.onImageClick(id, name, image, year, color, maker, collection, style, description, price);
}

Details.prototype = Object.create(Component.prototype);
Details.prototype.constructor = Details;