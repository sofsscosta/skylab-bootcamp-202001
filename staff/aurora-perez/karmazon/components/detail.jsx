function Detail({ vehicle: { name, year, price, image, color, maker, collection, description, url }, onBack }) {
    return <div className="details">
        <a className="button" onClick={event => {
            event.preventDefault()
            onBack()
        }}>BACK</a>
        <h2>{name} ({year})</h2>
        <img src={image} />
        <div className="content"><p>{color}</p>
        <p>{maker}</p>
        <p>{collection}</p>
        <p>{description}</p>
        <a href={url}>{url}</a></div>
        <span>{price} €</span>
    </div>
}