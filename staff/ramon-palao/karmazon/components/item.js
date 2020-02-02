"use strict";

function Item(prop, onClick){
    var item = document.createElement("article");

    Component.call(this, item);

    var list = document.createElement("ul");
    list.classList.add("list");

    var itemList = document.createElement("li");
    itemList.classList.add("item-list")

    var name = document.createElement("h3");
    name.innerText = prop.name;
    name.classList.add("item-name");

    var image = document.createElement("figure");
    var imagePhoto = document.createElement("img");
    imagePhoto.src = prop.thumbnail;
    imagePhoto.classList.add("img-photo");

    var price = document.createElement("span");
    price.innerText = prop.price + " €";
    price.classList.add("item-price");

    image.append(imagePhoto);

    itemList.append(name, image, price);
    list.append(itemList);
    item.append(list);

    var id = prop.id;

    image.addEventListener("click", function(event){
        event.preventDefault();

        onClick(id);

    });
    
    return itemList;
}

Item.prototype = Object.create(Component.prototype);
Item.prototype.constructor = Item;