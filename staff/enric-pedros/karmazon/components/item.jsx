function Item({ item: { id, name, thumbnail, price }, onClick }) {

    return <article onClick={event => {
        event.preventDefault()
        onClick(id)
    }}>
        <h3>{name}</h3>
        <img src={thumbnail} />
        <span>{price}</span>
    </article>
}