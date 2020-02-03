class Item extends Component {
    constructor({ result: { id, name, thumbnail, price }, onClick }) {
        var item = document.createElement('article')
        Component.call(this, item)
        item.classList.add('item')

        var name = document.createElement('h3')
        name.innerText = name
        item.append(name)

        var figure = document.createElement('figure')
        var anchor = document.createElement('a')
        var image = document.createElement('img')
        image.src = thumbnail
        anchor.append(image)
        figure.append(anchor)
        item.append(figure)

        var price = document.createElement('span')
        price.innerText += "price: " + price + "€"
        item.append(price)

        item.addEventListener('click', () => onClick(id))
        // item.addEventListener("click", function (event) {
        //     event.preventDefault()

        //     onClick(id)

        // })
    }
}