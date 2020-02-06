function Item ({ item: { id, name, thumbnail, price }, onClick, onFav}) {

    return <li onClick={() => onClick(id)}> 
        <h3>{name}</h3>
        <button onClick={() => 
         onFav(id)
        }>❤️</button>
        <img src={thumbnail} />
        <span>{price} €</span>
    </li>
}
