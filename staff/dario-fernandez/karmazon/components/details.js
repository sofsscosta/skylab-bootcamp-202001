'use strict'

function Details(response) {
    var details = document.createElement('article')
    details.classList.add('details')

    Component.call(this, details)

    details.innerHTML = 
        '<div class="details__main">'
            .concat('<h2 class="details__name">' + response.name + '</h2>')
            .concat('<img class="details__photo" src="' + response.image +'"></img>')
        .concat('</div>')
        .concat('<div class="details__features">')
            .concat('<span class="details__title-container">')
                .concat('<h3 class="details__features-title">Car specifications</h3>')
                .concat('<span class="details__close"><i class="fas fa-times-circle"></i></span>')
            .concat('</span>')
            .concat('<div class="details__features-list">')
                .concat('<p class="details__feature"><strong>Year:</strong> ' + response.year + '</p>')
                .concat('<p class="details__feature"><strong>Color:</strong> '+ response.color.capitalize() + '</p>')
                .concat('<p class="details__feature"><strong>Brand:</strong> ' + response.maker.capitalize() + '</p>')
                .concat('<p class="details__feature"><strong>Collection:</strong> ' + response.collection.capitalize() + '</p>')
                .concat('<p class="details__feature"><strong>Style:</strong> ' + response.style.capitalize() + '</p>')
                .concat('<p class="details__description"><strong>Description:</strong> ' + response.description + '</p>')
                .concat('<p class="details__feature"><strong>Price:</strong> ' + response.price + '$</p>')
                .concat('<a class="details__link" href="' + response.url + '" target="_blank">Go to the official site</a>')
            .concat('</div>')
        .concat('</div>')
    

}

Details.prototype = Object.create(Component.prototype)
Details.prototype.constructor = Details