class Item extends Component {
    constructor(id, name, thumbnail, price, callback) {
        super(document.createElement('li'))
        const item = this.container
        item.classList.add('item')

        const itemLink = document.createElement('a')
        itemLink.classList.add('item__link')
        itemLink.href = "https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/" + id

        const imageEl = document.createElement('img')
        imageEl.src = thumbnail
        itemLink.append(imageEl)

        const nameEl = document.createElement('h3')
        nameEl.classList.add('item__title')
        nameEl.innerText = name
        itemLink.append(nameEl)

        const priceEl = document.createElement('span')
        priceEl.classList.add('item__price')
        priceEl.innerText = price + ' €'
        itemLink.append(priceEl)

        itemLink.addEventListener('click', function (event) {
            event.preventDefault()

            retrieveVehicle(id, function (details) {
                callback(details)
            })
        })

        item.append(itemLink)

        // let's add these as properties for separate use cases.
        /*this.id = id
        this.name = name
        this.thumbnail = thumbnail
        this.price = price*/
    }
}