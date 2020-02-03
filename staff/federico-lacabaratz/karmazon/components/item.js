class Item extends Component {
    constructor({ item: { id, name, thumbnail, price }, onClick}) {
        super(document.createElement('li'))
    
    const item = this.container

    item.addEventListener("click", () => onClick(id))

    const _name = document.createElement('h3')
    _name.innerText = name
    item.append(_name)

    const _image = document.createElement('img')
    _image.src = thumbnail
    item.append(_image)

    const _price = document.createElement('span')
    _price.innerText = `price: ${price} €`
    item.append(_price)
    }
}
