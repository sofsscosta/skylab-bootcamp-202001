function Item({ item: { id, name, thumbnail, price, fav }, onClick, favToggle }) {

    return <article className="search__items">
        {fav && <h3>{`${name} ❤️`}</h3>}
        {!fav && <h3>{name}</h3>}
        <img src={thumbnail}  onClick={event => {
            event.preventDefault()
            onClick(id)
        }} />
        <span >PRECIO:{price}€</span>
        <p onClick={event =>{
            event.preventDefault()
            favToggle(id)
        }}>Favorite</p>
    </article>
} 