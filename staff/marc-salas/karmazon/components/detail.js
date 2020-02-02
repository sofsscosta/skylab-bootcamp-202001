"use strict";

function Detail(results) {
    var detail = document.createElement("article");
    Component.call(this, detail);
    detail.classList.add("detail");
    var title = document.createElement("h3");
    title.innerText += results.name + ' - Id#' + results.id;
    detail.append(title);
    
    var figure = document.createElement('figure');
    var image = document.createElement('img');
    image.src = results.image;
    figure.append(image);
    detail.append(figure);
    
    var year = document.createElement("span");
    year.innerText += 'Year: ' + results.year;
    detail.append(year);
    
    var maker = document.createElement("span");
    maker.innerText += 'Maker: ' + results.maker;
    detail.append(maker);
    
    var collection = document.createElement("span");
    collection.innerText += 'Collection: ' + results.collection;
    detail.append(collection);
    
    var style = document.createElement("span");
    style.innerText += 'Style: ' + results.style;
    detail.append(style);
    var description = document.createElement('p');
    description.innerText += 'Description: ' + results.description;
    detail.append(description);
    var link = document.createElement("a");
    link.href = results.url;
    link.innerText += 'Link to URL: ' + results.url;
    detail.append(link);


}

Detail.prototype = Object.create(Component.prototype);
Detail.prototype.constructor = Detail;