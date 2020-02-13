function A(props) {

  const _onClick = event => {
    event.preventDefault()
    props.onClick()
  }

  const style = {
    cursor: 'pointer',
    display: 'block'
  }


return <a style={style} href={props.href} onClick={_onClick}>{props.children}</a>
}

A.defaultProps = {
  href: '/',
  onClick: () => console.log('on click')
}