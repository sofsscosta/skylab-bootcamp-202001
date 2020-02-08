function Favorites({ favorites, onItemClick, onFavSelection, onToSearch }) {
    return <div className="favorites">
        <h2>Favorites</h2>
        <ul>
            HOLA
            {favorites.map(item => <Item key={item.id} item={item} onClick={onItemClick} onFavClick={onFavSelection} />)}
        </ul>
        <a href="" onClick={onToSearch}>Back to Search</a>
    </div>
}