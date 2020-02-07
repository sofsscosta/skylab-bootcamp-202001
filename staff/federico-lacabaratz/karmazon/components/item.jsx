function Item ({ item: { id, name, thumbnail, price }, onClick, onFav}) {

    if(!fav || !fav.includes(id)) {
        return  <li>
                    <article>
                        <h3>{name}   <span onClick={() => onFav(id)}>🤍</span></h3>
                    </article>
                    <article onClick={() => onClick(id)}> 
                        <img src={thumbnail} />
                        <span>{price} €</span>
                    </article>
                </li>
    } else {
        return  <li>
                    <article>
                        <h3>{name}   <span onClick={() => onFav(id)}>❤️</span></h3>
                    </article>
                    <article onClick={() => onClick(id)}> 
                        <img src={thumbnail} />
                        <span>{price} €</span>
                    </article>
                </li>
    }
}
