class Item extends Component {
    constructor({results: {id, name, thumbnail, price}, onClick}) {
    super (document.createElement('div'))

    const item = this.container

    item.classList.add('item')

    item.innerHTML = `<h2> ${name} </h2> <img src="${thumbnail}"><span>Price: $ ${price} </span>`

    item.querySelector('img').addEventListener('click', () => onClick(id))
    
    }
}
