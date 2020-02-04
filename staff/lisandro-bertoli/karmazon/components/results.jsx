function Results({ results, onItemClick }) {
    return <ul className="results">
        {results.map(item => <Item key={item.id} vehicle={item} onClick={onItemClick} />)}
    </ul>

}