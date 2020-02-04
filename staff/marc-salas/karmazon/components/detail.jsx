function Detail({ vehicle: { name, year, price, image, color, maker, collection, description, url }, onClick }) {
    return <article className="detail">

        <h3>{name}</h3>
        <figure>
            <img src={image} />
        </figure>
        <span className="year">{year}</span>
        <span className="maker">{maker}</span>
        <span className="collection">{collection}</span>
        <p>{description}</p>
        <a href={url}>{url}</a>
        <button onClick={(event) => {
            event.preventDefault()
            onClick()
        }}>X</button>
    </article>
}

