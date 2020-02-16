var start = enter('.enter')

var _register = createRegister('.register', {
    
    onSubmit: function() {
        try {
            register(name, surname, username, password);
            
            //var search = document.querySelector('.search')
            _register.classList.toggle('register--hide')
            _login.classList.toggle('login--hide')

        } catch (error) {
            alert(error.message);
        }
    },
    
    onToLogin: function() {
        var login=document.querySelector('.login')
        _register.classList.toggle('register--hide')
        login.classList.toggle('login--hide')
    }
    
})

var _login = createLogin('.login', {

    onSubmit: function(username, password) {
        try{
            authenticate(username, password)
    
            //var search = document.querySelector('.search')
            var login = document.querySelector('.login')
            //search.classList.toggle('search--hide');
            login.classList.toggle('login--hide');

            _google.classList.toggle('search--hide');
            _yahoo.classList.toggle('search--hide');
            _bing.classList.toggle('search--hide');
            _ecosia.classList.toggle('search--hide');
    
        } catch (error) {
            alert(error.message)
        }    
    }, 

    onToRegister: function() {
        var register = document.querySelector('.register')
        _login.classList.toggle('login--hide')
        register.classList.toggle('register--hide')
    }        
});





var _google = createSearch('.search1', function (query) {
    googl(query, function (results) {
        createResults('.results', results);
    });
});
var _yahoo = createSearch('.search2', function (query) {
    yahoo(query, function (results) {
        createResults('.results', results);
    });
});
var _bing = createSearch('.search3', function (query) {
    bing(query, function (results) {
        createResults('.results', results);
    });
});
var _ecosia = createSearch('.search4', function (query) {
    ecosia(query, function (results) {
        createResults('.results', results);
    });
});


// enter('.enter', function(clicked) {
//     if (clicked === '.register') {
//         createRegister(clicked, function() {
//             createLogin('.login', function(username, password) {
//                 if (
//                 users.some(function(user) {return user.username === username && user.password === password})
//                 ) { 
//                     var search = document.querySelector('.search')
//                     var login = document.querySelector('.login')
//                     search.classList.toggle('search--hide');
//                     login.classList.toggle('login--hide');
                    
//                 } else alert('you cannot get in :P');
//             });
//         })


//     } else if (clicked === '.login') {
//         createLogin(clicked, function(username, password) {
//             if (
//                 users.some(function(user) {return user.username === username && user.password === password})
//                 ) { 
//                     var search = document.querySelector('.search')
//                     var login = document.querySelector('.login')
//                     login.classList.toggle('login--hide');
//                     search.classList.toggle('search--hide');

//                 } else alert('you cannot get in :P');
//         })
//     }
// })







// var login = createLogin('.login', function(username, password) {
//     if (username === 'pepito' && password === '123') {
//         search.classList.toggle('search--hide');
//         login.classList.toggle('login--hide');
//     } else alert('you cannot get in :P');
// });









//___________________________________________________ Caquinha

// function createLogin (selector) {
//     var login = document.querySelector(login);
//     login.classList.toggle('login--hide')

//     login.addEventListener('submit', function(event) {

//         event.preventDefault()

//         for (var i = 0; i<users.length; i++) {
//             if (this.username.value === users[i].username && this.password.value === users[i].password) {
//                 login.classList.toggle('login--hide')
//                 search.classList.toggle('search--hide')
//             } else alert('You cannot log in! hahaha')
//         }

//         // register.classList.toggle(selector)
//         // //search.classList.toggle('search--hide');
//         // login.classList.toggle('login--hide');
//     })
// }

// function createRegister (selector) {

//     var register = document.querySelector(selector);

//     register.addEventListener('submit', function(event) {

//         event.preventDefault()

//         var user = {}

//         user.username = this.username.value;
//         user.password = this.password.value;
//         user.surname = this.surname.value;
//         user.name = this.name.value

//         users.push(user)

//         register.classList.toggle('enter--hide')
//         login.classList.toggle('login--hide');
//     })
// }


//register('.register')






// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     document.querySelector('ul').innerHTML = ''

//     var query = this.query.value;

//     googl(query, function(results) {

//         results.forEach(function(result) {

//             var item = document.createElement('li')
//             var title = document.createElement('h3')

//             var link = document.createElement('a')
//             link.innerText = result.link

//             if (result.description !== undefined) {
//                 var description = document.createElement('p')
//                 description.innerText = result.description
//             }
//             if(result.rating !== undefined) {
//                 var description = document.createElement('p')
//                 description.innerText = result.description
//             }


    
//             title.innerText = result.title

//             document.querySelector('.results').appendChild(item)
//             item.appendChild(title)
//             item.appendChild(link)
//             if (description!==undefined && description!==null) item.appendChild(description)
    
//         })
//         console.log(results);
//     })

// })