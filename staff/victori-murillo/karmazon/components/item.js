function Item(result, toggleDetails) {
  
  var item = document.createElement('li');
  item.classList.add('item')
  item.id = result.id
  
  Interactive.call(this, item)

  var name = document.createElement('h3');
  name.innerText = result.name;
  item.append(name);

  var image = document.createElement('img');
  image.src = result.thumbnail;
  item.append(image);

  var price = document.createElement('span');
  price.innerText = result.price;

  item.append(price);

  item.addEventListener('click', function() {
    toggleDetails(result.id)
  })
}

Item.prototype = Object.create(Interactive.prototype)

Item.prototype.toggleDetails = function() {

}