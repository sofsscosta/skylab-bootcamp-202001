function Form(props) {

  const _onSubmit = event => {
    event.preventDefault()
    var user = {}

    event.target.childNodes.forEach(input => {
      if (input.name && input.value) user[input.name] = input.value
    })

    props.onSubmit(user)
  }

  return (
  <form className={props.className} onSubmit={_onSubmit}>
    {props.children}
  </form>
  )
}

Form.defaultProps = {
  className: ''
}

