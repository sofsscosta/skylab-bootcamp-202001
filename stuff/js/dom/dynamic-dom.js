function replace(container, selector, element) {
    var old = container.querySelector(selector)

    container.replaceChild(element, old)
}

function App() {
    var container = document.createElement('main')

    container.innerHTML = '<h1>My App</h1>'
        .concat('<googl></googl>')
        .concat('<yahoo></yahoo>')
        .concat('<footer>Footer</footer>')
   
    //container.append(MyForm())
    //container.append(MyForm())
    //container.append(MyForm())

    /*var googl = container.querySelector('googl')
    container.replaceChild(MyForm(), googl)*/

    /*var yahoo = container.querySelector('yahoo')
    container.replaceChild(MyForm(), yahoo)*/

    replace(container, 'googl', MyForm({ name: 'Googl', onSubmit: function() {} }))

    replace(container, 'yahoo', MyForm({ 
        name: 'Yahoo', 

        onSubmit: function() {
            var googl = container.querySelector('form')

            container.removeChild(googl)
        }
    }))

    return container
}


function MyForm(props) {
    var container = document.createElement('form')
    
    container.innerHTML = '<h2>' + props.name + '</h2>'
    .concat('<button>ok</button>')

    container.addEventListener('submit', function(event) {
        event.preventDefault()

        console.log('submit ' + props.name)

        props.onSubmit()
    })

    return container
}

document.body.append(App())