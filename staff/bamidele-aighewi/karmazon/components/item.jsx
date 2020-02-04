function Item({ item: { id, name, thumbnail, price, key }, onClick }) {
    /*const linkOnClickEvent = (event) => {
        event.preventDefault()
        retrieveVehicle(id, function (details) {
            callback(details)
        })
    }*/

    return <li className="item" key={key}>
        <a className="item__link" onClick={(event) => {
                event.preventDefault()
                onClick(id)
            }}>
            <img src={thumbnail} />
            <h3 className="item__title">{name}</h3>
            <span>{price} €</span>
        </a>
    </li>
}

/*class Item extends Component {
    constructor(id, name, thumbnail, price, callback) {


        const priceEl = document.createElement('span')
        priceEl.classList.add('item__price')
        priceEl.innerText = price + ' €'
        itemLink.append(priceEl)

        itemLink.addEventListener('click', function )

        item.append(itemLink)

        // let's add these as properties for separate use cases.
        /*this.id = id
        this.name = name
        this.thumbnail = thumbnail
        this.price = price*
    }
}*/