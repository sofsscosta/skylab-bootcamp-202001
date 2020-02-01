'use strict';

function Item(props){
       
    var item = document.createElement('article');
    Component.call(this, item);

    var list = document.createElement('ul');
    list.classList.add('item');
       
    var itemList = document.createElement('li');

    var name = document.createElement('h3');
    name.innerText = props.name;
    itemList.append(name);
  
    var figure = document.createElement('figure');
    itemList.append(figure);
    var ancor = document.createElement('a');
    var image = document.createElement('img');
    image.src = props.thumbnail;

    ancor.append(image);
    figure.append(ancor);
      
    var price = document.createElement('span');
    price.innerText = props.price + ' €';
    itemList.append(price);

    list.append(itemList);
    item.append(list);
    
    image.addEventListener('click',function(event){
        event.preventDefault();
        
        var id = props.id
        var ul = document.querySelector('ul');
           
        retrieveVehicle(id,function(itemResult){ 
        var detail = new Detail(itemResult)
        ul.replaceWith(detail.container);
        })
    })
    return itemList;
}

Item.prototype = Object.create(Component.prototype);
Item.prototype.constructor = Item;
