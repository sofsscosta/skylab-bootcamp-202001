function Detail({result: {name, maker, year, description, price, image}}) {
  return <div>
    <h2>{name}</h2>
    <h3>{maker.toUpperCase()}, {year}</h3>
    <p>{description}</p>
    <h4>{price}</h4>
    <img src={image} />
  </div>
}