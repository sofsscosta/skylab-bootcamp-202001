function Detail({result: {id, name, maker, year, description, price, image, heart}, toggleHeart}) {

  const style = {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'

  }
  return <div>
    <div style={style}>
      <h1 style={{marginRight: '10px'}}>{name}</h1>
      {heart ? <HeartRed id={id} onClick={toggleHeart} /> : <Heart id={id} onClick={toggleHeart} />}
    </div>
    
    <h3>{maker && maker.toUpperCase()}, {year}</h3>
    <p>{description}</p>
    <h4>{price}</h4>
    <img src={image} />
  </div>
}