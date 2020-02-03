class Results extends Component {

    constructor({ results, onItemClick}) {

        super(document.createElement('ul'))

        const list = this.container

        list.classList.add('results')

        results.forEach(function (results) {
            const item = new Item({
                results,

                onClick: onItemClick
            })
            
            list.append(item.container)
        })
    }
}
