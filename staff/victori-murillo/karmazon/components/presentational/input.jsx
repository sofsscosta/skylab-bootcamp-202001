function Input(props) {
  
  const style = {
    borderRadius: '10px',
    color: 'black',
    fontSize: '16px',
    height: '30px',
    paddingLeft: '10px',
    width: '150px',
    margin: '8px auto'
  }

  return <input style={style} type={props.type} name={props.name} placeholder={props.placeholder} 
    autoComplete={props.autoComplete}/>
}

Input.defaultProps = {
  name: '',
  placeholder: 'type...',
  type: 'text',
  autoComplete: 'off'
}
