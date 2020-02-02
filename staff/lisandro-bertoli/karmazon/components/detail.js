'use strict';

function Detail(props) {
    var container = document.createElement('section');

    Component.call(this, container);

    container.classList.add('details');

    container.innerHTML = '<div class="details__intro">'
        .concat('<a class="details__exit" href="#"> << Back to results</a>')
        .concat('<h2 class="details__car-name">' + props.product.name + '</h2>')
        .concat('<div class="details__img-container">')
        .concat('<img class="details__img" src=' + props.product.image + ' alt=""></div></div>')
        .concat('<div class="details__main"><h2>Car specs</h2>')
        .concat('<ul class="details__container">')
        .concat('<li class="details__detail"><div class="year"><h5>Year</h5><p>' + props.product.year + '</p></div></li>')
        .concat('<li class="details__detail color maker"><div class="color"><h5>COLOR</h5><p>' + props.product.color + '</p></div>')
        .concat('<div class="maker"><h5>MAKER</h5><p>' + props.product.maker + '</p></div></li>')
        .concat('<li class="details__detail collection"><h5>Collection</h5><p>' + props.product.collection + '</p></li>')
        .concat('<li class="details__detail style"><h5>STYLE</h5><p>' + props.product.style + '</p></li>')
        .concat('<li class="details__detail description"><h5>Description</h5>' + props.product.description + '</li>')
        .concat('</ul ></div >');

    var exitLink = container.querySelector('.details__exit');

    exitLink.addEventListener('click', function (event) {
        event.preventDefault();
        props.backToResults();
    });

}

Detail.prototype = Object.create(Component.prototype);
Detail.prototype.constructor = Detail;
