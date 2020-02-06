function Item({ vehicle: { id, thumbnail, name, price, isFav }, onClick, onFavClick }) {

    return <li className="item" >

        <img className="item__thumbnail" src={thumbnail} alt="" />
        <div onClick={() => { onFavClick(id) }}>
            {isFav && <i className="fas fa-heart item__heart"></i>}
            {!isFav && <i className="far fa-heart item__heart"></i>}
        </div>

        <div className="item__info-wrapper" onClick={() => {
            onClick(id)
        }}>
            <h3 className="item__name">{name}</h3>
            <span className="item__price">${price}</span>
        </div>
    </li>
}

