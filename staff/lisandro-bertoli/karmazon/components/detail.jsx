function Detail({ product: { name, image, year, color, maker, collection, style, description }, backToResults }) {


    return <section className="details">
        <div className="details__intro">
            <a className="details__exit" href="#" onClick={() => {
                backToResults()
            }}>{'<< Back to results'}</a>
            <h2 className="details__car-name">{name}</h2>
            <div className="details__img-container">
                <img className="details__img" src={image} alt="" />
            </div>
        </div>
        <div className="details__main">
            <h2>Car specs</h2>
            <ul className="details__container">
                <li className="details__detail">
                    <div className="year">
                        <h5>Year</h5>
                        <p>{year}</p>
                    </div>
                </li>
                <li className="details__detail color maker">
                    <div className="color">
                        <h5>COLOR</h5>
                        <p>{color}</p>
                    </div>
                    <div className="maker">
                        <h5>MAKER
                            </h5>
                        <p>{maker}</p>
                    </div>
                </li>
                <li className="details__detail collection">
                    <h5>Collection</h5>
                    <p>{collection}</p>
                </li>
                <li className="details__detail style">
                    <h5>STYLE</h5>
                    <p>{style}</p>
                </li>
                <li className="details__detail description">
                    <h5>Description</h5>
                    <p>{description}</p>
                </li>
            </ul>
        </div>
    </section>
}

