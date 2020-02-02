'use strict'
function Details (detailInfo) {

    var details = document.createElement ('div');

    Component.call(this, details);
 
    details.classList.add('details');

    details.innerHTML = '<button class="details__button">BACK</button>'
        .concat('<h2>' + detailInfo.id +': '+detailInfo.name+'</h2>')
        .concat('<img src="' + detailInfo.image + '">')
        .concat('<div class="details__content"><p class ="details__year">YEAR: ' + detailInfo.year + '</p>')
        .concat('<p class ="details__content-color">COLOR: ' + detailInfo.color.toProperCase() + '</p>')
        .concat('<p class ="details__content-cmaker>MAKER: ' + detailInfo.maker.toProperCase() + '</p>')
        .concat('<p class ="details__content-ccollection>COLLECTION: ' + detailInfo.collection.toProperCase() + '</p>')
        .concat('<p class ="details__content-cstyle>STYLE: ' + detailInfo.style.toProperCase() + '</p>')
        .concat('<p class ="details__content-cdescription>DESCRIPTION: ' + detailInfo.description + '<p>')
        .concat('<span>PRICE: $ ' + detailInfo.price + ' </span></div>');   

}

Details.prototype = Object.create(Component.prototype);
Details.prototype.constructor = Details;