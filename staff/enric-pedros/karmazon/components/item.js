
class Item extends Component {
  constructor({ item: { id, name, thumbnail, price }, onClick }) {
    super(document.createElement('article'))
    const item = this.container

    item.addEventListener('click', () => onClick(id))

    const _name = document.createElement('h3')
    _name.innerText = name
    item.append(_name)

    const image = document.createElement('img')
    image.src = thumbnail
    item.append(image)

    const _price = document.createElement('span')
    _price.innerText = price
    item.append(_price)  
  }
}
