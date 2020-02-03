function Detail({vehicle: {name, year, price, image, color, maker, collection, description, style} }) {
    return <li className="detail-info">
        <h3 className="detail-info__title">{name} ({year})</h3>
        <img className="detail-info__image" src={image} />
        <p className="detail-info__color">{color}</p>
        <p className="detail-info__maker">{maker}</p>
        <p className="detail-info__collection">{collection}</p>
        <p className="detail-info__style">{style}</p>
        <p className="detail-info__description">{description}</p>
        <span className="detail-info__price">{price} €</span>
        <button className="detail-info__button">GO BACK</button>
    </li>
}