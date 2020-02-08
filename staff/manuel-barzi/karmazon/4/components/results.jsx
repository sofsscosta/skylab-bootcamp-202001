function Results({ results, onItemClick, onItemFavClick }) {
    return <ul className="results">
        {results.map(item => <Item key={item.id} item={item} onClick={onItemClick} onFavClick={onItemFavClick} />)}
    </ul>
}