function Favorites({ favs, onItemClick, onHeartClick, onToSearch }) {
    return <div className="favorites">
        <h2>Favorites</h2>
        <ul>
            HOLA
            {favs.map(item => <Item key={item.id} vehicle={item} onClick={onItemClick} onFavClick={onHeartClick} />)}
        </ul>
        <a href="#" onClick={onToSearch}>Back to Search</a>
    </div>

}