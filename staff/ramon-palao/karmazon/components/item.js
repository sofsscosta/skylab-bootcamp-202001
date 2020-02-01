"use strict";

function Item(prop){
    var item = document.createElement("article");

    Component.call(this, item);

    var list = document.createElement("ul");
    list.classList.add("list");

    var itemList = document.createElement("li");

    var name = document.createElement("h3");
    name.innerText = prop.name;

    var image = document.createElement("figure");
    var imagePhoto = document.createElement("img");
    imagePhoto.src = prop.thumbnail;

    var price = document.createElement("span");
    price.innerText = prop.price + " €";

    image.append(imagePhoto);

    itemList.append(name, image, price);
    list.append(itemList);
    item.append(list);

    var id = prop.id;

    image.addEventListener("click", function(event){
        event.preventDefault();

        retrieveVehicle(id, function(results){
            // console.log(itemResult);
            var _detail = new Detail(results);

            //var _list = querySelector("ul");

            itemList.replaceWith(_detail.container);

        });

    });
    
    return itemList;
}

Item.prototype = Object.create(Component.prototype);
Item.prototype.constructor = Item;