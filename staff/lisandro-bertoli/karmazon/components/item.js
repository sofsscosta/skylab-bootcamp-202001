class Item extends Component {
    constructor({ details: { id, thumbnail, name, price }, onToItem }) {
        super(document.createElement('li'))

        const item = this.container;

        item.classList.add('item');

        item.innerHTML = `<a href="#">
        <img class="item__thumbnail"src='${thumbnail}'alt=""></a>
        <div class="item__info-wrapper">
        <h3 class="item__name">${name}</h3>
        <span class="item__price">$${price}</span></div>`

        item.addEventListener('click', () => {
            onToItem(id);
        });
    }
}

