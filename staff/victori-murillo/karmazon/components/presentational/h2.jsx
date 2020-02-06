function H2(props) {

  const style = {
    color: 'rgb(52, 90, 128)',
    fontSize: '30px'
  }

  return <h2 style={style}>{props.children}</h2>
}