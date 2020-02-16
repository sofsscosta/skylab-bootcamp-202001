function Item({ item: { id, name, thumbnail, price, key }, isFavourited, onClick, toggleFavVehicle }) {
    return <li className="item" key={key}>
        <a className="item__link">
            <img src={thumbnail} />
            <div className="item__heart" onClick={(event) => {
                event.preventDefault()
                toggleFavVehicle(id)
            }}>
                <i className={`${isFavourited ? 'fas' : 'far'} fa-heart`}></i>
            </div>
            <h3 className="item__title" onClick={(event) => {
                event.preventDefault()
                onClick(id)
            }}>
                {name}
            </h3>
            <span>{price} €</span>
        </a>
    </li>
}