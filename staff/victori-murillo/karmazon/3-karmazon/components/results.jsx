function Results({ results, onItemClick }) {
    return <ul className="results">
        {results.map(item => <li>{item.name}</li>)}
    </ul>

    results.forEach(item => {
        const _item = new Item({
            item,

            onClick: onItemClick
        })

        list.append(_item.container)
    })
}