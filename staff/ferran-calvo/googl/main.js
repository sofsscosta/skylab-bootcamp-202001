var users = []; // ej: user => { name, surname, username, password }

var searchGoogle = createSearch('.search-1', function (query) {
    googl(query, function (results) {
        createResults('.results', results);
        results.classList.toggle('results--hide')
    });
});
var searchEcosia = createSearch('.search-2', function (query) {
    ecosia(query, function (results) {
        createResults('.results', results);
     /*    var results = document.querySelector('.results-2')
        results.classList.toggle('results--hide') */
    });
});
var searchBing = createSearch('.search-3', function (query) {
    bing(query, function (results) {
        createResults('.results', results);
    /*     var results = document.querySelector('.results-3')
        results.classList.toggle('results--hide') */
    });
});
var searchYahoo = createSearch('.search-4', function (query) {
    yahoo(query, function (results) {
        createResults('.results', results);
   /*      var results = document.querySelector('.results-4')
        results.classList.toggle('results--hide') */
    });
});




var login = createLogin('.login', function(username, password) {
    var access=users.some(function(element){
        
        return element.username===username && element.password===password
    })
    if (access) {
        var search=document.querySelector('.search')
        search.classList.toggle('search--hide');
        login.classList.toggle('login--hide');
    } else alert('you cannot get in :P');
});
                        


var register= createRegister('.register', function(){
    register.classList.toggle('search--hide');
    login.classList.toggle('login--hide');                
})
