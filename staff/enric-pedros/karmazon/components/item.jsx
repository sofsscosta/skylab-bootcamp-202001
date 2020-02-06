function Item({ item: { id, name, thumbnail, price, fav }, onClick, favToggle }) {

    return <article>
        {fav && <h4>{name}</h4>}
        {!fav && <h2>{name}</h2>}
        <img src={thumbnail}  onClick={event => {
            event.preventDefault()
            onClick(id)
        }} />
        <span onClick={event =>{
            event.preventDefault()
            favToggle(id)
        }}>{price}</span>
    </article>
} 