function Detail({ vehicle: { name, image, year, color, maker, collection, style, description, price }, onBackButtonClick }) {

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
                    <div className="details__maker pills__item">{capitalizeFirstLetter(maker)}</div>
                    <div className="details__collection pills__item">{capitalizeFirstLetter(collection)}</div>
                    <div className="details__style pills__item">{capitalizeFirstLetter(style)}</div>
                </div>

                <div className="details__description">{description}</div>
                <div className="details__price">{price} €</div>
            </div>
        </div>
    )
}