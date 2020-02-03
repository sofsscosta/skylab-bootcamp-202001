"use strict";

function Detail(prop){
    var detail = document.createElement("section");
    Component.call(this, detail);
    detail.classList.add("detail");

    // var name = document.createElement("h2");
    // name.innerText = prop.data.name;
    // detail.append(name);
    // var photo = document.createElement("img");
    // photo.src = prop.image;
    // var year = document.createElement("span");
    // year.innerText = prop.year;
    // var color = document.createElement("span");
    // color.innerText = prop.color;
    // var maker = document.createElement("span");
    // maker.innerText = prop.maker;
    // var collection = document.createElement("span");
    // collection.innerText = prop.collection;
    // var style = document.createElement("span");
    // style.innerText = prop.style;
    // var description = document.createElement("p");
    // description.innerText = prop.description;
    // var price = document.createElement("span");
    // price.innerText = prop.price;

    // detail.append(name, photo, year, color, maker, collection, style, description, price);

    detail.innerHTML = "<h2>" + prop.name + "</h2>"
    .concat ("<img src = " + prop.image + "> <br>")
    .concat("<span>Year: " + prop.year + "</span><br>")
    .concat("<span>Color: " + prop.color + "</span><br>")
    .concat("<span>Maker: " + prop.maker + "</span><br>")
    .concat("<span>Collection: " + prop.collection + "</span><br>")
    .concat("<span>Style: " + prop.style + "</span><br>")
    .concat("<p>Description: " + prop.description + "</p><br>")
    .concat("<span>Price: " + prop.price + "€ </span>")
    .concat("<button>volver</button><br><br>");

    // var button = document.querySelector("button");
    // button.addEventListener("click", function(event){
    //     event.preventDefault();
    //     //detail.container.replaceWith(ul);
    //     props.onClick(props.detail.id);

    // })

    //return detail;
  
}

Detail.prototype = Object.create(Component.prototype);
Detail.prototype.constructor = Detail;