'use strict'
function Details (detailInfo) {

    var details = document.createElement ('div');

    Component.call(this, details);
 
    details.classList.add('details');

    details.innerHTML = '<button class="details__button">BACK</button>'
        .concat('<div class="details__title-img"><h2>' + detailInfo.id +': '+detailInfo.name+'</h2>')
        .concat('<img src="' + detailInfo.image + '"></div>')
        .concat('<div class="details__content"><p class ="details__year"><b>YEAR: </b>' + detailInfo.year + '</p>')
        .concat('<p class ="details__content-color"><b>COLOR:</b> ' + detailInfo.color.toProperCase() + '</p>')
        .concat('<p class ="details__content-cmaker><b>MAKER: </b>' + detailInfo.maker.toProperCase() + '</p>')
        .concat('<p class ="details__content-ccollection><b>COLLECTION: </b>' + detailInfo.collection.toProperCase() + '</p>')
        .concat('<p class ="details__content-cstyle><b>STYLE: </b>' + detailInfo.style.toProperCase() + '</p>')
        .concat('<p class ="details__content-cdescription><b>DESCRIPTION: </b>' + detailInfo.description + '<p></div>')
        .concat('<span class ="details__price"><b>PRICE: $ </b>' + detailInfo.price + ' </span>');   

}

Details.prototype = Object.create(Component.prototype);
Details.prototype.constructor = Details;