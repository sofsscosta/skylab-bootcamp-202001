function Item ({item: {id, name, thumbnail, price}, onItemClick}) {
    return <li key={id} onClick={event => {
        event.preventDefault()
        onItemClick(id)
    }}>
        <h3 className="item__name text">{name}</h3>
        <img className="item__thumbnail text" src={thumbnail}></img>
        <span className="item__price text">{price}€</span>
    </li>
}