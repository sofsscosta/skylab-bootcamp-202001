function Item ({item: {id, name, thumbnail, heart}, onClickItem, toggleHeart}) {

  return <li key={id} className="item">
    <div>
      <h3 onClick={() => onClickItem(id)} style={{display: 'inline-block', marginRight: '10px'}}>{name}</h3>
      {
        heart ? <HeartRed onClick={toggleHeart} id={id} /> : <Heart onClick={toggleHeart} id={id} />
      }
    </div>
    <img onClick={() => onClickItem(id)} src={thumbnail} />
  </li>
}