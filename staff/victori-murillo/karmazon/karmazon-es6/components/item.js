class Item extends Component {
  constructor ({item: {id, name, thumbnail}, toggleDetails}) {
    
    super(document.createElement('li'))
    
    const item = this.container

    item.classList.add('item')
  
    const _name = document.createElement('h3');
    _name.innerText = name;
    item.append(_name);
  
    const image = document.createElement('img');
    image.src = thumbnail;
    item.append(image);
  
    item.addEventListener('click', function() {
      toggleDetails(id)
    })
  }

}