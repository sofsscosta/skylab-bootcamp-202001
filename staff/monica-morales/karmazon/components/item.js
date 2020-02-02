'use strict';

function Item(response, onClick){
       
    var item = document.createElement('article');
    Component.call(this, item);

    var list = document.createElement('ul');
    list.classList.add('item');
       
    var itemList = document.createElement('li');

    var name = document.createElement('h3');
    name.innerText = response.name;
    itemList.append(name);
  
    var figure = document.createElement('figure');
    itemList.append(figure);
    var ancor = document.createElement('a');
    var image = document.createElement('img');
    image.src = response.thumbnail;

    ancor.append(image);
    figure.append(ancor);
      
    var price = document.createElement('span');
    price.innerText = response.price + ' €';
    itemList.append(price);

    list.append(itemList);
    item.append(list);
    
    image.addEventListener('click',function(event){
        event.preventDefault();
        
        var id = response.id
     
        onClick(id)
    })
      
}

Item.prototype = Object.create(Component.prototype);
Item.prototype.constructor = Item;
