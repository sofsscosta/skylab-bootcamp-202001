function Item ({item: {id, name, thumbnail}, onClickItem}) {
  return <li key={id} className="item" onClick={() => onClickItem(id)}>
    <h3>{name}</h3>
    <img src={thumbnail} />
  </li>
}