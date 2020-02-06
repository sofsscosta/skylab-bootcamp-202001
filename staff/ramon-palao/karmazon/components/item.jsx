function Item({item: {id, name, thumbnail, price}, onClick, ontoggle}) {
    return <li className="item-list" onClick={() => onClick(id)}>
        <h3 className="item-name">{name}</h3>
        <figure>
            <i className="far fa-heart" onClick={event =>{
                event.preventDefault()
                ontoggle()
            }}></i>
        </figure>
        <img className="img-photo" src={thumbnail}/>
        <span className="item-price">{price} €</span>
    </li>
}