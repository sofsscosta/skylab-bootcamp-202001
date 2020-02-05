function Detail({ vehicle: { name, year, price, image, color, maker, collection, description, url }, style: { name: styleName, image: styleImage, url: styleUrl }, goBack }){

    return <li>
        <h3>{name} ({year})</h3>
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
        <a href="" onClick={event => {
            event.preventDefault()
            goBack()
        }} >Go Back</a>
    </li>
}