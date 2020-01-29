var users = []; // ej: user => { name, surname, username, password }

var search = createSearch('.search', function (query) {
    googl(query, function (results) {
        createResults('.results', results);
    });
});

// createSearch('.search-2', function (query) {
//     googl(query, function (results) {
//         createResults('.results-2', results);
//     });
// });

// createSearch('.search-3', function (query) {
//     googl(query, function (results) {
//         createResults('.results-3', results);
//     });
// });

var login = createLogin('.login', function(username, password) {
    if (username === 'pepito' && password === '123') {
        search.classList.toggle('search--hide');
        login.classList.toggle('login--hide');
    } else alert('you cannot get in :P');
});
