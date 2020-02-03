class Item extends Component {
    constructor({ result: { id, name, thumbnail, price }, onClick }) {
        super(document.createElement('article')) 
        const item = this.container
        item.classList.add('item')

        var _name = document.createElement('h3')
        _name.innerText = name
        item.append(_name)

        var figure = document.createElement('figure')
        var anchor = document.createElement('a')
        var image = document.createElement('img')
        image.src = thumbnail
        anchor.append(image)
        figure.append(anchor)
        item.append(figure)

        var _price = document.createElement('span')
        _price.innerText += "price: " + price + "€"
        item.append(_price)

        item.addEventListener('click', () => onClick(id))

    }
}