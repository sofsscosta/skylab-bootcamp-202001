class Results extends Component {
    constructor(props) {
        super(document.createElement('ul'))
        var list = this.container

        list.classList.add('results');

        props.results.forEach(result => {
            var item = new Item({ details: result, onToItem: props.onToItem });

            list.append(item.container);
        });

    }

}