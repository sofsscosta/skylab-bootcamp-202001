function Detail({ vehicle: { name, year, price, image, color, maker, collection, description, url }, onBack }) {

    return
    <div className='detail'>
        <h2>{name}</h2>
        <img src={image} />
        <span>Year:{year}</span>
        <span>Color:{color}</span>
        <span>Marker:{maker}</span>
        <span>Collection:{collection}</span>
        <span>Style:{url}</span>
        <p>Description:{description}</p>
        <span>Price:{price}€ </span>
        <a href=""
                onClick={event => {
                    event.preventDefault()
                    onBack()
                }
            }>Back </a>
    </div>


}