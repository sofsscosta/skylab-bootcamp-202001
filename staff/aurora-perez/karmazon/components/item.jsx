function Item({item: {id, name, thumbnail, price, isFav}, onClick, onFavClick}){
    return <div className="item">
        <h3 onClick={() => onClick(id) }>{name}</h3>
        <img src={thumbnail} />
        <div onClick = {()=>onFavClick(id)}> 
            {isFav && <i className="fas fa-heart item__heart"></i>}
            {!isFav && <i className="far fa-heart item__heart"></i>} </div>
        <span>{price} $ </span>
        </div>
}



