function Results({ results, onItemClick, onFav, fav}) {

    return <ul className="results">
        {results.map(item => <Item key={item.id} item={item} onClick={onItemClick} fav={fav} onFav={onFav} />)}
    </ul>
}