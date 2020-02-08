function Detail({ vehicle: { name, year, price, image, color, maker, collection, 
description, url, isFav, id}, onFavClick, onBack}) {
    return <div className="details">
        <a className="button" onClick={event => {
            event.preventDefault()
            onBack()
        }}>BACK</a>
        {/* <div onClick = {()=>onFavClick(id)}> 
            {isFav && <i className="fas fa-heart item__heart"></i>}
            {!isFav && <i className="far fa-heart item__heart"></i>} </div> */}
        <h2>{name} ({year})</h2>
        <img src={image} />
        <div className="content">
        <div className="heart"onClick = {()=>onFavClick(id)}> 
            {isFav && <i className="fas fa-heart item__heart"></i>}
            {!isFav && <i className="far fa-heart item__heart"></i>} </div>
        <p>{color}</p>
        <p>{maker}</p>
        <p>{collection}</p>
        <p>{description}</p>
        <a href={url}>{url}</a></div>
        <span>{price} €</span>
    </div>
}