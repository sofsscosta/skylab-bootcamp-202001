"use strict";

function Detail(props){

    var detail = document.createElement("section");

    Component.call(this, detail);

    detail.classList.add("detail-info");

    detail.innerHTML = "<h2 class = detail-info__title>" + props.name + "</h2>"
    .concat("<img src = " + props.image + " class = detail-info__image> </br>")
    .concat("<p class = detail-info__year> Year: " + props.year + "</p> </br>")
    .concat("<p class = detail-info__color> Color: " + props.color + "</p> </br>")
    .concat("<p class = detail-info__maker> Maker: " + props.maker + "</p> </br>")
    .concat("<p class = detail-info__collection> Collection: " + props.collection + "</p> </br>")
    .concat("<p class = detail-info__style> Style: " + props.style + "</p> </br>")
    .concat("<p class = detail-info__description> Description: " + props.description + "</p>")
    .concat("<p class = detail-info__price> Price : " + props.price + " €" + "</p> </br></br>")
    .concat("<button class = detail-info__button>GO BACK</button>")
    
}

Detail.prototype = Object.create(Component.prototype);
Detail.prototype.constructor = Detail;
