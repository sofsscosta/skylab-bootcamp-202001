function Results({ results, onItemClick, favourites, toggleFavVehicle }) {
    //debugger
    return <div className="results">
        <ul className="results__list">
            {results.map((result, index) => {
                result.key = index
                return <Item item={result} onClick={onItemClick} isFavourited={favourites.find(item => result.id === item)} toggleFavVehicle={toggleFavVehicle} key={index} />
            })}
        </ul>
    </div>
}