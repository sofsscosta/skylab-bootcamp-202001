function Item({ item: { id, name, thumbnail, price }, onClick }) {
    return <li onClick={() => onClick(id)}>
        <h3>{name}</h3>
        <figure>
            <a>
                <img src={thumbnail} />
            </a>
        </figure>
        <span>{price} €</span>
    </li>
}