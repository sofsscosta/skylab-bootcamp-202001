function Detail ({ vehicle: { name, id, image, year, price, description, url}, style: {name: styleName, image: styleImage, url: styleUrl}, maker: {name: makerName, url: makerUrl }, collection: {name: collectionName, image: collectionImage, url: collectionUrl}, onFav, fav}) {

    if(!fav || !fav.includes(id)) {
        return  <li className="detail">
                    <h3>{name}   <span onClick={() => onFav(id)}>🤍</span></h3>
                    <figure>
                        <img src={image} />
                    </figure>
                    <span>{price} €</span>
                    <p>Year: {year}</p>
                    <p>
                        <a href={makerUrl}>Maker: {makerName}</a>
                    </p>
                    <p>
                        <a href={collectionUrl}>Collection: {collectionName}</a>
                        <img src={collectionImage} href={collectionUrl}/>
                    </p>
                    <p>
                        <a href={styleUrl}>Style: {styleName}</a>
                        <img src={styleImage} href={styleUrl}/>
                    </p>
                    <p>Description: {description}</p>
                    <a href={url}>Link to URL: {url} </a>
                </li>
    } else {
        return  <li className="detail">
                    <h3>{name}   <span onClick={() => onFav(id)}>❤️</span></h3>
                    <figure>
                        <img src={image} />
                    </figure>
                    <span>{price} €</span>
                    <p>Year: {year}</p>
                    <p>
                        <a href={makerUrl}>Maker: {makerName}</a>
                    </p>
                    <p>
                        <a href={collectionUrl}>Collection: {collectionName}</a>
                        <img src={collectionImage} href={collectionUrl}/>
                    </p>
                    <p>
                        <a href={styleUrl}>Style: {styleName}</a>
                        <img src={styleImage} href={styleUrl}/>
                    </p>
                    <p>Description: {description}</p>
                    <a href={url}>Link to URL: {url} </a>
                </li>
    }
}
