function Results({ results, onItemClick }) { 

    return <ul className="results">
       
    {results.map(vehicle=> <Item key={vehicle.id} item={vehicle} onClick ={onItemClick} /> )}

    </ul>
}
