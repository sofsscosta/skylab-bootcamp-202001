function Detail({ vehicle: { id, name, year, price, image, color, maker, collection, description, url, isFav }, style: { name: styleName, image: styleImage, url: styleUrl }, onFavClick }) {
    return <li>
        <h3>{name} ({year}) <span className="detail__fav" onClickCapture={event => {
            event.stopPropagation()
            
            onFavClick(id)
        }}>{isFav ? '💖' : '🤍'}</span></h3>
        <img src={image} />
        <span>{price} €</span>
        <p>{color}</p>
        <p>{maker}</p>
        <p>{collection}</p>
        <p>
            <a href={styleUrl}>{styleName}</a>
            <img src={styleImage} />
        </p>
        <p>{description}</p>
        <a href={url}>{url}</a>
    </li>
}