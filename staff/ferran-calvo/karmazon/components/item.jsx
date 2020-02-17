function Item ({item: {id, name, thumbnail, price, heart}, onItemClick, onFavClick}) {
    
    return <li key={id} >
        <h3 className="item__name text">{name}</h3>
        <img className="item__thumbnail text" src={thumbnail} onClick={event => {
        event.preventDefault()
        onItemClick(id)
    }}></img>
        <span className="item__price text">{price}€</span>
        {heart === true ? <HeartRed id={id} onClick={onFavClick}/> : <Heart id={id} onClick={onFavClick}/>}
    </li>
}