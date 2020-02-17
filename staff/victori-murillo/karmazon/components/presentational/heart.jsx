function Heart(props) {

  const style = {
    cursor: 'pointer'
  }

  return <i style={style} onClick={() => props.onClick(props.id)} className="far fa-heart"></i>
}


