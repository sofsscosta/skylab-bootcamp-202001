const title = <h1>hola mundo</h1>

const names = ['John', 'Mary', 'Charles', 'Annita', 'Pepito', 'Grillo']

const items = names.map(name => <li>{name}</li>)

const list = <ul>{items}</ul>

ReactDOM.render([title, list], document.getElementById('root'))