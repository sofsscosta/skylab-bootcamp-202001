"use strict";

function Detail(props){

    var detail = document.createElement("section");

    Component.call(this, detail);

    detail.classList.add("detail");

    detail.innerHTML = "<h2>" + props.name + "</h2>"
    .concat("<img src = " + props.image + "> </br>")
    .concat("<span> Year: " + props.year + "</span> </br>")
    .concat("<span> Color: " + props.color + "</span> </br>")
    .concat("<span> Maker: " + props.maker + "</span> </br>")
    .concat("<span> Collection: " + props.collection + "</span> </br>")
    .concat("<span> Style: " + props.style + "</span> </br>")
    .concat("<p> Description: " + props.description + "</p>")
    .concat("<span> Price : " + props.price + "</span> € </br></br>")
    .concat("<button>GO BACK</button>")
    
    
}

Detail.prototype = Object.create(Component.prototype);
Detail.prototype.constructor = Detail;
