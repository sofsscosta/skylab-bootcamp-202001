function Results({ results, onItemClick}) {

    return <ul className="results">
        {results.map(item => <Item item={item} onClick={onItemClick} />)}
    </ul>
}