function Item ({item: { id, name, thumbnail, price, fav }, onClick, favToggle }){
    return <li>
        <h3>{name}</h3>
        <img src = {thumbnail}  
                onClick = {event => {
                event.preventDefault()
                onClick(id)
                }
    }/>
        <span>{price} €</span>

        {!fav && <p onClick={event =>{
            event.preventDefault()
            favToggle(id)
        }}><i className="far fa-heart"></i></p>}

        {fav && <p onClick={event =>{
                    event.preventDefault()
                    favToggle(id)
                }}><i className="fas fa-heart"></i></p>}
    </li>
}


