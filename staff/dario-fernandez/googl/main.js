var _search = createSearch('.search', function(query) {
    googl(query, function(results) {
        if(results instanceof Error) {
            alert('Network error')
        } else {
            createResults('.results', results)
        }
        
    })
})

var login = createLogin('.login', {
    onSubmit: function(username, password) {
    var access = users.some(function(element) {
            return element.username === username && element.password === password
        })
        
    if(access) {
        login.classList.toggle('login--hide')
        _search.classList.toggle('search--hide')
        } else {
        alert('Incorrect username or password. Please try again or sign up')
        }
    },
    
    onToRegister: function() {
    login.classList.toggle('login--hide')
    register.classList.toggle('register--hide')
    }
})

var register = createRegister('.register', {
    onSubmit: function(user) {
    var userExist = users.some(function(element) {
        return user.username === element.username
    })

    if(userExist) {
        alert('Username already in use. Please use other username or login.')
    } else {
        users.push(user)
        
        var loginFailMessage = login.querySelector('span')

        register.classList.toggle('register--hide')
        login.classList.toggle('login--hide')
    }
    },  
    
    onToLogin: function() {
    register.classList.toggle('register--hide')
    login.classList.toggle('login--hide')
    }
})