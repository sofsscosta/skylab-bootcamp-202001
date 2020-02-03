class Item extends Component {
    constructor({result: { name, thumbnail, price, id}, onClick}) {
        super(document.createElement('div'))
    
        const item = this.container

        item.classList.add('item')

        item.innerHTML = `<h2>${name}</h2>
            <img src="${thumbnail}">
            <span>Price: ${price}$</span>`

        item.addEventListener('click', () => {onClick(id)})
    }
}