function Item ({item: {id, name, thumbnail, price}, onItemClick}){
    return <div onClick={() => onItemClick(id)}>
        <h3>{name}</h3>
        <img src={thumbnail} />
        <span>{price} $ </span>
        </div>
}

