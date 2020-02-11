function P(props) {

  const style = {
    color: props.color
  }

  return <p style={style}>{props.children}</p>
}

P.defaultProps = {
  color: 'red'
}
