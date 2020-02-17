function Results({ results, onItemClick, onHeartClick }) {
    return <ul className="results">
        {results.map(item => <Item key={item.id} vehicle={item} onClick={onItemClick} onFavClick={onHeartClick} />)}
    </ul>

}