function Item ({ results: { name, thumbnail, price, id}, onClick }){
    return <li className="item">
        <h2>{name} ♡ ❤</h2>
        <img src={thumbnail} onClick={() => onClick(id)}/>
        <span>Price: {price}$</span>
    </li>
}