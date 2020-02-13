

function Detail({ vehicle: { id,  name, year, price, image, color, maker, collection, description, url }, style: { name: styleName, image: styleImage, url: styleUrl }, onToggleFav, favorites }) {
    return <li className="detail-info">
                <h3 className="detail-info__title">{name} ({year})</h3>
                <figure>
                    <i className={`${favorites.find(value => value === id) ? 'fas' : 'far'} fa-heart`} onClick={(event)=>{
                    event.preventDefault()
                    onToggleFav(id)
                }}></i>
                </figure>
                <img src={image} className="detail-info__photo"/>
                <span className="detail-info__price">{price} €</span>
                <p className="detail-info__color">{color}</p>
                <p className="detail-info__maker">{maker}</p>
                <p className="detail-info__collection">{collection}</p>
                <p>
                    <a href={styleUrl}>{styleName}</a>
                    <img src={styleImage} />
                </p>
                <p className="detail-info__description">{description}</p>
                <a href={url}>{url}</a>
                <button>volver</button>
                
            </li>
}


