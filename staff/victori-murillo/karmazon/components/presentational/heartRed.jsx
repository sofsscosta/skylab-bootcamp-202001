function HeartRed(props) {

  const style = {
    cursor: 'pointer',
    color: 'red'
  }

  return <i style={style} onClick={() => props.onClick(props.id)} className="fas fa-heart" style={style}></i>
}