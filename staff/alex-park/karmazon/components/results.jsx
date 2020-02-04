function Results ({ results, onItemClick }) {
    return <ul className="results">
        {results.map(vehicles => <Item key={vehicles.id} results={vehicles} onClick={onItemClick
        }/>)}
    </ul>
}