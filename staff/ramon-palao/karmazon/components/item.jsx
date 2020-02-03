function Item({item: {id, name, thumbnail, price}, onClick}) {
    return <li className="item-list" onClick={() => onClick(id)}>
        <h3 className="item-name">{name}</h3>
        <img className="img-photo" src={thumbnail}/>
        <span className="item-price">{price} €</span>
    </li>
}