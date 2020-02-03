function Item({ vehicle: { id, thumbnail, name, price }, onClick }) {

    return <li className="item" onClick={() => {
        onClick(id)
    }}>

        <img className="item__thumbnail" src={thumbnail} alt="" />

        <div className="item__info-wrapper">
            <h3 className="item__name">{name}</h3>
            <span className="item__price">${price}</span>
        </div>
    </li>
}

