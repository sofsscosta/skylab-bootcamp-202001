class Item extends Interactive {
    constructor({result: {id, name, thumbnail, price}, onClick}) {
        super(document.createElement('li'))
    
        const item = this.container
        item.classList.add('item')

        item.innerHTML = '<h3 class="item__name text">' + name + '</h3>'
        .concat('<img class="item__thumbnail text" src="' + thumbnail + '">')
        .concat('<span class="item__price text">' + price + '€</span>')
                
        item.addEventListener('click', (event) => {
            event.preventDefault()
            onClick(id)
        })
    }
} 