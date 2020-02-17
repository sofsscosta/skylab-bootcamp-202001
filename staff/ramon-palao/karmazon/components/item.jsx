function Item({item: {id, name, thumbnail, price}, onClick, onToggleFav, isFavorite}) {
    return <li className="item-list" >
        <h3 className="item-name" onClick={() => onClick(id)}>{name}</h3>
        <figure>
            <i className= {`${isFavorite ? "fas" : "far"} fa-heart`} onClick={event =>{
                event.preventDefault()
                onToggleFav(id)
            }}></i>
        </figure>
        <img className="img-photo" src={thumbnail}/>
        <span className="item-price">{price} €</span>
    </li>
}