function Detail({ vehicle: { name, year, price, image, color, maker, collection, description, url } }) {
    return <li>
        <h3>{name} ({year})</h3>
        <img src={image} />
        <span>{price} €</span>
        <p>{color}</p>
        <p>{maker}</p>
        <p>{collection}</p>
        <p>{description}</p>
        <a href={url}>{url}</a>
    </li>
}