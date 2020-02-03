
function Title({ text }) {
    return <h1>{text}</h1>
}

const names = ['John', 'Mary', 'Charles', 'Annita', 'Pepito', 'Grillo']

function List({ items }) {
    const _items = items.map(name => <li>{name}</li>)

    const list = <ul>{_items}</ul>

    return list
}

const { Component } = React

class Calculator extends Component {
    constructor() {
        super()

        this.state = { result: undefined }
    }

    render() {
        return <form onSubmit={event => {
            event.preventDefault()

            const a = Number(event.target.a.value)
            const b = Number(event.target.b.value)

            this.setState({ result: a + b })
        }
        }>
            <input type="number" name="a" />
            <input type="number" name="b" />
            <button>add</button>
            <span>{this.state.result}</span>
        </form >
    }
}

//ReactDOM.render([<Title text="hola mundo" />, <Title text="hello world" />, <List items={names} />], document.getElementById('root'))
ReactDOM.render(<Calculator />, document.getElementById('root'))