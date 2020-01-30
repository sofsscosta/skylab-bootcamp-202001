var users = []

function createSearch(selector, callback) {
    var search = document.querySelector(selector)

    search.addEventListener('submit', function(event) {
        event.preventDefault()

        var query = this.query.value

        callback(query)
    })
    return search
}

function createResults(selector, results) {
    var resultsList  = document.querySelector(selector)
    resultsList.innerHTML = ''
    var resultItem = document.createElement('li')
    var title = document.createElement('h3')
    var link = document.createElement('a')
    var rating = document.createElement('span')
    var description = document.createElement('p')
    results.forEach(function (element) {
        var resultItem = document.createElement('li')
        var title = document.createElement('h3')
        var link = document.createElement('a')
        link.target = '_blank'
        var rating = document.createElement('span')
        var description = document.createElement('p')
        title.innerText = element.title
        description.innerText = element.description
        link.href = element.link
        if(element.rating) {
            rating.innerText = element.rating
        }
        resultsList.appendChild(resultItem)
        resultItem.appendChild(link)
        if(element.rating) {
            resultItem.appendChild(rating)
        }
        resultItem.appendChild(description)
        link.appendChild(title)
    })
    return results
}

function createLogin(selector, props) {
    var login = document.querySelector(selector)

    login.addEventListener('submit', function(event) {
        event.preventDefault()

        var username = this.username.value
        var password = this.password.value

        props.onSubmit(username, password)
    })

    var registerLink = login.querySelector('a')

    registerLink.addEventListener('click', function(event) {
        event.preventDefault()

        props.onToRegister() 
    })

    return login
}

function createRegister(selector, props) {
    var register = document.querySelector(selector)

    register.addEventListener('submit', function(event) {
        event.preventDefault()

        var username = this.username.value
        var password = this.password.value
        
        var user = {
            username: username,
            password: password
        }

        props.onSubmit(user)
    })

    var loginLink = register.querySelector('a')

    loginLink.addEventListener('click', function(event) {
        event.preventDefault()

        props.onLoginClick()
    })
    return register
}