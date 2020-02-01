'use strict'

function Details (detailInfo) {
    var detailInfo = document.createElement ('div');

    Component.call(this, detailInfo);

    detailInfo.classList.add('details');

    detailInfo.innerHTML = '<h2>' +detailInfo.id+': '+detailInfo.name+'</h2>'
        .concat('<img src="' +detailInfo.image+ '">')
        .concat('<p>Year: ' + detailInfo.year + '</p>')
        .concat('<p>Color: ' + detailInfo.color + '</p>')
        .concat('<p>Maker: ' + detailInfo.maker + '</p>')
        .concat('<p>Collection: ' + detailInfo.collection + '</p>')
        .concat('<p>Style: ' + detailInfo.style + '</p>')
        .concat('<p>Description: ' + detailInfo.description + '<p>')
        .concat('<span>Price: ' + detailInfo.price + '</span>')
        .concat('<button>Back</button>');
 //result.onImageClick(id, name, image, year, color, maker, collection, style, description, price);
}

Details.prototype = Object.create(Component.prototype);
Details.prototype.constructor = Details;