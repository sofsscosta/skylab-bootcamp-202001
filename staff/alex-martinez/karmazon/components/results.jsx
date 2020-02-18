function Results({results, onItemClick, onFavClick}) {

    return <ul className="results">
        {results.map(item => <Item key={item.id} item={item} onItemClick={onItemClick} 
        onFavClick={onFavClick} id={item.id}/>)}
    </ul>
}