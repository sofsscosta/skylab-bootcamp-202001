class Detail extends Component {
    constructor({ vehicle: { name, year, price, image, color, maker, collection, description, url }, style: { name: styleName, image: styleImage, url: styleUrl } }) {
        super(document.createElement('div'))
        const item = this.container

        item.classList.add('detail')

        item.innerHTML = `  <h2>${name}</h2></br>
                            <img src =${image}></br>
                            <span>Year:${year}</span></br>
                            <span>Color:${color}</span></br>
                            <span>Marker:${maker}</span></br>
                            <span>Collection:${collection}</span></br>
                            <span>Style:${url}</span></br>
                            <p>Description:${description}</p>
                            <span>Price:${price}€ </span>`

    }

}