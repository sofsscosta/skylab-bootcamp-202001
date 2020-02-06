function Detail({ vehicle: { name, image, year, color, description, price }, style, maker, collection, onBackButtonClick }) {
    console.log(style, maker, collection)
    const capitalizeFirstLetter = (str) => {
        return str.substring(0, 1).toUpperCase() + str.substring(1)
    }

    return (
        <div className="details">
            <div className="details__backButton" onClick={()=> onBackButtonClick()}>
                <span>&nbsp;&nbsp;Back&nbsp;&nbsp;</span>
            </div>
            <div className="details__image">
                <img src={image} />
            </div>
            <div className="details__descriptionSection">
                <div className="details__name">{name}</div>

                <div className="details__pills pills">
                    <div className="details__year pills__item">{year}</div>
                    <div className="details__color pills__item">{capitalizeFirstLetter(color)}</div>
                    <div className="details__style pills__item">
                        <div className="pills__link"><a href={maker.url} target="_blank">{maker.name}</a></div>
                    </div>
                    <div className="details__style pills__item">
                        <div className="pills__image">
                            <img src={style.image} />
                        </div>
                        <div className="pills__link"><a href={style.url} target="_blank">{style.name}</a></div>
                    </div>
                    <div className="details__style pills__item">
                        <div className="pills__image">
                            <img src={collection.image} />
                        </div>
                        <div className="pills__link"><a href={collection.url} target="_blank">{collection.name}</a></div>
                    </div>
                    {/*--<div className="details__maker pills__item">{capitalizeFirstLetter(maker)}</div>
                    <div className="details__collection pills__item">{capitalizeFirstLetter(collection)}</div>
                    <div className="details__style pills__item">{capitalizeFirstLetter(style)}</div>--*/}

                </div>

                <div className="details__description">{description}</div>
                <div className="details__price">{price} €</div>
            </div>
        </div>
    )
}