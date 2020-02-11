function Button(props) {

  const style = {
    backgroundColor: props.backgroundColor,
    borderRadius: '20px',
    color: props.color,
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '0.8px',
    padding: '8px 20px',
    textAlign: props.align,
  }

  return <button style={style} type={props.type}>{props.children}</button>
}

Button.defaultProps = {
  align: 'left',
  backgroundColor: 'rgb(52, 90, 128)',
  color: 'white',
  children: 'Submit',
  type: 'submit'
}