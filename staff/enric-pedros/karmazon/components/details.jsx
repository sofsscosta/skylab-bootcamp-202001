function Details ({detailInfo: { id, name, image, year, color, maker, collection, style, description, price, fav }, onBack, onFavToggle}) {
    return <li className="details">
        <h2>{id}: {name}</h2>
        <img src={image} />
        <div className="content"><p><b>YEAR</b>: {year}</p>
        <p><b>COLOR</b>: {color.toProperCase()}</p>
        <p><b>MAKER</b>: {maker.toProperCase()}</p>
        <p><b>COLLECTION</b>: {collection.toProperCase()}</p>
        <p><b>STYLE</b>: {style.toProperCase()}</p>
        <p><b>DESCRIPTION</b>: {description}</p></div>

        {!fav && <p onClick={event =>{
            event.preventDefault()
            onFavToggle(id)
        }}><i className="far fa-heart"></i></p>}

        {fav && <p onClick={event =>{
                    event.preventDefault()
                    onFavToggle(id)
                }}><i className="fas fa-heart"></i></p>}

        <span>PRICE: {price}$</span>
        <a href="" onClick={event => {
            event.preventDefault()
            onBack()
        }}>BACK</a>
    </li>
}