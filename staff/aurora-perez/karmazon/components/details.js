'use strict'
function Details (detailInfo) {

    var details = document.createElement ('div');

    Component.call(this, details);
 
    details.classList.add('details');

    details.innerHTML = '<h2>' + detailInfo.id +': '+detailInfo.name+'</h2>'
        .concat('<img src="' + detailInfo.image + '">')
        .concat('<p>YEAR: ' + detailInfo.year + '</p>')
        .concat('<p>COLOR: ' + detailInfo.color.toProperCase() + '</p>')
        .concat('<p>MAKER: ' + detailInfo.maker.toProperCase() + '</p>')
        .concat('<p>COLLECTION: ' + detailInfo.collection.toProperCase() + '</p>')
        .concat('<p>STYLE: ' + detailInfo.style.toProperCase() + '</p>')
        .concat('<p>DESCRIPTION: ' + detailInfo.description + '<p>')
        .concat('<span>PRICE: ' + detailInfo.price + ' pepitos </span>')
        .concat('<button>BACK</button>');
 //result.onImageClick(id, name, image, year, color, maker, collection, style, description, price);

}

Details.prototype = Object.create(Component.prototype);
Details.prototype.constructor = Details;