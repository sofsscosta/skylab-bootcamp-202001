function Item(result, toggleDetails) {
  
  var item = document.createElement('li');
  item.classList.add('item')
  item.id = result.id
  
  Component.call(this, item)

  var name = document.createElement('h3');
  name.innerText = result.name;
  item.append(name);

  var image = document.createElement('img');
  image.src = result.thumbnail;
  item.append(image);

  item.addEventListener('click', function() {
    toggleDetails(result.id)
  })
}

Item.prototype.extend(Component)