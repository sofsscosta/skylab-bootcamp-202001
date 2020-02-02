'use strict';

function Detail(id) {
    var item = document.createElement('div')
    Component.call(this, item);
        
    item.classList.add('detail')

    item.innerHTML = "<h2" + id.name + "</h2><br>"
    .concat("<img src =" + id.image +"><br>")
    .concat("<span>Year: " + id.year + "</span><br>")
    .concat("<span>Color: " + id.color + "</span><br>")
    .concat("<span>Marker: " + id.marker + "</span><br>")
    .concat("<span>Collection: " + id.collection + "</span><br>")
    .concat("<span>Style: " + id.style + "</span><br>")
    .concat("<p>Description: " + id.description + "</p><br>")
    .concat("<span>Price: " + id.price + " € </span><br><br>")
  
}

Detail.prototype = Object.create(Component.prototype);
Detail.prototype.constructor = Detail;
