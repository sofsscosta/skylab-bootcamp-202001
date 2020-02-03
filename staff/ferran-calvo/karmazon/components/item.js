function Item(props) {
    
    var item = document.createElement('li');
    Component.call(this, item)
    item.classList.add('item')


    var name = document.createElement('h3');
    name.innerText = props.results.name;
    item.append(name);

    var image = document.createElement('img');
    image.src = props.results.thumbnail;
    item.append(image);


    var price = document.createElement('span');
    price.innerText = props.results.price + " $";
    item.append(price);

    item.addEventListener('click', function(e){
        e.preventDefault();
        props.onClick();
    })
    return item;
}

Item.prototype = Object.create(Component.prototype);
Item.prototype.constructor = Item;

