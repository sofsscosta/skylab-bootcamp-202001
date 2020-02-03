const title = React.createElement('h1', null, 'hola mundo')

const names = ['John', 'Mary', 'Charles', 'Annita', 'Pepito', 'Grillo']

const items = names.map(name => React.createElement('li', null, name))

const list = React.createElement('ul', null, items)

ReactDOM.render([title, list], document.getElementById('root'))