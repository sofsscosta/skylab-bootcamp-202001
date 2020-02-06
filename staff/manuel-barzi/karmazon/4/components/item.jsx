function Item({ item: { id, name, thumbnail, price }, onClick }) {
    return <li className="results--item item" onClick={() => onClick(id)}>
        <h3>{name}</h3>
        <img src={thumbnail} />
        <span>{price} €</span>
    </li>
}