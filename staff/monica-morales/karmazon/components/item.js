class Item extends Component {
    constructor({ item: { id, name, thumbnail, price }, onClick }) {
        super(document.createElement('li'))

        const item = this.container

        const _name = document.createElement('h3')
        _name.innerText = name
        item.append(_name)

        const image = document.createElement('img')
        image.src = thumbnail
        item.append(image)

        const _price = document.createElement('span')
        _price.innerText = price
        item.append(_price)

        item.addEventListener('click', () => onClick(id))
    }
}
