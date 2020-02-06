function Detail({vehicle: {name, year, price, image, color, maker, collection, description, url}, style: {name: styleName, image: styleImage, url: styleUrl} }) {
    return <li className="detail-info">
        <h3 className="detail-info__title">{name} ({year})</h3>
        <i className="far fa-heart"></i>
        <img className="detail-info__image" src={image} />
        <p className="detail-info__color">{color}</p>
        <p className="detail-info__maker">{maker}</p>
        <p className="detail-info__collection">{collection}</p>
        <p className="detail-info__style">
            <a href={styleUrl}>{styleName}</a>
            <img src={styleImage}/>
        </p>
        <p className="detail-info__description">{description}</p>
        <a href={url}>{url}</a>
        <span className="detail-info__price">{price} €</span>
        <button className="detail-info__button">GO BACK</button>
    </li>
}