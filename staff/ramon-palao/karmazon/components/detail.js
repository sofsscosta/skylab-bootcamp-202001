"use strict";

function Detail(props){

    var detail = document.createElement("section");

    Component.call(this, detail);

    detail.classList.add("detail");

    detail.innerHTML += "<h2>" + props.name + "</h2>"
    .concat("<img src = " + props.image + ">")
    .concat("<span> Year: " + props.year + "</span>")
    .concat("<span> Color: " + props.color + "</span>")
    .concat("<span> Maker: " + props.maker + "</span>")
    .concat("<span> Collection: " + props.collection + "</span>")
    .concat("<span> Style: " + props.style + "</span>")
    .concat("<p> Description: " + props.description + "</p>")
    .concat("<span> Price : " + props.price + "</span>")
    
    
}

Detail.prototype = Object.create(Component.prototype);
Detail.prototype.constructor = Detail;
