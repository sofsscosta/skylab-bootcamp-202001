'use strict'

var _search = createSearch('.search', function(query) {
    googl(query, function(results) {
        if(results instanceof Error) {
            alert('Network error')
        } else {
            createResults('.results', results)
        }
        
    })
})

var _login = createLogin('.login', {
    onSubmit: function(username, password) {
        try {
            authenticate(username, password)

            _login.toggle()
            _search.toggle()
        } catch {
            alert('Wrong username or password. Please try again or register.')
        }
    },
    
    onToRegister: function() {
        _login.toggle()
        _register.toggle()
    }
})

var _register = createRegister('.register', {
    onSubmit: function(user) {
        try {
            register(user)

            _register.toggle()
            _login.toggle()
        } catch {
            alert('Username already in use. Please a new one or login')
        }
    },  
    
    onToLogin: function() {
        _register.toggle()
        _login.toggle()
    }
})