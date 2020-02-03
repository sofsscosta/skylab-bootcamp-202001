function Results(props) {
    // const vehicles = props.map(vehicle => new Item({ details: vehicle, onToItem: props.onToItem }))


    return <ul className="results">
        {props.vechicles.forEach(vehicle => <li>{vehicle}</li>)}
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