"use strict";

function Detail(results, callback) {
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
    year.classList.add('year');
    year.innerText = results.year;
    detail.append(year);
    
    var maker = document.createElement("span");
    maker.classList.add('maker');
    maker.innerText = results.maker;
    detail.append(maker);
    
    var collection = document.createElement("span");
    collection.classList.add('collection');
    collection.innerText = results.collection;
    detail.append(collection);
    
    var style = document.createElement("span");
    style.classList.add('style');
    style.innerText = results.style;
    detail.append(style);
    
    var description = document.createElement('p');
    description.innerText = results.description;
    detail.append(description);

    var link = document.createElement("a");
    link.href = results.url;
    link.innerText = results.url;
    detail.append(link);
    
    var back = document.createElement('button');
    back.innerText = "X";
    detail.append(back);

    back.addEventListener('click', function(event){
        event.preventDefault();

        callback();
    })

}

Detail.prototype = Object.create(Component.prototype);
Detail.prototype.constructor = Detail;