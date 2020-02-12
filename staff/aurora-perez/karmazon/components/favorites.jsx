function Favorites({ favorites, onItemClick, onFavSelection, onToSearch }) {
    return <div className="favorites">
        <a href="" onClick={onToSearch}>Back to Search</a>
        <h2>YOUR FAVORITES</h2>
        <ul>
            {favorites.map(item => <Item key={item.id} item={item} onClick={onItemClick} onFavClick={onFavSelection} />)}
        </ul>
     
    </div>
}