function Details ({detailInfo: { id, name, image, year, color, maker, collection, style, description, price }, onClick}) {
    return <li className="details">
        <h2>{id}: {name}</h2>
        <img src={image} />
        <div class="content"><p><b>YEAR</b>: {year}</p>
        <p><b>COLOR</b>: {color.toProperCase()}</p>
        <p><b>MAKER</b>: {maker.toProperCase()}</p>
        <p><b>COLLECTION</b>: {collection.toProperCase()}</p>
        <p><b>STYLE</b>: {style.toProperCase()}</p>
        <p><b>DESCRIPTION</b>: {description}</p></div>
        <span>PRICE: {price}$</span>
        <button onClick={onClick}>BACK</button>
    </li>
}
