function Results({ results, onItemClick }) {
    return <ul className="results">
        {results.map(item => <Item vehicle={item} onClick={onItemClick} />)}
    </ul>


    // constructor(props) {
    //     super(document.createElement('ul'))
    //     var list = this.container

    //     list.classList.add('results');

    //     props.results.forEach(result => {
    //         var item = new Item({ details: result, onToItem: props.onToItem });

    //         list.append(item.container);
    //     });

    // }

}