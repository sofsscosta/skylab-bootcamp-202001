'use strict'

function Details (detailInfo) {
    var details = document.createElement ('div');

    Component.call(this, details);

    details.classList.add('details');

    details.innerHTML = '<h2>' + detailInfo.id +': '+detailInfo.name+'</h2>'
        .concat('<img src="' + detailInfo.image + '">')
        .concat('<div class="content"><p><b>YEAR</b>: ' + detailInfo.year + '</p>')
        .concat('<p><b>COLOR</b>: ' + detailInfo.color.toProperCase() + '</p>')
        .concat('<p><b>MAKER</b>: ' + detailInfo.maker.toProperCase() + '</p>')
        .concat('<p><b>COLLECTION</b>: ' + detailInfo.collection.toProperCase() + '</p>')
        .concat('<p><b>STYLE</b>: ' + detailInfo.style.toProperCase() + '</p>')
        .concat('<p><b>DESCRIPTION</b>: ' + detailInfo.description + '</p></div>')
        .concat('<span>PRICE: ' + detailInfo.price + '$</span>')
        .concat('<button>BACK</button>');
 //result.onImageClick(id, name, image, year, color, maker, collection, style, description, price);
}

Details.prototype = Object.create(Component.prototype);
Details.prototype.constructor = Details;