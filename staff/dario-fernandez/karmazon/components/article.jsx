function Article({ result: { id, name, thumbnail, price }, onClick }){
    return <li className="article">
        <h3 className="article__name" onClick={ () =>onClick(id)}>{name}</h3>
        <img className="article__photo" src={thumbnail} onClick={ () =>onClick(id)} />
        <span className="article__price">{price}$</span>
    </li>
}
