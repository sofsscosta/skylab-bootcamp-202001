function Results({results, onItemClick}) {
debugger
    return <ul className="results">
        {results.map(item => <Item key={item.id} item={item} onItemClick={onItemClick}/>)}
    </ul>
}