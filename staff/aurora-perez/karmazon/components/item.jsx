function Item ({item: {id, name, thumbnail, price}, onClick}){
    return <div className="item" onClick={() => onClick(id) }>
        <h3>{name}</h3>
        <img src={thumbnail} />
        <span>{price} $ </span>
        </div>
}



