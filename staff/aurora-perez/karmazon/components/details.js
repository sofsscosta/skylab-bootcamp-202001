class Details extends Component {
    constructor({ detailInfo: {id, name, year, image, color, maker, collection, style, description, price}}) {
    
        super(document.createElement('div'))

        const details = this.container
    
        details.classList.add('details');

        details.innerHTML = `<h2>${id}: ${name}</h2>
            <img src="${image}">
            <div class="content"><p><b>YEAR</b>: ${year}</p>
            <p><b>COLOR</b>: ${color.toProperCase()}</p>
            <p><b>MAKER</b>: ${maker.toProperCase()}</p>
            <p><b>COLLECTION</b>: ${collection.toProperCase()}</p>
            <p><b>STYLE</b>: ${style.toProperCase()}</p>
            <p><b>DESCRIPTION</b>: ${description}</p></div>
            <span>PRICE: ${price}$</span>
            <button>BACK</button>`
    }
}
