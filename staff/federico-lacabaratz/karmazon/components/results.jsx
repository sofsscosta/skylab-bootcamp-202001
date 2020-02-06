function Results({ results, onItemClick, onFav}) {

    return <ul className="results">
        {results.map(item => <Item key={item.id} item={item} onClick={onItemClick} onFav={onFav} />)}
    </ul>
}