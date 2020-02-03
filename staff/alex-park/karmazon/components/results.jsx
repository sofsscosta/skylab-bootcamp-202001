function Results ({ results, onItemClick }) {
    return <ul className="results">
        {results.map(item => <Item results={item} onClick={onItemClick}/>)}
    </ul>
}