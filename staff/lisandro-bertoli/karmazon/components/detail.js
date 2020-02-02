'use strict';

function Detail(props) {
    var container = document.createElement('section');

    Component.call(this, container);

    container.classList.add('details');

    container.innerHTML = '<div class="details__left">'
        .concat('<a class="details__exit" href="#">Back to results</a>')
        .concat('<h2 class="details__car-name">' + props.product.name + '</h2>')
        .concat('<div class="details__img-container">')
        .concat('<img class="details__img" src=' + props.product.image + ' alt=""></div></div>')
        .concat('<div class="details__rigtht"><h2>Car specs</h2>')
        .concat('<ul class="details__container">')
        .concat('<li class="details__detail year">' + props.product.year + '</li>')
        .concat('<li class="details__detail color">' + props.product.color + '</li>')
        .concat('<li class="details__detail maker">' + props.product.maker + '</li>')
        .concat('<li class="details__detail collection">' + props.product.collection + '</li>')
        .concat('<li class="details__detail style">' + props.product.style + '</li>')
        .concat('<li class="details__detail description">' + props.product.description + '</li>')
        .concat('<li class="details__detail price">' + props.product.price + '</li>')
        .concat('</ul ></div >');

    var exitLink = container.querySelector('.details__exit');

    exitLink.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('back to results');
        props.backToResults();
    });

}

Detail.prototype = Object.create(Component.prototype);
Detail.prototype.constructor = Detail;
