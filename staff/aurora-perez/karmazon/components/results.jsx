function Results({ results, onItemClick, onFavSelection }) { 

    return <ul className="results">
       
    {results.map(vehicle=> <Item key={vehicle.id} item={vehicle} onClick ={onItemClick} onFavClick = {onFavSelection}/> )}

    </ul>
}
