class Results extends Component {
    constructor({results, onItemClick}) {
        super(document.createElement("ul"))
    
        const list = this.container

        list.classList.add('results')

        results.forEach(item => {

            const _item = new Item({
                item, 
                
                onClick: onItemClick
            })

            list.append(_item.container);
        });
    }
}
